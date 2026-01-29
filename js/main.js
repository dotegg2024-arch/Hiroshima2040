// 広島県医療圏リソースマップ - メインアプリケーション

class MedicalResourceMap {
  constructor() {
    // Ensure global access immediately
    window.app = this;

    this.currentRegion = null;
    this.currentView = 'region'; // 'region' or 'hospital'
    this.currentScenario = 'current';
    this.chart = null;

    // Custom Simulation State (Drag & Drop)
    // Structure: { 'unassigned': [...names], 'group_1': [...names], 'group_2': [...names] ... }
    this.customGroups = {
      'unassigned': []
    };

    // Palette for Custom Regions (Using standard colors + others)
    this.customPalette = [
      '#EF4444', // Red
      '#F97316', // Orange
      '#F59E0B', // Amber
      '#10B981', // Emerald
      '#3B82F6', // Blue
      '#6366F1', // Indigo
      '#8B5CF6', // Violet
      '#EC4899', // Pink
      '#14B8A6'  // Teal
    ];

    this.init();
  }

  init() {
    this.initCustomState(); // Initialize the list
    // ... rest of init
    console.log('[MedicalResourceMap] init() starting...');
    try {
      this.renderMap();
      console.log('[MedicalResourceMap] renderMap() done');
    } catch (e) { console.error('renderMap failed:', e); }

    try {
      this.renderStats();
      console.log('[MedicalResourceMap] renderStats() done');
    } catch (e) { console.error('renderStats failed:', e); }

    try {
      this.setupEventListeners();
      console.log('[MedicalResourceMap] setupEventListeners() done');
    } catch (e) { console.error('setupEventListeners failed:', e); }

    try {
      this.setupResizer();
      console.log('[MedicalResourceMap] setupResizer() done');
    } catch (e) { console.error('setupResizer failed:', e); }

    try {
      // グラフは初期表示（全体）
      this.renderChart();
      console.log('[MedicalResourceMap] renderChart() done');
    } catch (e) { console.error('renderChart failed:', e); }

    try {
      // URL初期化 (最後に呼ぶことで、ロード時のパラメータ反映を行う)
      this.initUrlState();
      console.log('[MedicalResourceMap] initUrlState() done');
    } catch (e) { console.error('initUrlState failed:', e); }

    console.log('[MedicalResourceMap] init() complete!');
  }

  // Initialize Custom Groups (Populate with current regions)
  initCustomState() {
    this.customGroups = {
      'unassigned': []
    };

    // Initialize groups based on defined regions
    Object.keys(MEDICAL_DATA.regions).forEach(regionId => {
      // Find municipalities belonging to this region
      const munis = MUNICIPALITY_DATA.filter(m => m.regionId === regionId).map(m => m.name);
      this.customGroups[regionId] = munis;
    });
  }

  // ... (keeping updateChartForRegion, renderMap, renderMapLegend, renderStats, setupEventListeners as they were, just ensure we update the custom parts) ...
  // Wait, I need to make sure I don't delete methods I'm not viewing.
  // The replace_file_content tool replaces a BLOCK. I need to be careful not to delete init() if I am replacing constructor.
  // Actually, I can just replace the Custom Simulation Logic part specifically.
  // Let's scroll down to where "Custom: Municipality Click Handler" started in the previous `view_file`.
  // It was around line 373.
  // I will target the block from `toggleMunicipalitySelection` down to `renderMunicipalityPicker` or `updatePickerButtons`.

  // Let's stick to the plan: Replace the existing custom logic with the new one.
  // I will target the specific methods.

  // ----------------------------------------------------------------
  // RE-IMPLEMENTING CUSTOM LOGIC METHODS
  // ----------------------------------------------------------------

  // --- Drag and Drop Logic ---

