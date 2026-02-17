// 広島県医療圏リソースマップ - メインアプリケーション

class MedicalResourceMap {
  constructor() {
    // Ensure global access immediately
    window.app = this;

    this.currentRegion = null;
    this.currentView = 'region'; // 'region' or 'hospital'
    this.currentScenario = 'current';
    this.chart = null;
    this.ageChart = null; // New Age Composition Chart
    this.currentAgeChartYear = 2020; // Default Year for Age Chart

    // New Analysis Unit State
    this.currentAnalysisUnit = 'region'; // 'region' or 'municipality'
    this.currentMunicipality = null;

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

    // Ensure global access
    window.app = this;

    console.log('[MedicalResourceMap] init() starting...');

    // 1. Initialize Regional Age Data (10-bin) FIRST
    try {
      this.initAgeCompositionData();
      console.log('[MedicalResourceMap] initAgeCompositionData() done. Keys:', Object.keys(MEDICAL_DATA.regions.hiroshima.ageComposition));
      if (!MEDICAL_DATA.regions.hiroshima.ageComposition) alert("エイジデータ生成エラー: 広島医療圏データなし");
    } catch (e) {
      console.error('initAgeCompositionData failed:', e);
      alert("初期化エラー(AgeData): " + e.message);
    }

    // 2. Generate Municipality Mock Data (depends on Region Data)
    try {
      this.generateMunicipalityMockData();
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
      this.renderAgeChart(); // Initial Age Chart Render
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

  // Initialize 10-bin Age Composition Data for Regions
  initAgeCompositionData() {
    const baseTrends = {
      2020: [8.0, 9.0, 9.5, 11.0, 14.0, 15.0, 12.0, 11.0, 7.0, 3.5],
      2025: [7.5, 8.5, 9.0, 10.0, 12.5, 14.5, 13.0, 12.0, 8.5, 4.5],
      2030: [7.0, 8.0, 8.5, 9.5, 11.0, 13.5, 14.0, 13.0, 10.0, 5.5],
      2035: [6.5, 7.5, 8.0, 9.0, 10.0, 12.0, 14.0, 14.0, 11.5, 7.5],
      2040: [6.0, 7.0, 7.5, 8.5, 9.5, 11.0, 13.0, 15.0, 13.0, 9.5]
    };

    const labels = ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90+"];

    Object.values(MEDICAL_DATA.regions).forEach(region => {
      const rData = {};
      let type = 'standard';
      if (['hiroshima', 'fukuyamaFuchu', 'hiroshimaChuo'].includes(region.id)) type = 'urban';
      if (['bihoku', 'bisan', 'kure'].includes(region.id)) type = 'rural';

      for (const [year, rates] of Object.entries(baseTrends)) {
        const yearData = {};
        let adjustedRates = [...rates];

        if (type === 'urban') {
          adjustedRates[2] += 1; // 20s
          adjustedRates[3] += 1; // 30s
          adjustedRates[7] -= 1; // 70s
          adjustedRates[8] -= 1; // 80s
        } else if (type === 'rural') {
          adjustedRates[0] -= 1;
          adjustedRates[2] -= 2;
          adjustedRates[7] += 1.5;
          adjustedRates[8] += 1.5;
        }

        // Normalize
        const sum = adjustedRates.reduce((a, b) => a + b, 0);
        adjustedRates = adjustedRates.map(v => (v / sum) * 100);

        labels.forEach((label, idx) => {
          yearData[label] = parseFloat(adjustedRates[idx].toFixed(1));
        });

        // Adjust last to match 100%
        let currentSum = Object.values(yearData).reduce((a, b) => a + b, 0);
        yearData["90+"] = parseFloat((yearData["90+"] + (100 - currentSum)).toFixed(1));

        rData[year] = yearData;
      }
      region.ageComposition = rData;
    });
  }

  // Generate Mock Data for Municipalities with Tier-based Logic
  generateMunicipalityMockData() {
    // Tier Definitions
    const tiers = {
      1: ["広島市中区", "広島市南区", "広島市安佐南区", "府中町", "東広島市"], // Urban/Growth
      3: ["安芸太田町", "北広島町", "江田島市", "神石高原町", "大崎上島町", "世羅町", "庄原市"] // Rural/Depopulation
      // Others are Tier 2 (Standard)
    };

    const getTier = (name) => {
      if (tiers[1].includes(name)) return 1;
      if (tiers[3].includes(name)) return 3;
      return 2;
    };

    MUNICIPALITY_DATA.forEach(muni => {
      const region = MEDICAL_DATA.regions[muni.regionId];
      if (!region) return;

      const tier = getTier(muni.name);

      // 1. Population Projection (2020-2040)
      // Base ratio from 2020
      const basePop2020 = muni.population;
      const regionPop2020 = region.population[2020];
      const baseRatio = basePop2020 / regionPop2020;

      muni.populationProjection = {};

      const years = [2020, 2025, 2030, 2035, 2040];
      years.forEach(year => {
        // Calculate Region's decline rate relative to 2020
        const regionDeclineRate = region.population[year] / region.population[2020];

        // Adjust decline rate based on Tier
        let adjustedRate = regionDeclineRate;
        if (year > 2020) {
          const progress = (year - 2020) / 20; // 0.0 to 1.0
          if (tier === 1) {
            // Tier 1: Resists decline (e.g., 10% better retention)
            adjustedRate = regionDeclineRate * (1 + (0.10 * progress));
          } else if (tier === 3) {
            // Tier 3: Accelerates decline (e.g., 20% worse retention)
            adjustedRate = regionDeclineRate * (1 - (0.20 * progress));
          }
        }

        // Calculate projected population
        muni.populationProjection[year] = Math.floor(basePop2020 * adjustedRate);
      });
      muni.tier = tier; // Store for export

      // 2. Age Composition
      if (region.ageComposition) {
        // Deep Copy Region's Age Data as baseline
        muni.ageComposition = JSON.parse(JSON.stringify(region.ageComposition));

        // Adjust based on Tier
        Object.keys(muni.ageComposition).forEach(year => {
          const yearData = muni.ageComposition[year];
          // Factors for adjustment
          let youngFactor = 0; // Add to 0-19
          let oldFactor = 0;   // Add to 70+

          if (tier === 1) {
            youngFactor = 2.0;
            oldFactor = -2.0;
          } else if (tier === 3) {
            youngFactor = -2.0;
            oldFactor = 4.0;
          }

          // Apply factors if non-zero
          if (youngFactor !== 0 || oldFactor !== 0) {
            const keys = Object.keys(yearData); // 0-9, 10-19 ...

            // Adjust Young
            yearData["0-9"] += (youngFactor / 2);
            yearData["10-19"] += (youngFactor / 2);

            // Adjust Old
            yearData["70-79"] += (oldFactor / 3);
            yearData["80-89"] += (oldFactor / 3);
            yearData["90+"] += (oldFactor / 3);

            // Clamp and Normalize
            let sum = 0;
            keys.forEach(k => {
              if (yearData[k] < 0) yearData[k] = 0;
              sum += yearData[k];
            });

            keys.forEach(k => {
              yearData[k] = parseFloat(((yearData[k] / sum) * 100).toFixed(1));
            });
          }
        });
      }
    });

    console.log('[MedicalResourceMap] Municipality Mock Data Generated with Tiers');
  }

  // --- Analysis Unit Switching Logic ---

  switchAnalysisUnit(unit) {
    this.currentAnalysisUnit = unit;

    // Toggle UI Visibility
    const selector = document.getElementById('municipality-selector-container');
    if (selector) {
      selector.style.display = (unit === 'municipality') ? 'block' : 'none';
    }

    if (unit === 'municipality') {
      // Ensure selector is populated
      this.renderMunicipalitySelector();

      // If no municipality selected, maybe select first? Or wait for user?
      // Let's reset charts if no muni selected
      if (!this.currentMunicipality) {
        // Maybe select the first one of the current region or global?
        // let's just clear for now, or select "Hiroshima City Naka Ward" as default?
        // Better: Select "Hiroshima City Naka Ward" if nothing selected
        const firstMuni = MUNICIPALITY_DATA[0].name;
        this.selectMunicipality(firstMuni);
        document.getElementById('municipality-select').value = firstMuni;
      } else {
        this.renderChart();
        this.renderAgeChart();
      }
    } else {
      // Back to region mode: Render current region or global
      this.renderChart();
      this.renderAgeChart();
    }
  }

  renderMunicipalitySelector() {
    const select = document.getElementById('municipality-select');
    if (!select || select.options.length > 1) return; // Already populated

    // Group by Region for nicety
    const regionNames = {};
    Object.values(MEDICAL_DATA.regions).forEach(r => regionNames[r.id] = r.name);

    let html = '<option value="">市区町村を選択...</option>';

    Object.keys(MEDICAL_DATA.regions).forEach(rId => {
      const munis = MUNICIPALITY_DATA.filter(m => m.regionId === rId);
      if (munis.length > 0) {
        html += `<optgroup label="${regionNames[rId]}医療圏">`;
        munis.forEach(m => {
          html += `<option value="${m.name}">${m.name}</option>`;
        });
        html += `</optgroup>`;
      }
    });

    select.innerHTML = html;
  }

  selectMunicipality(name) {
    if (!name) return;
    this.currentMunicipality = name;

    // Highlight on Map (Yellow)
    if (window.hiroshimaMap && window.hiroshimaMap.highlightMunicipality) {
      window.hiroshimaMap.highlightMunicipality(name);
    }

    this.renderChart();
    this.renderAgeChart();
  }

  // ... (renderChart skipped for brevity if not modifying) ...

  renderAgeChart() {
    const ctx = document.getElementById('age-composition-chart');
    if (!ctx) return;

    // Destroy old if exists
    if (this.ageChartInstance) {
      this.ageChartInstance.destroy();
      this.ageChartInstance = null;
    }

    const year = this.currentAgeChartYear;
    let ageData = {};
    let label = "";

    // Determine Data Source
    if (this.currentAnalysisUnit === 'municipality' && this.currentMunicipality) {
      const muni = MUNICIPALITY_DATA.find(m => m.name === this.currentMunicipality);
      if (muni && muni.ageComposition && muni.ageComposition[year]) {
        ageData = muni.ageComposition[year];
        label = `${this.currentMunicipality} (${year}年)`;
      } else {
        // Fallback or empty
        console.warn('No age data for muni:', this.currentMunicipality);
      }
    } else {
      // Region Data
      const regionId = this.currentRegion || 'hiroshima'; // Default
      const region = MEDICAL_DATA.regions[regionId];
      if (region && region.ageComposition && region.ageComposition[year]) {
        ageData = region.ageComposition[year];
        label = `${region.name}医療圏 (${year}年)`;
      }
    }

    // Label Suffix Logic (User Request)
    if (year === 2020) {
      label += " ※実績値 (国勢調査)";
    } else {
      label += " ※推計値";
    }

    const labels = Object.keys(ageData); // 0-9 to 90+
    const values = Object.values(ageData);

    // Color Palette (Gradient-ish)
    const backgroundColors = [
      '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', // 0-39 (Blue)
      '#34d399', '#10b981', // 40-59 (Green)
      '#fbbf24', '#f59e0b', // 60-79 (Amber)
      '#f87171', '#b91c1c'  // 80+ (Red)
    ];

    try {
      this.ageChartInstance = new Chart(ctx, {
        type: 'bar', // Horizontal bar? 
        // Standard bar is vertical. "indexAxis: 'y'" for horizontal
        data: {
          labels: labels.map(l => l + '歳'),
          datasets: [{
            label: '人口構成比 (%)',
            data: values,
            backgroundColor: backgroundColors.slice(0, labels.length),
            barPercentage: 0.8
          }]
        },
        options: {
          indexAxis: 'y', // Horizontal Layout
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: label,
              font: { size: 16 }
            },
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.raw + '%';
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 25, // Fixed max/min for comparison? Or auto?
              // Let's keep it somewhat fixed to show growth clearly
              suggestedMax: 20
            }
          }
        }
      });
    } catch (err) {
      console.error("Chart Render Err:", err);
    }
  }
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

  // 選択医療圏・市区町村のグラフ更新
  renderChart() {
    try {
      const ctx = document.getElementById('population-chart');
      if (!ctx) return;

      if (this.chart) {
        this.chart.destroy();
      }

      // Constants
      const years = [2020, 2025, 2030, 2035, 2040];
      const labels = years.map(y => {
        if (y === 2020) return y + '年 (実績)';
        return y + '年';
      });
      let datasets = [];

      const formatPop = (val) => {
        // Keep 1 decimal place
        return parseFloat((val / 10000).toFixed(1));
      };

      // Determine Data Source
      if (this.currentAnalysisUnit === 'municipality') {
        if (this.currentMunicipality) {
          const muni = MUNICIPALITY_DATA.find(m => m.name === this.currentMunicipality);
          if (muni && muni.populationProjection) {
            datasets = [{
              label: `${muni.name} 人口推移（万人）`,
              data: years.map(y => formatPop(muni.populationProjection[y])),
              borderColor: '#6366F1', // Indigo
              backgroundColor: '#6366F133',
              fill: true,
              tension: 0.4,
              pointRadius: 5,
              pointHoverRadius: 7,
              pointBackgroundColor: 'white',
              pointBorderColor: '#6366F1',
              pointBorderWidth: 2,
              borderWidth: 3
            }];
          }
        }
      } else {
        // Region Mode
        const regionId = this.currentRegion;
        if (regionId && MEDICAL_DATA.regions[regionId]) {
          const region = MEDICAL_DATA.regions[regionId];
          datasets = [{
            label: `${region.name}医療圏 人口推移（万人）`,
            data: years.map(y => formatPop(region.population[y])),
            borderColor: region.color,
            backgroundColor: region.color + '33',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: 'white',
            pointBorderColor: region.color,
            pointBorderWidth: 2,
            borderWidth: 3
          }];
        }
      }

      // If no datasets (e.g. no selection), maybe empty chart or avoid creating
      if (datasets.length === 0) return;

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: datasets
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
              displayColors: false,
              callbacks: {
                label: (context) => {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += context.parsed.y + '万人';
                  }
                  return label;
                }
              }
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
                callback: (value) => value.toFixed(1) + '万'
              }
            }
          }
        }
      });
    } catch (e) { console.error('renderChart failed:', e); }
  }

  // --- Age Composition Chart Methods ---

  switchAgeChartYear(year) {
    this.currentAgeChartYear = parseInt(year);

    // Update Tabs UI
    document.querySelectorAll('.year-tab').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.year) === this.currentAgeChartYear);
    });

    this.renderAgeChart();
  }

  renderAgeChart() {
    try {
      const ctx = document.getElementById('age-composition-chart');
      if (!ctx) return;

      if (this.ageChart) {
        this.ageChart.destroy();
      }

      // Keys for 10-year bins
      const labels = ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90+"];
      let ageData = {};
      labels.forEach(l => ageData[l] = 0);

      let label = '';

      // Determine Data Source
      if (this.currentAnalysisUnit === 'municipality') {
        if (this.currentMunicipality) {
          const muni = MUNICIPALITY_DATA.find(m => m.name === this.currentMunicipality);
          if (muni) {
            label = `${muni.name} (${this.currentAgeChartYear}年) ※推計値`;
            if (muni.ageComposition && muni.ageComposition[this.currentAgeChartYear]) {
              ageData = muni.ageComposition[this.currentAgeChartYear];
            } else {
              labels.forEach(l => ageData[l] = 10);
            }
          } else {
            label = `データが見つかりません`;
          }
        } else {
          label = `市区町村を選択してください`;
        }
      } else {
        // Region Mode Or Default
        const targetRegion = (this.currentAnalysisUnit === 'region' && this.currentRegion)
          ? MEDICAL_DATA.regions[this.currentRegion] : null;

        if (targetRegion) {
          label = `${targetRegion.name}医療圏 (${this.currentAgeChartYear}年) ※推計値`;
          if (targetRegion.ageComposition && targetRegion.ageComposition[this.currentAgeChartYear]) {
            ageData = targetRegion.ageComposition[this.currentAgeChartYear];
          } else {
            labels.forEach(l => ageData[l] = 10);
          }
        } else {
          // Aggregate
          label = `広島県全体 (${this.currentAgeChartYear}年) ※推計値`;
          let counts = {};
          labels.forEach(l => counts[l] = 0);
          let count = 0;

          Object.values(MEDICAL_DATA.regions).forEach(r => {
            if (r.ageComposition && r.ageComposition[this.currentAgeChartYear]) {
              const d = r.ageComposition[this.currentAgeChartYear];
              labels.forEach(l => {
                counts[l] += (d[l] || 0);
              });
              count++;
            }
          });

          if (count > 0) {
            labels.forEach(l => {
              ageData[l] = parseFloat((counts[l] / count).toFixed(1));
            });
          }
        }
      }

      const values = labels.map(l => ageData[l]);

      // Gradient-like colors for age groups (Blue -> Green -> Orange -> Red -> Purple)
      const colors = [
        '#E0F2FE', '#BAE6FD', '#7DD3FC', '#38BDF8', // 0-39 (Blues)
        '#34D399', '#10B981', // 40-59 (Greens)
        '#FBBF24', '#F59E0B', // 60-79 (Ambers)
        '#EF4444', '#B91C1C'  // 80+ (Reds)
      ];

      this.ageChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels.map(l => l + '歳'),
          datasets: [{
            label: '割合(%)',
            data: values,
            backgroundColor: colors,
            borderColor: '#e2e8f0',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y', // Horizontal bars
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: label,
              font: { family: "'Noto Sans JP', sans-serif", size: 14 },
              padding: { bottom: 10 }
            },
            tooltip: {
              callbacks: {
                label: (context) => context.raw + '%'
              }
            }
          },
          scales: {
            x: {
              min: 0,
              max: 25, // Adjusted max for 10-year bins (usually around 10-15%)
              grid: { color: 'rgba(0,0,0,0.05)' },
              title: { display: true, text: '人口構成比 (%)' }
            },
            y: {
              grid: { display: false }
            }
          }
        }
      });
    } catch (e) {
      console.error('renderAgeChart failed:', e);
    }
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
    // Chart更新
    this.renderChart();
    this.renderAgeChart(); // Update Age Chart

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

  // グラフを描画（Chart.js使用）- 人口推移
  renderChart() {
    const ctx = document.getElementById('population-chart');
    if (!ctx) return;

    // 既存のチャートを破棄
    if (this.chart) {
      this.chart.destroy();
    }

    const years = [2020, 2025, 2030, 2035, 2040];
    let datasets = [];
    let title = '';

    if (this.currentAnalysisUnit === 'municipality' && this.currentMunicipality) {
      // --- Municipality Mode ---
      const muni = MUNICIPALITY_DATA.find(m => m.name === this.currentMunicipality);
      if (muni && muni.populationProjection) {
        title = `${muni.name} 人口推移予測`;
        datasets = [{
          label: muni.name,
          data: years.map(y => muni.populationProjection[y]),
          borderColor: '#6366F1', // Indigo
          backgroundColor: '#6366F120',
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          borderWidth: 4,
          pointBackgroundColor: 'white',
          pointBorderColor: '#6366F1',
          pointBorderWidth: 3
        }];
      }
    } else {
      // --- Region Mode (Default) ---
      title = '広島県 7医療圏 人口推移予測';
      datasets = Object.entries(MEDICAL_DATA.regions).map(([id, region]) => ({
        label: region.name + '医療圏',
        data: years.map(y => region.population[y] / 10000), // Original was in Man-nin (10k units)?
        // wait, original logic: data: years.map(y => region.population[y] / 10000)
        // But my muni projection is raw numbers. 
        // I should probably display muni in 10k too if large, or raw if small.
        // For consistency, let's stick to Man-nin for regions.
        // For Munis, they are smaller. Let's use Man-nin as well but formatted?
        // Or dynamic Y axis? Chart.js handles dynamic Y.
        // But the callback `value + '万人'` assumes Man-nin.
        // Let's divide muni by 10000 as well.
        borderColor: region.color,
        backgroundColor: region.color + '20', // Light fill
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        borderWidth: 4,
        pointBackgroundColor: 'white',
        pointBorderColor: region.color,
        pointBorderWidth: 3
      }));
    }

    // Adjust dataset values for munis if handled separately above
    if (this.currentAnalysisUnit === 'municipality' && datasets.length > 0) {
      datasets[0].data = datasets[0].data.map(v => v / 10000);
    }


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
            text: title,
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
              label: (context) => `${context.dataset.label}: ${context.parsed.y.toFixed(2)}万人`
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
              callback: (value) => value + '万'
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
  // --- Data Export Logic ---

  exportData(type) {
    let csvContent = "";
    let filename = "";
    const now = new Date().toISOString().slice(0, 10);

    if (type === 'municipalities') {
      filename = `hiroshima_municipalities_${now}.csv`;
      // Header
      csvContent += "市区町村名,医療圏ID,Tier分類,2020年人口,2025年推計,2030年推計,2035年推計,2040年推計,0-9歳(2040),10-19歳(2040),20-29歳(2040),30-39歳(2040),40-49歳(2040),50-59歳(2040),60-69歳(2040),70-79歳(2040),80-89歳(2040),90歳以上(2040)\n";

      MUNICIPALITY_DATA.forEach(m => {
        const p = m.populationProjection || {};
        const ac = (m.ageComposition && m.ageComposition[2040]) ? m.ageComposition[2040] : {};

        let row = [
          m.name,
          m.regionId,
          m.tier || '-',
          m.population, // 2020 base
          p[2025] || '',
          p[2030] || '',
          p[2035] || '',
          p[2040] || '',
          ac["0-9"] || '',
          ac["10-19"] || '',
          ac["20-29"] || '',
          ac["30-39"] || '',
          ac["40-49"] || '',
          ac["50-59"] || '',
          ac["60-69"] || '',
          ac["70-79"] || '',
          ac["80-89"] || '',
          ac["90+"] || ''
        ].join(",");
        csvContent += row + "\n";
      });

    } else if (type === 'hospitals') {
      filename = `hiroshima_hospitals_${now}.csv`;
      // Header
      csvContent += "医療圏名,病院名,機能種別,病床数,救急告示,診療科,住所,緯度,経度\n";

      Object.values(MEDICAL_DATA.regions).forEach(region => {
        region.hospitals.forEach(h => {
          let row = [
            region.name,
            h.name,
            h.type,
            h.beds,
            h.emergencyLevel,
            (h.departments || []).join("/"),
            h.address,
            h.lat,
            h.lng
          ].join(",");
          csvContent += row + "\n";
        });
      });
    }

    this.downloadCSV(csvContent, filename);
  }

  downloadCSV(csvContent, filename) {
    // Add BOM for Excel
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new MedicalResourceMap();
});
