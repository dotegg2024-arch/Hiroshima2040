// 広島県 市区町村・行政区データ (2020年国勢調査ベース + 緯度経度)
// Population Viewで使用

const MUNICIPALITY_DATA = [
    // --- 広島市 (行政区) ---
    { name: "広島市中区", population: 143622, lat: 34.3955, lng: 132.4573, regionId: "hiroshima" }, // Slightly North
    { name: "広島市東区", population: 118527, lat: 34.4199, lng: 132.4842, regionId: "hiroshima" },
    { name: "広島市南区", population: 143407, lat: 34.3750, lng: 132.4786, regionId: "hiroshima" }, // Moved North from 34.3676
    { name: "広島市西区", population: 190528, lat: 34.4050, lng: 132.4184, regionId: "hiroshima" }, // Moved North
    { name: "広島市安佐南区", population: 241127, lat: 34.4533, lng: 132.4705, regionId: "hiroshima" },
    { name: "広島市安佐北区", population: 137852, lat: 34.5190, lng: 132.5034, regionId: "hiroshima" },
    { name: "広島市安芸区", population: 77532, lat: 34.3815, lng: 132.5358, regionId: "hiroshima" },
    { name: "広島市佐伯区", population: 134800, lat: 34.3800, lng: 132.3619, regionId: "hiroshima" }, // Moved North

    // --- 広島圏域 (周辺) ---
    { name: "安芸高田市", population: 26448, lat: 34.6657, lng: 132.7018, regionId: "hiroshima" },
    { name: "府中町", population: 51152, lat: 34.3948, lng: 132.5076, regionId: "hiroshima" },
    { name: "海田町", population: 29636, lat: 34.3680, lng: 132.5367, regionId: "hiroshima" }, // Moved North
    { name: "熊野町", population: 22695, lat: 34.3414, lng: 132.5768, regionId: "hiroshima" },
    { name: "坂町", population: 12479, lat: 34.3350, lng: 132.5152, regionId: "hiroshima" }, // Moved North
    { name: "安芸太田町", population: 5740, lat: 34.5866, lng: 132.2212, regionId: "hiroshima" },
    { name: "北広島町", population: 17763, lat: 34.6826, lng: 132.5252, regionId: "hiroshima" },

    // --- 広島西圏域 ---
    { name: "大竹市", population: 26319, lat: 34.2350, lng: 132.2185, regionId: "hiroshimaNishi" }, // Moved North
    { name: "廿日市市", population: 114173, lat: 34.3550, lng: 132.3298, regionId: "hiroshimaNishi" }, // Moved North from 34.3486

    // --- 呉圏域 ---
    { name: "呉市", population: 205349, lat: 34.2600, lng: 132.5654, regionId: "kure" }, // Moved North
    { name: "江田島市", population: 21930, lat: 34.2201, lng: 132.4831, regionId: "kure" }, // Moved North

    // --- 広島中央圏域 ---
    { name: "東広島市", population: 190516, lat: 34.4265, lng: 132.7431, regionId: "hiroshimaChuo" },
    { name: "竹原市", population: 23993, lat: 34.3423, lng: 132.9099, regionId: "hiroshimaChuo" },
    { name: "大崎上島町", population: 7158, lat: 34.2854, lng: 132.8797, regionId: "hiroshimaChuo" },

    // --- 尾三圏域 ---
    { name: "三原市", population: 90573, lat: 34.3986, lng: 133.0827, regionId: "bisan" },
    { name: "尾道市", population: 131170, lat: 34.4121, lng: 133.1979, regionId: "bisan" },
    { name: "世羅町", population: 15125, lat: 34.6163, lng: 132.9555, regionId: "bisan" },

    // --- 福山・府中圏域 ---
    { name: "福山市", population: 452668, lat: 34.4859, lng: 133.3623, regionId: "fukuyamaFuchu" },
    { name: "府中市", population: 37042, lat: 34.5694, lng: 133.2355, regionId: "fukuyamaFuchu" }, // Note: Fuchu-shi vs Fuchu-cho
    { name: "神石高原町", population: 8250, lat: 34.7397, lng: 133.2201, regionId: "fukuyamaFuchu" },

    // --- 備北圏域 ---
    { name: "三次市", population: 50681, lat: 34.8055, lng: 132.8524, regionId: "bihoku" },
    { name: "庄原市", population: 33633, lat: 34.8576, lng: 133.0163, regionId: "bihoku" },
];
window.MUNICIPALITY_DATA = MUNICIPALITY_DATA;