  renderCustomInterface() {
    const container = document.getElementById('dd-interface-container');
    if (!container) return;

    // Helper to count beds/pop for a list of munis
    const getStats = (names) => {
      let pop = 0;
      let beds = 0;
      names.forEach(n => {
        const m = MUNICIPALITY_DATA.find(x => x.name === n);
        if (m) pop += (m.population2040 || 0);

        // Search all hospitals
        Object.values(MEDICAL_DATA.regions).forEach(r => {
          r.hospitals.forEach(h => {
            if (h.address.includes(n)) beds += h.beds;
          });
        });
      });
      return { pop: (pop / 10000).toFixed(1), beds };
    };

    let html = `<div class="dd-container">`;

    // 1. Unassigned Pool
    html += `
      <div>
        <div class="dd-section-title">
            <span>未割り当て自治体 (${this.customGroups['unassigned'].length})</span>
            <span style="font-size:0.7rem; font-weight:normal">ドラッグして下へ移動 ↓</span>
        </div>
        <div class="dd-pool-area dd-drop-zone" ondragover="window.app.onDragOver(event)" ondrop="window.app.onDrop(event, 'unassigned')">
            ${this.customGroups['unassigned'].map(name => this.createDraggableTag(name)).join('')}
        </div>
      </div>
    `;

    // 2. Drop Zones (Region Frames)
    html += `<div class="dd-drop-zones">`;

    // Use predefined region keys to maintain order and styling
    const regionKeys = Object.keys(MEDICAL_DATA.regions);

    regionKeys.forEach(key => {
      // Ensure group exists (it should from init)
      if (!this.customGroups[key]) this.customGroups[key] = [];

      const names = this.customGroups[key];
      const regionData = MEDICAL_DATA.regions[key];
      const color = regionData.color;
      const stats = getStats(names);

      html += `
        <div class="dd-zone" data-group="${key}" style="border-color:${color}; background:${color}08" 
             ondragover="window.app.onDragOver(event)" ondrop="window.app.onDrop(event, '${key}')">
            <div class="dd-zone-header">
                <span style="color:${color}">${regionData.name}医療圏</span>
                <span style="font-size:0.7rem; font-weight:normal;">
                    ${stats.pop}万人 / ${stats.beds}床
                </span>
            </div>
            <div class="dd-zone-content">
                 ${names.length === 0 ? '<span style="color:#cbd5e1; font-size:0.7rem;">自治体なし</span>' : ''}
                 ${names.map(name => this.createDraggableTag(name)).join('')}
            </div>
        </div>
      `;
    });

    html += `</div></div>`; // End dd-drop-zones & dd-container

    container.innerHTML = html;
  }

  createDraggableTag(name) {
    return `<div class="dd-item" draggable="true" ondragstart="window.app.onDragStart(event, '${name}')">
        <span>📍</span> ${name}
      </div>`;
  }

  // --- Drag Events ---

  onDragStart(event, name) {
    event.dataTransfer.setData("text/plain", name);
    event.target.classList.add('dragging');
  }

  onDragOver(event) {
    event.preventDefault(); // Necessary to allow dropping
    const zone = event.target.closest('.dd-zone') || event.target.closest('.dd-pool-area');
    if (zone) {
      // Visual feedback could be added here
    }
  }

  onDrop(event, targetGroup) {
    event.preventDefault();
    const name = event.dataTransfer.getData("text/plain");
    if (!name) return;

    // Find where it was
    let sourceGroup = null;
    for (const [group, list] of Object.entries(this.customGroups)) {
      if (list.includes(name)) {
        sourceGroup = group;
        break;
      }
    }

    if (sourceGroup === targetGroup) return; // No change

    // Update State
    this.customGroups[sourceGroup] = this.customGroups[sourceGroup].filter(n => n !== name);
    this.customGroups[targetGroup].push(name);

    // Re-render Custom UI
    this.renderCustomInterface();

    // Update Map
    this.updateMapForCustom();

    this.renderSimulationResult('custom');
  }

  resetCustomSimulation() {
    this.initCustomState();
    this.renderCustomInterface();
    this.updateMapForCustom();
    this.renderSimulationResult('custom');
  }

