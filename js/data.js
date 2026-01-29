// 広島県医療圏リソースマップ データ定義
// 病院座標は公式データおよびNAVITIME/Google Mapsより取得

const MEDICAL_DATA = {
  // 2次医療圏定義
  regions: {
    hiroshima: {
      id: "hiroshima",
      name: "広島",
      color: "#2563EB",
      // 構成市町村コード（国土数値情報準拠）
      municipalityCodes: ["34101", "34102", "34103", "34104", "34105", "34106", "34107", "34108", "34304", "34307", "34309", "34368", "34369"],
      municipalities: ["広島市", "安芸高田市", "府中町", "海田町", "熊野町", "坂町", "安芸太田町", "北広島町"],
      population: {
        2020: 1340000,
        2025: 1290000,
        2030: 1240000,
        2035: 1180000,
        2040: 1120000
      },
      beds: {
        total: 12762,
        highAcute: 2100,
        acute: 5200,
        recovery: 2800,
        chronic: 2662
      },
      avgTransportTime: 42,
      avgArrivalTime: 8.5,
      hospitals: [
        { name: "広島大学病院", beds: 740, type: "特定機能", emergencyLevel: 3, departments: ["救急", "循環器", "脳神経外科", "がん"], lat: 34.380023, lng: 132.479244, address: "広島市南区霞1-2-3", url: "https://www.hiroshima-u.ac.jp/hosp" },
        { name: "県立広島病院", beds: 712, type: "基幹", emergencyLevel: 3, departments: ["救急", "周産期", "がん", "循環器"], lat: 34.366821, lng: 132.466705, address: "広島市南区宇品神田1-5-54", url: "http://www.hph.pref.hiroshima.jp/" },
        { name: "広島市立広島市民病院", beds: 743, type: "基幹", emergencyLevel: 3, departments: ["救急", "心臓血管外科", "脳卒中"], lat: 34.397877, lng: 132.459172, address: "広島市中区基町7-33", url: "https://www.city-hosp.naka.hiroshima.jp/" },
        { name: "広島赤十字・原爆病院", beds: 565, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "血液内科", "緩和ケア"], lat: 34.394720, lng: 132.454720, address: "広島市中区千田町1-9-6", url: "https://www.hiroshima-med.jrc.or.jp/" },
        { name: "広島市立北部医療センター安佐市民病院", beds: 488, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "がん", "脳神経外科"], lat: 34.516487, lng: 132.496904, address: "広島市安佐北区亀山南1-2-1", url: "https://www.asa-hosp.city.hiroshima.jp/" },
        { name: "県立二葉の里病院", beds: 275, type: "地域医療支援", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.400680, lng: 132.477476, address: "広島市東区二葉の里3-1-36", url: "https://futaba.hpho.jp/" },
        { name: "マツダ病院", beds: 266, type: "企業立", emergencyLevel: 2, departments: ["救急", "循環器", "がん"], lat: 34.377242, lng: 132.504529, address: "安芸郡府中町青崎南2-15", url: "https://hospital.mazda.co.jp/" },
        { name: "広島市立舟入市民病院", beds: 156, type: "公的", emergencyLevel: 2, departments: ["救急", "小児科", "感染症"], lat: 34.386110, lng: 132.439720, address: "広島市中区舟入幸町14-11", url: "https://www.funairi-hospital.jp/" },
        { name: "五日市記念病院", beds: 198, type: "一般", emergencyLevel: 2, departments: ["脳神経外科", "救急"], lat: 34.383206, lng: 132.351730, address: "広島市佐伯区倉重1-95", url: "http://www.itsukaichi-kinen.or.jp/" },
        { name: "済生会広島病院", beds: 298, type: "地域医療支援", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.350722, lng: 132.519056, address: "安芸郡坂町北新地2-3-10", url: "https://www.saiseikai.com" },
        { name: "中電病院", beds: 248, type: "企業立", emergencyLevel: 2, departments: ["救急", "循環器", "整形外科"], lat: 34.388556, lng: 132.452861, address: "広島市中区大手町3-4-27", url: "https://www.energia.co.jp/hospital/index.html" },
        { name: "広島共立病院", beds: 284, type: "一般", emergencyLevel: 2, departments: ["内科", "外科", "救急"], lat: 34.460833, lng: 132.474431, address: "広島市安佐南区中須2-20-20", url: "https://h-kyoritsu.jp/" },
        { name: "広島ハートセンター広島心臓血管病院", beds: 74, type: "専門", emergencyLevel: 2, departments: ["循環器内科", "心臓血管外科"], lat: 34.446612, lng: 132.469064, address: "広島市安佐南区西原5-5-10", url: "https://www.hiroshima-heart.jp/" },
        { name: "メリィホスピタル", beds: 199, type: "一般", emergencyLevel: 1, departments: ["脳神経外科", "リハビリ"], lat: 34.445932, lng: 132.392671, address: "広島市安佐南区大塚西3-1-20", url: "https://merry-house.jp/merryhospital/" },
        { name: "土谷総合病院", beds: 508, type: "一般", emergencyLevel: 2, departments: ["腎臓内科", "循環器", "救急"], lat: 34.390351, lng: 132.451561, address: "広島市中区中島町3-30", url: "https://tsuchiya-hp.jp/" },
        { name: "広島記念病院", beds: 260, type: "一般", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.395656, lng: 132.449478, address: "広島市中区本川町1-1-1", url: "https://kkr-hiroshima.jp/" },
        { name: "吉島病院", beds: 287, type: "公的", emergencyLevel: 2, departments: ["呼吸器", "救急"], lat: 34.369464, lng: 132.451089, address: "広島市中区吉島東3-2-33", url: "https://www.yoshijima.jp/" },
        { name: "安芸市民病院", beds: 98, type: "公的", emergencyLevel: 2, departments: ["内科", "外科", "救急"], lat: 34.392462, lng: 132.552385, address: "広島市安芸区畑賀2-14-1", url: "https://akishimin.jp/" },
        { name: "こころホスピタル草津", beds: 429, type: "精神科", emergencyLevel: 1, departments: ["精神科", "心療内科"], lat: 34.378212, lng: 132.394539, address: "広島市西区草津梅が台10-1", url: "https://kusatsu-hp.jp/" },
        { name: "児玉病院", beds: 379, type: "一般", emergencyLevel: 1, departments: ["内科", "リハビリ"], lat: 34.520440, lng: 132.536120, address: "広島市安佐北区可部7-14-39", url: "http://www.kodama-hospital.or.jp/" },
        { name: "安佐病院", beds: 376, type: "精神科", emergencyLevel: 1, departments: ["精神科"], lat: 34.482080, lng: 132.501550, address: "広島市安佐南区八木5-15-1", url: "https://www.asahp.jp/" },
        { name: "吉田総合病院", beds: 270, type: "公的", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.664049, lng: 132.701843, address: "安芸高田市吉田町吉田3666", url: "https://yoshida-gene-hospi.jp/" },
        { name: "千代田病院", beds: 194, type: "一般", emergencyLevel: 2, departments: ["内科", "外科", "リハビリ"], lat: 34.683041, lng: 132.523844, address: "山県郡北広島町今田3860", url: "https://www.chiyoda-hospital-hiroshima.com/" },
        { name: "北広島町豊平病院", beds: 60, type: "公的", emergencyLevel: 1, departments: ["内科", "外科"], lat: 34.628573, lng: 132.448920, address: "山県郡北広島町阿坂4705", url: "https://toyohira-clinic.jp/" },
        { name: "安芸太田病院", beds: 50, type: "公的", emergencyLevel: 1, departments: ["内科", "整形外科"], lat: 34.586545, lng: 132.291703, address: "山県郡安芸太田町下殿河内236", url: "https://akiota.jp/hospital/" }
      ]
    },
    hiroshimaNishi: {
      id: "hiroshimaNishi",
      name: "広島西",
      color: "#8B5CF6",
      municipalityCodes: ["34211", "34213"],
      municipalities: ["大竹市", "廿日市市"],
      population: {
        2020: 140000,
        2025: 133000,
        2030: 126000,
        2035: 118000,
        2040: 110000
      },
      beds: {
        total: 1850,
        highAcute: 150,
        acute: 680,
        recovery: 520,
        chronic: 500
      },
      avgTransportTime: 48,
      avgArrivalTime: 9.2,
      hospitals: [
        { name: "JA広島総合病院", beds: 569, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "周産期", "がん"], lat: 34.351944, lng: 132.318056, address: "廿日市市地御前1-3-3", url: "https://www.hiroshima-h.ja-hp.jp/" },
        { name: "広島西医療センター", beds: 438, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "リハビリ", "神経内科"], lat: 34.240556, lng: 132.221389, address: "大竹市玖波4-1-1", url: "https://hiroshimanishi.hosp.go.jp/" },
        { name: "JA広島厚生連廿日市記念病院", beds: 191, type: "一般", emergencyLevel: 2, departments: ["内科", "外科", "整形外科"], lat: 34.349444, lng: 132.331667, address: "廿日市市天神12-7", url: "https://www.kouseiren-h.jp/hatsukaichi/" },
        { name: "阿品土谷病院", beds: 214, type: "療養", emergencyLevel: 1, departments: ["リハビリ", "透析"], lat: 34.320161, lng: 132.311077, address: "廿日市市阿品4-51-1", url: "https://www.tsuchiya-hp.jp/ajina/" },
        { name: "メープルヒル病院", beds: 344, type: "精神科", emergencyLevel: 1, departments: ["精神科"], lat: 34.249080, lng: 132.228510, address: "大竹市玖波5-2-1", url: "https://maplehill-hospital.com/" }
      ]
    },
    kure: {
      id: "kure",
      name: "呉",
      color: "#DC2626",
      municipalityCodes: ["34202", "34215"],
      municipalities: ["呉市", "江田島市"],
      population: {
        2020: 240000,
        2025: 220000,
        2030: 200000,
        2035: 182000,
        2040: 165000
      },
      beds: {
        total: 3580,
        highAcute: 380,
        acute: 1200,
        recovery: 1100,
        chronic: 900
      },
      avgTransportTime: 44,
      avgArrivalTime: 8.8,
      hospitals: [
        { name: "呉医療センター", beds: 700, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "がん", "循環器"], lat: 34.239036, lng: 132.565333, address: "呉市青山町3-1", url: "https://kure.hosp.go.jp/" },
        { name: "呉共済病院", beds: 400, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "脳神経外科", "心臓血管外科"], lat: 34.248747, lng: 132.558430, address: "呉市西中央2-3-28", url: "https://kure.kkr.or.jp/" },
        { name: "中国労災病院", beds: 360, type: "地域医療支援", emergencyLevel: 2, departments: ["救急", "整形外科", "リハビリ"], lat: 34.230863, lng: 132.613980, address: "呉市広多賀谷1-5-1", url: "https://www.chugokuh.johas.go.jp/" },
        { name: "呉市医師会病院", beds: 150, type: "一般", emergencyLevel: 2, departments: ["内科", "検診"], lat: 34.251452, lng: 132.574880, address: "呉市朝日町15-24", url: "https://www.kure.hiroshima.med.or.jp/hp/" },
        { name: "済生会呉病院", beds: 220, type: "一般", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.246229, lng: 132.553557, address: "呉市三条2-1-13", url: "https://www.saiseikaikure.jp/" },
        { name: "ほうゆう病院", beds: 323, type: "精神科", emergencyLevel: 1, departments: ["精神科", "内科"], lat: 34.254007, lng: 132.592303, address: "呉市阿賀北1-14-15", url: "https://www.hoyu-hp.or.jp/" }
      ]
    },
    hiroshimaChuo: {
      id: "hiroshimaChuo",
      name: "広島中央",
      color: "#F97316",
      municipalityCodes: ["34212", "34214", "34431"],
      municipalities: ["東広島市", "竹原市", "大崎上島町"],
      population: {
        2020: 220000,
        2025: 215000,
        2030: 208000,
        2035: 198000,
        2040: 188000
      },
      beds: {
        total: 2450,
        highAcute: 280,
        acute: 920,
        recovery: 680,
        chronic: 570
      },
      avgTransportTime: 52,
      avgArrivalTime: 10.5,
      hospitals: [
        { name: "東広島医療センター", beds: 485, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "循環器", "消化器"], lat: 34.448060, lng: 132.724170, address: "東広島市西条町寺家513", url: "https://higashihiroshima.hosp.go.jp/" },
        { name: "県立安芸津病院", beds: 150, type: "一般", emergencyLevel: 2, departments: ["内科", "外科", "リハビリ"], lat: 34.329722, lng: 132.826389, address: "東広島市安芸津町三津4388", url: "https://www.akitsu.pref.hiroshima.jp/" },
        { name: "西条中央病院", beds: 185, type: "一般", emergencyLevel: 2, departments: ["内科", "整形外科"], lat: 34.423778, lng: 132.743016, address: "東広島市西条昭和町12-40", url: "http://www.saijo-c-hp.com/" },
        { name: "賀茂精神医療センター", beds: 412, type: "精神科", emergencyLevel: 1, departments: ["精神科"], lat: 34.340910, lng: 132.698370, address: "東広島市黒瀬町南方92", url: "https://kamo.hosp.go.jp/" },
        { name: "広島県立総合リハビリテーションセンター", beds: 340, type: "一般", emergencyLevel: 1, departments: ["リハビリ"], lat: 34.409860, lng: 132.730300, address: "東広島市西条町田口295-3", url: "https://www.rehab-hiroshima.jp/" }
      ]
    },
    bisan: {
      id: "bisan",
      name: "尾三",
      color: "#059669",
      municipalityCodes: ["34204", "34205", "34462"],
      municipalities: ["三原市", "尾道市", "世羅町"],
      population: {
        2020: 210000,
        2025: 195000,
        2030: 180000,
        2035: 165000,
        2040: 150000
      },
      beds: {
        total: 3200,
        highAcute: 320,
        acute: 1100,
        recovery: 980,
        chronic: 800
      },
      avgTransportTime: 46,
      avgArrivalTime: 9.8,
      hospitals: [
        { name: "尾道総合病院", beds: 352, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "循環器", "がん"], lat: 34.407056, lng: 133.176139, address: "尾道市平原1-10-23", url: "https://www.onomichi-gh.jp/" },
        { name: "尾道市立市民病院", beds: 285, type: "地域医療支援", emergencyLevel: 2, departments: ["救急", "脳神経外科", "整形外科"], lat: 34.411667, lng: 133.181944, address: "尾道市新高山3-1170-177", url: "https://www.onomichi-mh.jp/" },
        { name: "三原市医師会病院", beds: 199, type: "地域医療支援", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.397500, lng: 133.078889, address: "三原市円一町1-3-36", url: "https://www.mihara-ishikai.jp/" },
        { name: "興生総合病院", beds: 302, type: "一般", emergencyLevel: 2, departments: ["救急", "循環器", "消化器"], lat: 34.395556, lng: 133.089722, address: "三原市円一町2-5-1", url: "https://www.kohsei.or.jp/" },
        { name: "因島医師会病院", beds: 197, type: "一般", emergencyLevel: 2, departments: ["救急", "リハビリ"], lat: 34.313088, lng: 133.153040, address: "尾道市因島中庄町1962", url: "http://innoshima.com/ishikai/hospital/" },
        { name: "公立みつぎ総合病院", beds: 240, type: "公的", emergencyLevel: 2, departments: ["救急", "脳神経外科", "リハビリ"], lat: 34.516670, lng: 133.147780, address: "尾道市御調町市124", url: "https://www.mitsugibyouin.com/" },
        { name: "公立世羅中央病院", beds: 288, type: "公的", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.585857, lng: 133.045860, address: "世羅郡世羅町本郷918-3", url: "https://www.serachuo-hp.jp/" },
        { name: "三原赤十字病院", beds: 356, type: "一般", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.402602, lng: 133.089615, address: "三原市東町2-7-1", url: "https://www.mihara.jrc.or.jp/" },
        { name: "小泉病院", beds: 392, type: "精神科", emergencyLevel: 1, departments: ["精神科"], lat: 34.455200, lng: 132.998180, address: "三原市小泉町4245", url: "https://koizumi-hp.jp/" },
        { name: "三原病院", beds: 337, type: "精神科", emergencyLevel: 1, departments: ["精神科"], lat: 34.417250, lng: 133.056090, address: "三原市中之町6-31-1", url: "https://www.miharahp.com/" }
      ]
    },
    fukuyamaFuchu: {
      id: "fukuyamaFuchu",
      name: "福山・府中",
      color: "#E11D48",
      municipalityCodes: ["34207", "34208", "34545"],
      municipalities: ["福山市", "府中市", "神石高原町"],
      population: {
        2020: 520000,
        2025: 495000,
        2030: 468000,
        2035: 438000,
        2040: 408000
      },
      beds: {
        total: 5083,
        highAcute: 650,
        acute: 1850,
        recovery: 1380,
        chronic: 1203
      },
      avgTransportTime: 44,
      avgArrivalTime: 9.0,
      hospitals: [
        { name: "福山市民病院", beds: 506, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "がん", "循環器", "周産期"], lat: 34.510972, lng: 133.397861, address: "福山市蔵王町5-23-1", url: "https://fc-hosp.jp/" },
        { name: "福山医療センター", beds: 365, type: "地域医療支援", emergencyLevel: 3, departments: ["救急", "がん", "呼吸器"], lat: 34.470560, lng: 133.370560, address: "福山市沖野上町4-14-17", url: "https://fukuyama.hosp.go.jp/" },
        { name: "中国中央病院", beds: 281, type: "地域医療支援", emergencyLevel: 2, departments: ["救急", "循環器", "消化器"], lat: 34.490278, lng: 133.381667, address: "福山市御幸町大字上岩成148-13", url: "https://kouritu-cch.jp/" },
        { name: "日本鋼管福山病院", beds: 350, type: "一般", emergencyLevel: 2, departments: ["救急", "整形外科", "消化器"], lat: 34.454167, lng: 133.383611, address: "福山市大門町津之下1844", url: "https://www.nkfh.or.jp/" },
        { name: "脳神経センター大田記念病院", beds: 199, type: "一般", emergencyLevel: 3, departments: ["脳神経外科", "救急"], lat: 34.471861, lng: 133.373610, address: "福山市沖野上町3-6-28", url: "https://otahp.jp" },
        { name: "府中市民病院", beds: 150, type: "公的", emergencyLevel: 2, departments: ["救急", "内科", "整形外科"], lat: 34.569817, lng: 133.248333, address: "府中市鵜飼町555-3", url: "https://fuchuhp.jp/" },
        { name: "沼隈病院", beds: 118, type: "一般", emergencyLevel: 2, departments: ["救急", "リハビリ", "内科"], lat: 34.419064, lng: 133.323037, address: "福山市沼隈町中山南469-3", url: "http://www.shounankai.or.jp/" },
        { name: "福山城西病院", beds: 156, type: "一般", emergencyLevel: 2, departments: ["救急", "整形外科"], lat: 34.490052, lng: 133.356561, address: "福山市西町2-11-36", url: "https://iwadou.or.jp/" },
        { name: "福山記念病院", beds: 217, type: "一般", emergencyLevel: 2, departments: ["救急", "整形外科", "リハビリ"], lat: 34.484233, lng: 133.380258, address: "福山市港町1-15-30", url: "https://kbk-group.or.jp/" },
        { name: "寺岡記念病院", beds: 248, type: "一般", emergencyLevel: 2, departments: ["救急", "脳神経外科", "循環器"], lat: 34.550389, lng: 133.280306, address: "福山市新市町新市37", url: "https://www.teraoka-hosp.jp/" },
        { name: "公立神石高原病院", beds: 60, type: "公的", emergencyLevel: 2, departments: ["救急", "総合診療"], lat: 34.702878, lng: 133.250913, address: "神石高原町小畠1763-2", url: "https://www.youseikai-grp.jp/jth/" },
        { name: "福山友愛病院", beds: 347, type: "精神科", emergencyLevel: 1, departments: ["精神科"], lat: 34.456670, lng: 133.407760, address: "福山市水呑町7302-2", url: "https://yuai-hospital.or.jp/" }
      ]
    },
    bihoku: {
      id: "bihoku",
      name: "備北",
      color: "#0891B2",
      municipalityCodes: ["34209", "34210"],
      municipalities: ["三次市", "庄原市"],
      population: {
        2020: 85000,
        2025: 77000,
        2030: 70000,
        2035: 63000,
        2040: 56000
      },
      beds: {
        total: 1420,
        highAcute: 120,
        acute: 480,
        recovery: 450,
        chronic: 370
      },
      avgTransportTime: 58,
      avgArrivalTime: 12.4,
      hospitals: [
        { name: "市立三次中央病院", beds: 315, type: "地域医療支援", emergencyLevel: 2, departments: ["救急", "循環器", "がん"], lat: 34.782053, lng: 132.867632, address: "三次市東酒屋町531", url: "https://miyoshi-central-hospital.jp/" },
        { name: "庄原赤十字病院", beds: 220, type: "一般", emergencyLevel: 2, departments: ["救急", "内科", "外科"], lat: 34.855278, lng: 133.022222, address: "庄原市西本町2-7-10", url: "https://www.shobara.jrc.or.jp/" },
        { name: "庄原市立西城市民病院", beds: 54, type: "公的", emergencyLevel: 1, departments: ["内科", "地域包括"], lat: 34.940483, lng: 133.116062, address: "庄原市西城町栗729-1", url: "https://saijyo-hospital.jp/" }
      ]
    }
  },

  // 医療圏ごとの構成市町村（GeoJSON取得用）
  municipalityMapping: {
    // 広島圏域
    "広島市中区": "hiroshima", "広島市東区": "hiroshima", "広島市南区": "hiroshima",
    "広島市西区": "hiroshima", "広島市安佐南区": "hiroshima", "広島市安佐北区": "hiroshima",
    "広島市安芸区": "hiroshima", "広島市佐伯区": "hiroshima",
    "安芸高田市": "hiroshima", "府中町": "hiroshima", "海田町": "hiroshima",
    "熊野町": "hiroshima", "坂町": "hiroshima", "安芸太田町": "hiroshima", "北広島町": "hiroshima",

    // 広島西圏域
    "大竹市": "hiroshimaNishi", "廿日市市": "hiroshimaNishi",

    // 呉圏域
    "呉市": "kure", "江田島市": "kure",

    // 広島中央圏域
    "東広島市": "hiroshimaChuo", "竹原市": "hiroshimaChuo", "大崎上島町": "hiroshimaChuo",

    // 尾三圏域
    "三原市": "bisan", "尾道市": "bisan", "世羅町": "bisan",

    // 福山・府中圏域
    "福山市": "fukuyamaFuchu", "府中市": "fukuyamaFuchu", "神石高原町": "fukuyamaFuchu",

    // 備北圏域
    "三次市": "bihoku", "庄原市": "bihoku"
  },

  // 全県統計
  prefectureStats: {
    totalPopulation2020: 2800000,
    totalPopulation2040: 2500000,
    totalBeds2023: 26000,
    avgTransportTime2022: 45.2,
    avgArrivalTime2022: 9.4
  },

  // 再編シナリオ定義
  reorganizationScenarios: [
    { id: "current", name: "現行（7医療圏）" },
    { id: "scenario1", name: "6医療圏案" },
    { id: "scenario2", name: "5医療圏案" }
  ]
};