  updateMapForCustom() {
    if (window.hiroshimaMap) {
      // Pass the whole groups object and palette
      window.hiroshimaMap.updateForCustomGroups(this.customGroups, this.customPalette);
    }
  }

  // --- End Custom Logic ---

  // Duplicate init removed

  // 選択医療圏のグラフ更新
  updateChartForRegion(regionId) {
    const ctx = document.getElementById('population-chart');
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    const region = MEDICAL_DATA.regions[regionId];
    if (!region) return;

    const years = [2020, 2025, 2030, 2035, 2040];
    const populations = years.map(y => region.population[y] / 10000);

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years.map(y => y + '年'),
        datasets: [{
          label: `${region.name}医療圏 人口推移（万人）`,
          data: populations,
          borderColor: region.color,
          backgroundColor: region.color + '33', // 20% opacity
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: 'white',
          pointBorderColor: region.color,
          pointBorderWidth: 2,
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#475569',
              font: { family: "'Noto Sans JP', sans-serif", size: 12 },
              usePointStyle: true,
              boxWidth: 8
            }
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#0f172a',
            bodyColor: '#334155',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            titleFont: { family: "'Noto Sans JP', sans-serif", weight: 'bold' },
            bodyFont: { family: "'Noto Sans JP', sans-serif" },
            padding: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { color: '#64748B' }
          },
          y: {
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: {
              color: '#64748B',
              callback: (value) => value + '万'
            }
          }
        }
      }
    });
  }

  // SVGマップを描画
  renderMap() {
    const mapContainer = document.getElementById('map-container');

    // 広島県の医療圏をSVGパスで描画（簡略化した形状）
    const mapSvg = `
      <svg viewBox="0 0 600 400" class="map-svg" id="hiroshima-map">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.2"/>
          </filter>
        </defs>
        
        <!-- 備北 -->
        <path id="region-bihoku" class="map-region" 
          d="M 280 30 L 380 30 L 400 80 L 380 140 L 300 160 L 240 120 L 250 60 Z"
          fill="${MEDICAL_DATA.regions.bihoku.color}" data-region="bihoku" stroke="white" stroke-width="2"/>
        
        <!-- 広島中央 -->
        <path id="region-hiroshimaChuo" class="map-region"
          d="M 300 160 L 380 140 L 420 180 L 440 250 L 380 280 L 320 250 L 280 200 Z"
          fill="${MEDICAL_DATA.regions.hiroshimaChuo.color}" data-region="hiroshimaChuo" stroke="white" stroke-width="2"/>
        
        <!-- 尾三 -->
        <path id="region-bisan" class="map-region"
          d="M 380 280 L 440 250 L 500 270 L 520 320 L 480 360 L 400 340 L 360 300 Z"
          fill="${MEDICAL_DATA.regions.bisan.color}" data-region="bisan" stroke="white" stroke-width="2"/>
        
        <!-- 福山・府中 -->
        <path id="region-fukuyamaFuchu" class="map-region"
          d="M 420 180 L 520 160 L 580 200 L 580 280 L 520 320 L 500 270 L 440 250 Z"
          fill="${MEDICAL_DATA.regions.fukuyamaFuchu.color}" data-region="fukuyamaFuchu" stroke="white" stroke-width="2"/>
        
        <!-- 広島 -->
        <path id="region-hiroshima" class="map-region"
          d="M 100 140 L 240 120 L 300 160 L 280 200 L 320 250 L 300 320 L 200 340 L 120 280 L 80 200 Z"
          fill="${MEDICAL_DATA.regions.hiroshima.color}" data-region="hiroshima" stroke="white" stroke-width="2"/>
        
        <!-- 広島西 -->
        <path id="region-hiroshimaNishi" class="map-region"
          d="M 20 200 L 80 200 L 120 280 L 100 340 L 40 360 L 20 300 Z"
          fill="${MEDICAL_DATA.regions.hiroshimaNishi.color}" data-region="hiroshimaNishi" stroke="white" stroke-width="2"/>
        
        <!-- 呉 -->
        <path id="region-kure" class="map-region"
          d="M 200 340 L 300 320 L 340 370 L 300 400 L 200 400 L 160 370 Z"
          fill="${MEDICAL_DATA.regions.kure.color}" data-region="kure" stroke="white" stroke-width="2"/>
        
        <!-- 医療圏ラベル - Dark text for light theme -->
        <text x="310" y="100" class="region-label" fill="white" font-size="12" text-anchor="middle" font-weight="600" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">備北</text>
        <text x="360" y="220" class="region-label" fill="white" font-size="12" text-anchor="middle" font-weight="600" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">広島中央</text>
        <text x="440" y="310" class="region-label" fill="white" font-size="12" text-anchor="middle" font-weight="600" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">尾三</text>
        <text x="520" y="230" class="region-label" fill="white" font-size="12" text-anchor="middle" font-weight="600" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">福山・府中</text>
        <text x="180" y="240" class="region-label" fill="white" font-size="14" text-anchor="middle" font-weight="800" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">広島</text>
        <text x="60" y="280" class="region-label" fill="white" font-size="11" text-anchor="middle" font-weight="600" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">広島西</text>
        <text x="250" y="370" class="region-label" fill="white" font-size="12" text-anchor="middle" font-weight="600" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">呉</text>
      </svg>
    `;

    mapContainer.innerHTML = mapSvg;

    // マップ凡例を追加
    this.renderMapLegend();
  }

  renderMapLegend() {
    const legendContainer = document.getElementById('map-legend');
    if (!legendContainer) return; // Skip if element doesn't exist (Leaflet mode)

    const regions = MEDICAL_DATA.regions;

    let legendHTML = '';
    for (const [key, region] of Object.entries(regions)) {
      legendHTML += `
        <div class="legend-item" data-region="${key}">
          <span class="legend-color" style="background: ${region.color}"></span>
          <span>${region.name}</span>
        </div>
      `;
    }
    legendContainer.innerHTML = legendHTML;
  }

  // 県全体の統計を表示
  renderStats() {
    const stats = MEDICAL_DATA.prefectureStats;
    const popChange = ((stats.totalPopulation2040 - stats.totalPopulation2020) / stats.totalPopulation2020 * 100).toFixed(1);

    document.getElementById('prefecture-stats').innerHTML = `
      <div class="stat-card">
        <div class="stat-value">${(stats.totalPopulation2040 / 10000).toFixed(0)}万</div>
        <div class="stat-label">総人口（2020年）</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${(stats.totalPopulation2040 / 10000).toFixed(1)}万</div>
        <div class="stat-label">推計人口（2040年）</div>
        <span class="stat-change negative">${popChange}%</span>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.totalBeds2023.toLocaleString()}</div>
        <div class="stat-label">県内総病床数</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.avgTransportTime2022}分</div>
        <div class="stat-label">平均搬送時間</div>
      </div>
    `;
  }

  // イベントリスナーの設定
  setupEventListeners() {
    // マップ上の医療圏クリック
    document.querySelectorAll('.map-region').forEach(region => {
      region.addEventListener('click', (e) => {
        const regionId = e.target.dataset.region;
        // In custom mode, toggle instead of select
        if (this.currentScenario === 'custom') {
          // Custom Mode Logic - do nothing on map click for now
        } else {
          this.selectRegion(regionId);
        }
      });
    });

    // 凡例クリック
    document.getElementById('map-legend').addEventListener('click', (e) => {
      const item = e.target.closest('.legend-item');
      if (item) {
        if (this.currentScenario === 'custom') {
          // Do nothing
        } else {
          this.selectRegion(item.dataset.region);
        }
      }
    });

    // 表示切替タブ
    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const view = e.currentTarget.dataset.view;
        this.switchView(view);
      });
    });

    // シナリオ切替 (Radio Inputs)
    document.querySelectorAll('input[name="scenario"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        console.log('Scenario radio changed:', e.target.value);
        const scenario = e.target.value;
        this.selectScenario(scenario);
      });
    });
  }

  // 医療圏を選択
  selectRegion(regionId, updateUrl = true) {
    // If in custom mode, we shouldn't be here typically if triggered by map click,
    // but if triggered programmatically or by simple SVG click:
    if (this.currentScenario === 'custom') {
      return;
    }

    this.currentRegion = regionId;
    const region = MEDICAL_DATA.regions[regionId];

    // マップ上のアクティブ状態を更新
    document.querySelectorAll('.map-region').forEach(r => r.classList.remove('active'));
    document.querySelector(`[data-region="${regionId}"]`)?.classList.add('active');

    // Leafletマップのマーカーもハイライト
    if (window.hiroshimaMap) {
      window.hiroshimaMap.selectRegion(regionId); // This handles marker highlighting and zoom
    }

    // Chart更新
    this.updateChartForRegion(regionId);

    if (updateUrl) this.updateUrl();
  }

  // 表示切替
  switchView(view, updateUrl = true) {
    this.currentView = view;

    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.view === view);
    });

    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    const targetContent = document.getElementById(`tab-${view}`);
    if (targetContent) targetContent.classList.add('active');

    if (updateUrl) this.updateUrl();
  }

  selectScenario(scenarioId, updateUrl = true) {
    console.log('Switching scenario to:', scenarioId);
    this.currentScenario = scenarioId;

    // Sync to map instance directly if possible to avoid state mismatch
    if (window.hiroshimaMap) {
      window.hiroshimaMap.currentScenario = scenarioId;
    }

    // Update Radio Button State
    const radio = document.getElementById(`scenario-${scenarioId}`);
    if (radio) {
      radio.checked = true;
    }

    // Custom Controls Visibility
    const customControls = document.getElementById('custom-controls');
    const mapContainer = document.getElementById('leaflet-map');

    if (scenarioId === 'custom') {
      if (!customControls) {
        alert('エラー: カスタムコントロール要素が見つかりません');
        return;
      }
      customControls.style.display = 'block';
      if (mapContainer) mapContainer.style.cursor = 'default';

      try {
        this.renderSimulationResult('custom');
        // Render/Update Drag & Drop Interface
        this.renderCustomInterface();
        this.updateMapForCustom();
      } catch (e) {
        console.error(e);
        alert('カスタムモードの描画中にエラーが発生しました: ' + e.message);
      }

    } else {
      if (customControls) customControls.style.display = 'none';
      if (mapContainer) mapContainer.style.cursor = '';
      this.renderSimulationResult(scenarioId);

      // Call Map logic to update visuals
      if (window.hiroshimaMap && window.hiroshimaMap.updateForScenario) {
        window.hiroshimaMap.updateForScenario(scenarioId);
      }
    }

    if (updateUrl) this.updateUrl();
  }

  // Custom: Municipality Click Handler
  // Old Custom Logic Removed


  // シミュレーション結果を描画
  renderSimulationResult(scenarioId) {
    const resultContainer = document.getElementById('simulation-result');

    let regionCount = 7;
    let totalPop2040 = 0;
    let totalBeds = 0;
    let avgTransport = 0;
    let avgArrival = 0; // Add Arrival Time calc

    // Helper to calc stats from a list of region objects
    const calcStats = (regionsList) => {
      // logic...
    };

    if (scenarioId === 'custom') {
      // New Logic: Iterate over customGroups
      // Unassigned groups are treated as individual? Or standard region?
      // Let's treat "Unassigned" as falling back to their original region behavior (but practically we should maybe group them by original or treat as n regions)
      // For simplicity in this sim: Unassigned are treated as 1 region each? 
      // User request: "自治体の割り振りができる" -> Unassigned shouldn't really exist in a complete sim, 
      // but while editing, let's treat Unassigned items as independent (count = 1 each) or ignored?
      // Let's treat them as independent.

      const unassignedNames = this.customGroups['unassigned'];
      const groupKeys = Object.keys(this.customGroups).filter(k => k !== 'unassigned');

      const activeGroups = groupKeys.filter(k => this.customGroups[k].length > 0);

      // Effective regions = Active Groups + Unassigned Count
      regionCount = activeGroups.length + unassignedNames.length;

      totalPop2040 = 0;
      totalBeds = 0;
      avgTransport = 0;
      avgArrival = 0;

      const allHospitals = [];
      Object.values(MEDICAL_DATA.regions).forEach(r => {
        if (r.hospitals) allHospitals.push(...r.hospitals);
      });

      const getMuniStats = (muniNameList) => {
        let pop = 0;
        let beds = 0;
        muniNameList.forEach(name => {
          const mData = MUNICIPALITY_DATA.find(m => m.name === name);
          if (mData) pop += (mData.population2040 || 0);
          const munHospitals = allHospitals.filter(h => h.address.includes(name));
          munHospitals.forEach(h => beds += h.beds);
        });
        return { pop, beds };
      };

      let statsList = [];

      // 1. Unassigned (Independent)
      unassignedNames.forEach(name => {
        const s = getMuniStats([name]);
        const mData = MUNICIPALITY_DATA.find(m => m.name === name);
        let transport = 45;
        let arrival = 9.4;
        if (mData && MEDICAL_DATA.regions[mData.regionId]) {
          transport = MEDICAL_DATA.regions[mData.regionId].avgTransportTime;
          arrival = MEDICAL_DATA.regions[mData.regionId].avgArrivalTime || 9.4;
        }
        statsList.push({
          pop: s.pop,
          beds: s.beds,
          transport: transport,
          arrival: arrival
        });
      });

      // 2. Groups
      activeGroups.forEach(key => {
        const group = this.customGroups[key];
        const s = getMuniStats(group);

        let transportSum = 0;
        let arrivalSum = 0;

        group.forEach(name => {
          const mData = MUNICIPALITY_DATA.find(m => m.name === name);
          if (mData && MEDICAL_DATA.regions[mData.regionId]) {
            transportSum += MEDICAL_DATA.regions[mData.regionId].avgTransportTime;
            arrivalSum += (MEDICAL_DATA.regions[mData.regionId].avgArrivalTime || 9.4);
          } else {
            transportSum += 45;
            arrivalSum += 9.4;
          }
        });

        const avgT = transportSum / group.length;
        // Penalty for large area integration
        const penalty = 2.0 * (group.length - 1);

        statsList.push({
          pop: s.pop,
          beds: s.beds,
          transport: avgT + penalty,
          arrival: (arrivalSum / group.length) + (1.0 * (group.length - 1))
        });
      });

      if (statsList.length > 0) {
        statsList.forEach(s => {
          totalPop2040 += s.pop;
          totalBeds += s.beds;
          avgTransport += s.transport;
          avgArrival += s.arrival;
        });
        avgTransport /= statsList.length;
        avgArrival /= statsList.length;
      }

    } else if (scenarioId === 'current') {
      Object.values(MEDICAL_DATA.regions).forEach(r => {
        totalPop2040 += r.population[2040];
        totalBeds += r.beds.total;
        avgTransport += r.avgTransportTime;
        avgArrival += (r.avgArrivalTime || 9.4);
      });
      avgTransport /= 7;
      avgArrival /= 7;
      regionCount = 7;
    } else if (scenarioId === 'scenario1') {
      regionCount = 6;
      Object.entries(MEDICAL_DATA.regions).forEach(([key, r]) => {
        totalPop2040 += r.population[2040];
        totalBeds += r.beds.total;
        if (key !== 'hiroshimaNishi') {
          avgTransport += r.avgTransportTime;
          avgArrival += (r.avgArrivalTime || 9.4);
        }
      });
      // 統合により広域化 → 搬送時間は増加（+2分と仮定）、到着時間は+1分と仮定
      avgTransport = (avgTransport / 6) + 2;
      avgArrival = (avgArrival / 6) + 1;
    } else if (scenarioId === 'scenario2') {
      regionCount = 5;
      Object.entries(MEDICAL_DATA.regions).forEach(([key, r]) => {
        totalPop2040 += r.population[2040];
        totalBeds += r.beds.total;
        if (key !== 'hiroshimaNishi' && key !== 'bihoku') {
          avgTransport += r.avgTransportTime;
          avgArrival += (r.avgArrivalTime || 9.4);
        }
      });
      // 統合により広域化 → 搬送時間は増加（+5分と仮定）、到着時間は+2.5分と仮定
      avgTransport = (avgTransport / 5) + 5;
      avgArrival = (avgArrival / 5) + 2.5;
    }

    const bedsPerRegion = totalBeds / regionCount;
    const popPerRegion = totalPop2040 / regionCount;

    const transportClass = avgTransport < 46 ? 'good' : avgTransport < 50 ? 'warning' : 'bad';
    const balanceClass = (bedsPerRegion / (popPerRegion / 10000)) > 100 ? 'good' : 'warning';
    // Arrival time mock thresholds
    const arrivalClass = avgArrival < 9.5 ? 'good' : avgArrival < 11 ? 'warning' : 'bad';

    resultContainer.innerHTML = `
      <div class="result-row">
        <span class="result-label">医療圏数</span>
        <span class="result-value">${regionCount}圏域</span>
      </div>
      <div class="result-row">
        <span class="result-label">圏域あたり平均人口</span>
        <span class="result-value">${(popPerRegion / 10000).toFixed(1)}万人</span>
      </div>
      <div class="result-row">
        <span class="result-label">圏域あたり平均病床数</span>
        <span class="result-value ${balanceClass}">${bedsPerRegion.toFixed(0)}床</span>
      </div>
      <div class="result-row">
        <span class="result-label">平均搬送時間(病院まで)</span>
        <span class="result-value ${transportClass}">${avgTransport.toFixed(1)}分</span>
      </div>
      <div class="result-row">
        <span class="result-label">平均現場到着時間</span>
        <span class="result-value ${arrivalClass}">${avgArrival.toFixed(1)}分</span>
      </div>
    `;
  }

  // グラフを描画（Chart.js使用）- 全医療圏の人口推移
  renderChart() {
    const ctx = document.getElementById('population-chart');
    if (!ctx) return;

    // 既存のチャートを破棄
    if (this.chart) {
      this.chart.destroy();
    }

    const years = [2020, 2025, 2030, 2035, 2040];

    // 全医療圏のデータセットを作成 (Enhanced for larger display)
    const datasets = Object.entries(MEDICAL_DATA.regions).map(([id, region]) => ({
      label: region.name + '医療圏',
      data: years.map(y => region.population[y] / 10000),
      borderColor: region.color,
      backgroundColor: region.color + '20', // Light fill
      fill: true,
      tension: 0.4,
      pointRadius: 8,
      pointHoverRadius: 12,
      borderWidth: 5,
      pointBackgroundColor: 'white',
      pointBorderColor: region.color,
      pointBorderWidth: 4
    }));

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years.map(y => y + '年'),
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          title: {
            display: true,
            text: '広島県 7医療圏 人口推移予測',
            font: { family: "'Noto Sans JP', sans-serif", size: 20, weight: 'bold' },
            color: '#1e293b',
            padding: { top: 10, bottom: 20 }
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: '#334155',
              font: { family: "'Noto Sans JP', sans-serif", size: 14, weight: 'bold' },
              usePointStyle: true,
              padding: 24,
              boxWidth: 12
            }
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            titleColor: '#0f172a',
            bodyColor: '#334155',
            borderColor: '#cbd5e1',
            borderWidth: 1,
            titleFont: { family: "'Noto Sans JP', sans-serif", size: 16, weight: 'bold' },
            bodyFont: { family: "'Noto Sans JP', sans-serif", size: 15 },
            padding: 16,
            boxPadding: 6,
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.parsed.y.toFixed(1)}万人`
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(0,0,0,0.08)', lineWidth: 1 },
            ticks: {
              color: '#475569',
              font: { size: 16, weight: 'bold' }
            }
          },
          y: {
            grid: { color: 'rgba(0,0,0,0.08)', lineWidth: 1 },
            ticks: {
              color: '#475569',
              font: { size: 14, weight: 'bold' },
              callback: (value) => value + '万人'
            },
            title: {
              display: true,
              text: '人口（万人）',
              font: { size: 14, weight: 'bold' },
              color: '#64748b'
            }
          }
        }
      }
    });
  }

  setupResizer() {
    // Correctly target the handle inside info-panel (as per index.html inspection)
    const handle = document.getElementById('resize-handle');
    const mainContent = document.querySelector('.main-content');

    if (!handle || !mainContent) {
      console.warn('Resizer: handle or mainContent not found');
      return;
    }

    let isResizing = false;

    handle.addEventListener('mousedown', (e) => {
      isResizing = true;
      handle.classList.add('active');
      document.body.style.cursor = 'col-resize';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;

      const containerRect = mainContent.getBoundingClientRect();
      // Calculate Width from Right Edge
      // Since grid is [1fr, sidebar_width], the sidebar width is Distance from Right Edge to Mouse
      const newWidth = containerRect.right - e.clientX;

      // Limits (min 200px, max 800px)
      if (newWidth > 200 && newWidth < 800) {
        mainContent.style.gridTemplateColumns = `1fr ${newWidth}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      if (isResizing) {
        isResizing = false;
        handle.classList.remove('active');
        document.body.style.cursor = '';
        // Trigger map resize
        if (window.hiroshimaMap && window.hiroshimaMap.map) {
          window.hiroshimaMap.map.invalidateSize();
        }
      }
    });
  }

  // URL状態管理
  initUrlState() {
    window.addEventListener('popstate', (e) => {
      if (e.state) {
        this.restoreState(e.state);
      } else {
        this.parseUrlParams();
      }
    });
    this.parseUrlParams();
  }

  parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const regionId = params.get('region');
    const view = params.get('view');
    const scenario = params.get('scenario');

    if (scenario && MEDICAL_DATA.reorganizationScenarios && MEDICAL_DATA.reorganizationScenarios.some(s => s.id === scenario)) {
      this.selectScenario(scenario, false);
    }

    if (regionId && MEDICAL_DATA.regions[regionId]) {
      // Just update map view, which triggers side panel update.
      // We need to wait for map to be ready? 
      // Main.js runs after DOM content loaded, but map init might be async.
      // It's safe to call selectRegion here as it mainly updates DOM classes and chart.
      // Map.js listens to window global or we might need to sync.
      this.selectRegion(regionId, false);
    } else {
      if (window.hiroshimaMap) window.hiroshimaMap.resetView();
    }
  }

  updateUrl(push = true) {
    const params = new URLSearchParams();

    if (this.currentRegion) {
      params.set('region', this.currentRegion);
    }
    if (this.currentView && this.currentView !== 'region') {
      params.set('view', this.currentView);
    }
    if (this.currentScenario && this.currentScenario !== 'current') {
      params.set('scenario', this.currentScenario);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    const state = {
      region: this.currentRegion,
      view: this.currentView,
      scenario: this.currentScenario
    };

    if (push) {
      window.history.pushState(state, '', newUrl);
    } else {
      window.history.replaceState(state, '', newUrl);
    }
  }

  restoreState(state) {
    if (state.scenario) {
      this.selectScenario(state.scenario, false);
    }

    if (state.region) {
      this.selectRegion(state.region, false);
    } else {
      if (window.hiroshimaMap) window.hiroshimaMap.resetView();
      this.currentRegion = null;
      // map.js handles side panel reset via resetView
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new MedicalResourceMap();
});
