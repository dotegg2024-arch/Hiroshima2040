// 広島県医療圏リソースマップ データ定義 (Updated)
// 病院座標は公式データおよびNAVITIME/Google Mapsより取得

const MEDICAL_DATA = {
  "regions": {
    "hiroshima": {
      "id": "hiroshima",
      "name": "広島",
      "color": "#2563EB",
      "municipalityCodes": [
        "34101",
        "34102",
        "34103",
        "34104",
        "34105",
        "34106",
        "34107",
        "34108",
        "34304",
        "34307",
        "34309",
        "34368",
        "34369"
      ],
      "municipalities": [
        "広島市",
        "安芸高田市",
        "府中町",
        "海田町",
        "熊野町",
        "坂町",
        "安芸太田町",
        "北広島町"
      ],
      "population": {
        "2020": 1340000,
        "2025": 1290000,
        "2030": 1240000,
        "2035": 1180000,
        "2040": 1120000
      },
      "beds": {
        "total": 18699,
        "highAcute": 2100,
        "acute": 5200,
        "recovery": 2800,
        "chronic": 2662
      },
      "ageComposition": {
        "2020": {
          "0-14": 12.5,
          "15-64": 59.5,
          "65-74": 13.5,
          "75+": 14.5
        },
        "2025": {
          "0-14": 11.8,
          "15-64": 58,
          "65-74": 14,
          "75+": 16.2
        },
        "2030": {
          "0-14": 11,
          "15-64": 56.5,
          "65-74": 14.5,
          "75+": 18
        },
        "2035": {
          "0-14": 10.5,
          "15-64": 54,
          "65-74": 15,
          "75+": 20.5
        },
        "2040": {
          "0-14": 10,
          "15-64": 52,
          "65-74": 15.5,
          "75+": 22.5
        }
      },
      "avgTransportTime": 42,
      "avgArrivalTime": 8.5,
      "hospitals": [
        {
          "name": "中電病院",
          "beds": 248,
          "type": "企業立",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "循環器",
            "整形外科"
          ],
          "lat": 34.388556,
          "lng": 132.452861,
          "address": "広島市中区大手町3-4-27",
          "url": "https://www.energia.co.jp/hospital/index.html"
        },
        {
          "name": "吉島病院",
          "beds": 287,
          "type": "公的",
          "emergencyLevel": 2,
          "departments": [
            "呼吸器",
            "救急"
          ],
          "lat": 34.369464,
          "lng": 132.451089,
          "address": "広島市中区吉島東3-2-33",
          "url": "https://www.yoshijima.jp/"
        },
        {
          "name": "医療法人　三和会　おおうち病院",
          "beds": 50,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3876220000242,
          "lng": 132.454429999952,
          "address": "広島市中区大手町３丁目７－１１",
          "url": ""
        },
        {
          "name": "土谷総合病院",
          "beds": 508,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "腎臓内科",
            "循環器",
            "救急"
          ],
          "lat": 34.390351,
          "lng": 132.451561,
          "address": "広島市中区中島町3-30",
          "url": "https://tsuchiya-hp.jp/"
        },
        {
          "name": "広島赤十字・原爆病院",
          "beds": 565,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "血液内科",
            "緩和ケア"
          ],
          "lat": 34.39472,
          "lng": 132.45472,
          "address": "広島市中区千田町1-9-6",
          "url": "https://www.hiroshima-med.jrc.or.jp/"
        },
        {
          "name": "松田病院",
          "beds": 110,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3682909999356,
          "lng": 132.473317999813,
          "address": "広島市南区翠４丁目１３－７",
          "url": ""
        },
        {
          "name": "真田病院",
          "beds": 50,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3748459998593,
          "lng": 132.465318000126,
          "address": "広島市南区皆実町３丁目１３－２１",
          "url": ""
        },
        {
          "name": "医療法人　土本病院",
          "beds": 70,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3951769996589,
          "lng": 132.469039000176,
          "address": "広島市中区橋本町４－７",
          "url": ""
        },
        {
          "name": "塩田病院",
          "beds": 24,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3744849999361,
          "lng": 132.51273100012,
          "address": "広島市南区堀越１丁目７－３６",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　たかの橋中央病院",
          "beds": 104,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.383434,
          "lng": 132.454254,
          "address": "広島市中区国泰寺町２丁目４－１６",
          "url": ""
        },
        {
          "name": "医療法人三渓会　川堀病院",
          "beds": 39,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3902329997354,
          "lng": 132.471845000012,
          "address": "広島市南区松川町３－８",
          "url": ""
        },
        {
          "name": "広島第一病院",
          "beds": 200,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4230219997532,
          "lng": 132.49328300011,
          "address": "広島市東区戸坂南２丁目９－１５",
          "url": ""
        },
        {
          "name": "槙坪病院",
          "beds": 95,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3988709997297,
          "lng": 132.480120999908,
          "address": "広島市東区光町１丁目１４－２",
          "url": ""
        },
        {
          "name": "山本整形外科病院",
          "beds": 52,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3744579999485,
          "lng": 132.507509000108,
          "address": "広島市南区青崎２丁目４－２０",
          "url": ""
        },
        {
          "name": "医療法人　せのがわ　瀬野川病院",
          "beds": 312,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3969569998328,
          "lng": 132.578226000113,
          "address": "広島市安芸区中野東４丁目１１－１３",
          "url": ""
        },
        {
          "name": "医療法人ワカサ会　ワカサ・リハビリ病院",
          "beds": 155,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3967049999295,
          "lng": 132.493092999897,
          "address": "広島市東区東山町１５－１",
          "url": ""
        },
        {
          "name": "山﨑病院",
          "beds": 148,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.421684,
          "lng": 132.512634,
          "address": "広島市東区上温品１丁目２４－９",
          "url": ""
        },
        {
          "name": "太田川病院",
          "beds": 214,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.436836999918,
          "lng": 132.483977000063,
          "address": "広島市東区戸坂千足１丁目２１－２５",
          "url": ""
        },
        {
          "name": "医療法人恒和会　松石病院",
          "beds": 58,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.370292,
          "lng": 132.524591000184,
          "address": "広島市安芸区船越南３丁目２３－３",
          "url": ""
        },
        {
          "name": "広島シーサイド病院",
          "beds": 183,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3485709997791,
          "lng": 132.459042000048,
          "address": "広島市南区元宇品町２６－２０",
          "url": ""
        },
        {
          "name": "広島厚生病院",
          "beds": 150,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3776789998169,
          "lng": 132.49053800017,
          "address": "広島市南区仁保新町１－５－１３",
          "url": ""
        },
        {
          "name": "安芸市民病院",
          "beds": 98,
          "type": "公的",
          "emergencyLevel": 2,
          "departments": [
            "内科",
            "外科",
            "救急"
          ],
          "lat": 34.392462,
          "lng": 132.552385,
          "address": "広島市安芸区畑賀2-14-1",
          "url": "https://akishimin.jp/"
        },
        {
          "name": "比治山病院",
          "beds": 162,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3864559999021,
          "lng": 132.485148999978,
          "address": "広島市南区上東雲町３－１",
          "url": ""
        },
        {
          "name": "医療法人社団まりも会　ヒロシマ平松病院",
          "beds": 161,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3798919996913,
          "lng": 132.471227000162,
          "address": "広島市南区比治山本町１１番２７号",
          "url": ""
        },
        {
          "name": "医療法人社団おると会　浜脇整形外科病院",
          "beds": 160,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3851220000313,
          "lng": 132.453068999964,
          "address": "広島市中区大手町４丁目６番６号",
          "url": ""
        },
        {
          "name": "一ノ瀬病院",
          "beds": 95,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.386122000047,
          "lng": 132.456012999892,
          "address": "広島市中区国泰寺町１－５－１１",
          "url": ""
        },
        {
          "name": "林病院",
          "beds": 51,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3908909998985,
          "lng": 132.461670000012,
          "address": "広島市中区三川町３番８号",
          "url": ""
        },
        {
          "name": "医療法人　新でしお病院",
          "beds": 35,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3801229997358,
          "lng": 132.476039000168,
          "address": "広島市南区出汐一丁目３番９号",
          "url": ""
        },
        {
          "name": "広島市立広島市民病院",
          "beds": 743,
          "type": "基幹",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "心臓血管外科",
            "脳卒中"
          ],
          "lat": 34.397877,
          "lng": 132.459172,
          "address": "広島市中区基町7-33",
          "url": "https://www.city-hosp.naka.hiroshima.jp/"
        },
        {
          "name": "翠清会梶川病院",
          "beds": 143,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3822050000284,
          "lng": 132.459329000022,
          "address": "広島市中区東千田町一丁目１番２３号",
          "url": ""
        },
        {
          "name": "広島中央リハビリテーション病院",
          "beds": 110,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3802369999415,
          "lng": 132.462560000132,
          "address": "広島市中区平野町６－２４",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　広島はくしま病院",
          "beds": 110,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4030369998717,
          "lng": 132.464566999918,
          "address": "広島市中区東白島町１９番１６号",
          "url": ""
        },
        {
          "name": "瀬野記念病院",
          "beds": 99,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.428898,
          "lng": 132.606903,
          "address": "広島市安芸区瀬野４丁目１６４１番地１",
          "url": ""
        },
        {
          "name": "県立二葉の里病院",
          "beds": 275,
          "type": "地域医療支援",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.40068,
          "lng": 132.477476,
          "address": "広島市東区二葉の里3-1-36",
          "url": "https://futaba.hpho.jp/"
        },
        {
          "name": "県立広島病院",
          "beds": 712,
          "type": "基幹",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "周産期",
            "がん",
            "循環器"
          ],
          "lat": 34.366821,
          "lng": 132.466705,
          "address": "広島市南区宇品神田1-5-54",
          "url": "http://www.hph.pref.hiroshima.jp/"
        },
        {
          "name": "広島記念病院",
          "beds": 260,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.395656,
          "lng": 132.449478,
          "address": "広島市中区本川町1-1-1",
          "url": "https://kkr-hiroshima.jp/"
        },
        {
          "name": "医療法人社団玉章会　力田病院",
          "beds": 86,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3821219999293,
          "lng": 132.397129000054,
          "address": "広島市西区鈴が峰町１４－２０",
          "url": ""
        },
        {
          "name": "医療法人社団　光仁会　梶川病院",
          "beds": 88,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3964259997825,
          "lng": 132.440485999974,
          "address": "広島市西区天満町８－７",
          "url": ""
        },
        {
          "name": "医療法人社団　正岡産婦人科病院",
          "beds": 34,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.394981,
          "lng": 132.448441,
          "address": "広島市中区猫屋町４－６",
          "url": ""
        },
        {
          "name": "こころホスピタル草津",
          "beds": 429,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科",
            "心療内科"
          ],
          "lat": 34.378212,
          "lng": 132.394539,
          "address": "広島市西区草津梅が台10-1",
          "url": "https://kusatsu-hp.jp/"
        },
        {
          "name": "医療法人社団曙会　シムラ病院",
          "beds": 117,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3918249999486,
          "lng": 132.444035000092,
          "address": "広島市中区舟入町３－１３",
          "url": ""
        },
        {
          "name": "児玉病院",
          "beds": 379,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [
            "内科",
            "リハビリ"
          ],
          "lat": 34.52044,
          "lng": 132.53612,
          "address": "広島市安佐北区可部7-14-39",
          "url": "http://www.kodama-hospital.or.jp/"
        },
        {
          "name": "頼島産婦人科病院",
          "beds": 35,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4420329999068,
          "lng": 132.468147999946,
          "address": "広島市安佐南区西原５丁目１１－１８",
          "url": ""
        },
        {
          "name": "高陽中央病院",
          "beds": 55,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4803349999144,
          "lng": 132.512587000074,
          "address": "広島市安佐北区落合５丁目１－１０",
          "url": ""
        },
        {
          "name": "安佐病院",
          "beds": 376,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科"
          ],
          "lat": 34.48208,
          "lng": 132.50155,
          "address": "広島市安佐南区八木5-15-1",
          "url": "https://www.asahp.jp/"
        },
        {
          "name": "医療法人社団　加川整形外科病院",
          "beds": 30,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3843499998537,
          "lng": 132.406336000038,
          "address": "広島市西区古江西町２２－１０",
          "url": ""
        },
        {
          "name": "医療法人社団　慈恵会　いまだ病院",
          "beds": 50,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4117529998962,
          "lng": 132.453041999935,
          "address": "広島市西区三篠町１丁目５－１",
          "url": ""
        },
        {
          "name": "長久堂野村病院",
          "beds": 79,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4389779998988,
          "lng": 132.465203999972,
          "address": "広島市安佐北区可部南４－１７－３０",
          "url": ""
        },
        {
          "name": "医療法人社団共愛会　己斐ケ丘病院",
          "beds": 221,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.42725599975,
          "lng": 132.42615200006,
          "address": "広島市西区己斐上６丁目５５４－１",
          "url": ""
        },
        {
          "name": "日比野病院",
          "beds": 146,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4643609997333,
          "lng": 132.421105999993,
          "address": "広島市安佐南区伴東７丁目９番２号",
          "url": ""
        },
        {
          "name": "野村病院",
          "beds": 106,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4389779998988,
          "lng": 132.465203999972,
          "address": "広島市安佐南区祇園２丁目４２－１４",
          "url": ""
        },
        {
          "name": "医療法人社団うすい会　高陽ニュータウン病院",
          "beds": 140,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4821809997496,
          "lng": 132.525858000089,
          "address": "広島市安佐北区亀崎４丁目７－１",
          "url": ""
        },
        {
          "name": "養神館病院",
          "beds": 218,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3660109997351,
          "lng": 132.357633000278,
          "address": "広島市佐伯区五日市１丁目１２－６",
          "url": ""
        },
        {
          "name": "医療法人社団　一陽会　原田病院",
          "beds": 120,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3640599997582,
          "lng": 132.364351000192,
          "address": "広島市佐伯区海老山町７－１０",
          "url": ""
        },
        {
          "name": "ナカムラ病院",
          "beds": 260,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3822040000049,
          "lng": 132.334884000174,
          "address": "広島市佐伯区坪井３丁目８１８－１",
          "url": ""
        },
        {
          "name": "医療法人社団初仁会　桧田病院",
          "beds": 114,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3673169997392,
          "lng": 132.354550000252,
          "address": "広島市佐伯区五日市中央１丁目１－３２",
          "url": ""
        },
        {
          "name": "荒木脳神経外科病院",
          "beds": 110,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3906489997899,
          "lng": 132.421877000023,
          "address": "広島市西区庚午北２丁目８－７",
          "url": ""
        },
        {
          "name": "医療法人社団朋和会　西広島リハビリテーション病院",
          "beds": 139,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3783149998787,
          "lng": 132.339245000051,
          "address": "広島市佐伯区三宅６－２６５",
          "url": ""
        },
        {
          "name": "五日市記念病院",
          "beds": 198,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "脳神経外科",
            "救急"
          ],
          "lat": 34.383206,
          "lng": 132.35173,
          "address": "広島市佐伯区倉重1-95",
          "url": "http://www.itsukaichi-kinen.or.jp/"
        },
        {
          "name": "広島グリーンヒル病院",
          "beds": 150,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4078119996825,
          "lng": 132.353354000013,
          "address": "広島市佐伯区五日市町下河内１８８－６",
          "url": ""
        },
        {
          "name": "医療法人和同会　広島パークヒル病院",
          "beds": 114,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3918150000036,
          "lng": 132.396156000224,
          "address": "広島市西区田方２－１６－４５",
          "url": ""
        },
        {
          "name": "妹尾病院",
          "beds": 48,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4715569996793,
          "lng": 132.455453000052,
          "address": "広島市安佐南区相田１丁目１０－２１",
          "url": ""
        },
        {
          "name": "重症児・者福祉医療施設　鈴が峰",
          "beds": 110,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3814269996843,
          "lng": 132.372520000098,
          "address": "広島市佐伯区五日市町皆賀１０４－２７",
          "url": ""
        },
        {
          "name": "医療法人社団公仁会　槇殿順記念病院",
          "beds": 28,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4082029997389,
          "lng": 132.447067999989,
          "address": "広島市西区横川新町８－２１",
          "url": ""
        },
        {
          "name": "生協さえき病院",
          "beds": 114,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3878429999273,
          "lng": 132.364937000024,
          "address": "広島市佐伯区八幡東３丁目１１－２９",
          "url": ""
        },
        {
          "name": "さんよう水野病院",
          "beds": 100,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4627809999302,
          "lng": 132.488979000054,
          "address": "広島市安佐南区川内４丁目１３－３３",
          "url": ""
        },
        {
          "name": "サカ緑井病院",
          "beds": 51,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4724639998614,
          "lng": 132.481530999941,
          "address": "広島市安佐南区緑井６丁目２８－１",
          "url": ""
        },
        {
          "name": "医療法人社団　聖愛会　ぎおん牛田病院",
          "beds": 90,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4427629999282,
          "lng": 132.470967999869,
          "address": "広島市安佐南区西原八丁目２９番２４号",
          "url": ""
        },
        {
          "name": "原田整形外科病院",
          "beds": 51,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4732519996469,
          "lng": 132.444954000113,
          "address": "広島市安佐南区上安二丁目１５－２７",
          "url": ""
        },
        {
          "name": "長崎病院",
          "beds": 130,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4090769997419,
          "lng": 132.446936999996,
          "address": "広島市西区横川新町３番１１号",
          "url": ""
        },
        {
          "name": "地方独立行政法人広島市立病院機構　広島市立リハビリテーション病院",
          "beds": 100,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4494199998041,
          "lng": 132.383459999954,
          "address": "広島市安佐南区伴南一丁目３９番１号",
          "url": ""
        },
        {
          "name": "広島市立舟入市民病院",
          "beds": 156,
          "type": "公的",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "小児科",
            "感染症"
          ],
          "lat": 34.38611,
          "lng": 132.43972,
          "address": "広島市中区舟入幸町14-11",
          "url": "https://www.funairi-hospital.jp/"
        },
        {
          "name": "広島共立病院",
          "beds": 284,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "内科",
            "外科",
            "救急"
          ],
          "lat": 34.460833,
          "lng": 132.474431,
          "address": "広島市安佐南区中須2-20-20",
          "url": "https://h-kyoritsu.jp/"
        },
        {
          "name": "福島生協病院",
          "beds": 165,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3951659996804,
          "lng": 132.435361999742,
          "address": "広島市西区福島町１丁目２４番７号",
          "url": ""
        },
        {
          "name": "メリィホスピタル",
          "beds": 199,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [
            "脳神経外科",
            "リハビリ"
          ],
          "lat": 34.445932,
          "lng": 132.392671,
          "address": "広島市安佐南区大塚西3-1-20",
          "url": "https://merry-house.jp/merryhospital/"
        },
        {
          "name": "コムラ病院",
          "beds": 20,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.469834999723,
          "lng": 132.456842000042,
          "address": "広島市安佐南区相田一丁目１６番２９号",
          "url": ""
        },
        {
          "name": "医療法人　広和会　福馬病院",
          "beds": 44,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3883039999303,
          "lng": 132.44089700006,
          "address": "広島市西区観音本町一丁目１番１９号",
          "url": ""
        },
        {
          "name": "広島市立北部医療センター安佐市民病院",
          "beds": 488,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "がん",
            "脳神経外科"
          ],
          "lat": 34.516487,
          "lng": 132.496904,
          "address": "広島市安佐北区亀山南1-2-1",
          "url": "https://www.asa-hosp.city.hiroshima.jp/"
        },
        {
          "name": "安佐医師会病院",
          "beds": 102,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.5061489999662,
          "lng": 132.516323000048,
          "address": "広島市安佐北区可部南二丁目１番３８号",
          "url": ""
        },
        {
          "name": "広島ハートセンター広島心臓血管病院",
          "beds": 74,
          "type": "専門",
          "emergencyLevel": 2,
          "departments": [
            "循環器内科",
            "心臓血管外科"
          ],
          "lat": 34.446612,
          "lng": 132.469064,
          "address": "広島市安佐南区西原5-5-10",
          "url": "https://www.hiroshima-heart.jp/"
        },
        {
          "name": "神原病院",
          "beds": 115,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.473553,
          "lng": 133.29921,
          "address": "福山市赤坂町赤坂１３１３",
          "url": ""
        },
        {
          "name": "医療法人社団葵会　本永病院",
          "beds": 182,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.428745,
          "lng": 132.741974,
          "address": "東広島市西条岡町８－１３",
          "url": ""
        },
        {
          "name": "木阪病院",
          "beds": 80,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.424023,
          "lng": 132.778824,
          "address": "東広島市西条町土与丸１２３５番地",
          "url": ""
        },
        {
          "name": "医療法人社団　二山会　宗近病院",
          "beds": 216,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.376957,
          "lng": 132.731628,
          "address": "東広島市西条町大字御薗宇７０３",
          "url": ""
        },
        {
          "name": "広島県立総合リハビリテーションセンター",
          "beds": 340,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [
            "リハビリ"
          ],
          "lat": 34.40986,
          "lng": 132.7303,
          "address": "東広島市西条町田口295-3",
          "url": "https://www.rehab-hiroshima.jp/"
        },
        {
          "name": "土肥整形外科病院",
          "beds": 80,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.424679,
          "lng": 132.739075,
          "address": "東広島市西条町西条東１２８３－２",
          "url": ""
        },
        {
          "name": "医療法人社団葵会八本松病院",
          "beds": 235,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.446457,
          "lng": 132.709549,
          "address": "東広島市八本松東３丁目９－３０",
          "url": ""
        },
        {
          "name": "井野口病院",
          "beds": 188,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.427479,
          "lng": 132.751907,
          "address": "東広島市西条土与丸６丁目１－９１",
          "url": ""
        },
        {
          "name": "広島記念病院",
          "beds": 260,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.395656,
          "lng": 132.449478,
          "address": "広島市中区本川町1-1-1",
          "url": "https://kkr-hiroshima.jp/"
        },
        {
          "name": "西条中央病院",
          "beds": 185,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "内科",
            "整形外科"
          ],
          "lat": 34.423778,
          "lng": 132.743016,
          "address": "東広島市西条昭和町12-40",
          "url": "http://www.saijo-c-hp.com/"
        },
        {
          "name": "ＡＯＩ広島病院",
          "beds": 200,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.442371,
          "lng": 132.878128,
          "address": "東広島市河内町入野７９０７番地２",
          "url": ""
        },
        {
          "name": "県立安芸津病院",
          "beds": 150,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "内科",
            "外科",
            "リハビリ"
          ],
          "lat": 34.329722,
          "lng": 132.826389,
          "address": "東広島市安芸津町三津4388",
          "url": "https://www.akitsu.pref.hiroshima.jp/"
        },
        {
          "name": "済生会広島病院",
          "beds": 298,
          "type": "地域医療支援",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.350722,
          "lng": 132.519056,
          "address": "安芸郡坂町北新地2-3-10",
          "url": "https://www.saiseikai.com"
        },
        {
          "name": "マツダ病院",
          "beds": 266,
          "type": "企業立",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "循環器",
            "がん"
          ],
          "lat": 34.377242,
          "lng": 132.504529,
          "address": "安芸郡府中町青崎南2-15",
          "url": "https://hospital.mazda.co.jp/"
        },
        {
          "name": "府中みくまり病院",
          "beds": 317,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.405884,
          "lng": 132.515961,
          "address": "安芸郡府中町みくまり３－１－１１",
          "url": ""
        },
        {
          "name": "山本整形外科病院",
          "beds": 52,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.3744579999485,
          "lng": 132.507509000108,
          "address": "安芸郡海田町堀川町２－２３",
          "url": ""
        },
        {
          "name": "南海田病院",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.363365,
          "lng": 132.532715,
          "address": "安芸郡海田町栄町２番４２号",
          "url": ""
        },
        {
          "name": "安芸太田病院",
          "beds": 50,
          "type": "公的",
          "emergencyLevel": 1,
          "departments": [
            "内科",
            "整形外科"
          ],
          "lat": 34.586545,
          "lng": 132.291703,
          "address": "山県郡安芸太田町下殿河内236",
          "url": "https://akiota.jp/hospital/"
        },
        {
          "name": "北広島病院",
          "beds": 55,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.680195,
          "lng": 132.552994,
          "address": "山県郡北広島町壬生４３３－４",
          "url": ""
        },
        {
          "name": "千代田病院",
          "beds": 194,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "内科",
            "外科",
            "リハビリ"
          ],
          "lat": 34.683041,
          "lng": 132.523844,
          "address": "山県郡北広島町今田3860",
          "url": "https://www.chiyoda-hospital-hiroshima.com/"
        },
        {
          "name": "医療法人社団慶寿会　千代田中央病院",
          "beds": 120,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.673969,
          "lng": 132.539719,
          "address": "山県郡北広島町有田１１９２",
          "url": ""
        },
        {
          "name": "大朝ふるさと病院",
          "beds": 36,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.764633,
          "lng": 132.497375,
          "address": "山県郡北広島町新庄２１４７番地の１",
          "url": ""
        },
        {
          "name": "吉田総合病院",
          "beds": 270,
          "type": "公的",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.664049,
          "lng": 132.701843,
          "address": "安芸高田市吉田町吉田3666",
          "url": "https://yoshida-gene-hospi.jp/"
        },
        {
          "name": "康成病院",
          "beds": 74,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.326271,
          "lng": 132.663818,
          "address": "東広島市黒瀬町楢原７５７",
          "url": ""
        },
        {
          "name": "医療法人　真慈会　真愛病院",
          "beds": 55,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.32148,
          "lng": 132.659821,
          "address": "東広島市黒瀬町兼広２７９",
          "url": ""
        },
        {
          "name": "広島大学病院",
          "beds": 740,
          "type": "特定機能",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "循環器",
            "脳神経外科",
            "がん"
          ],
          "lat": 34.380023,
          "lng": 132.479244,
          "address": "広島市南区霞1-2-3",
          "url": "https://www.hiroshima-u.ac.jp/hosp"
        },
        {
          "name": "東広島医療センター",
          "beds": 485,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "循環器",
            "消化器"
          ],
          "lat": 34.44806,
          "lng": 132.72417,
          "address": "東広島市西条町寺家513",
          "url": "https://higashihiroshima.hosp.go.jp/"
        },
        {
          "name": "賀茂精神医療センター",
          "beds": 412,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科"
          ],
          "lat": 34.34091,
          "lng": 132.69837,
          "address": "東広島市黒瀬町南方92",
          "url": "https://kamo.hosp.go.jp/"
        }
      ]
    },
    "hiroshimaNishi": {
      "id": "hiroshimaNishi",
      "name": "広島西",
      "color": "#8B5CF6",
      "municipalityCodes": [
        "34211",
        "34213"
      ],
      "municipalities": [
        "大竹市",
        "廿日市市"
      ],
      "population": {
        "2020": 140000,
        "2025": 133000,
        "2030": 126000,
        "2035": 118000,
        "2040": 110000
      },
      "beds": {
        "total": 2366,
        "highAcute": 150,
        "acute": 680,
        "recovery": 520,
        "chronic": 500
      },
      "avgTransportTime": 48,
      "avgArrivalTime": 9.2,
      "hospitals": [
        {
          "name": "メープルヒル病院",
          "beds": 344,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科"
          ],
          "lat": 34.24908,
          "lng": 132.22851,
          "address": "大竹市玖波5-2-1",
          "url": "https://maplehill-hospital.com/"
        },
        {
          "name": "医療法人社団親和会　やまと病院",
          "beds": 50,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.207066,
          "lng": 132.216843,
          "address": "大竹市元町１丁目１－５",
          "url": ""
        },
        {
          "name": "JA広島総合病院",
          "beds": 569,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "周産期",
            "がん"
          ],
          "lat": 34.351944,
          "lng": 132.318056,
          "address": "廿日市市地御前1-3-3",
          "url": "https://www.hiroshima-h.ja-hp.jp/"
        },
        {
          "name": "阿品土谷病院",
          "beds": 214,
          "type": "療養",
          "emergencyLevel": 1,
          "departments": [
            "リハビリ",
            "透析"
          ],
          "lat": 34.320161,
          "lng": 132.311077,
          "address": "廿日市市阿品4-51-1",
          "url": "https://www.tsuchiya-hp.jp/ajina/"
        },
        {
          "name": "廿日市野村病院",
          "beds": 102,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.4389779998988,
          "lng": 132.465203999972,
          "address": "廿日市市宮内字佐原田４２０９－２",
          "url": ""
        },
        {
          "name": "JA広島厚生連廿日市記念病院",
          "beds": 191,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "内科",
            "外科",
            "整形外科"
          ],
          "lat": 34.349444,
          "lng": 132.331667,
          "address": "廿日市市天神12-7",
          "url": "https://www.kouseiren-h.jp/hatsukaichi/"
        },
        {
          "name": "社会福祉法人　三篠会　重症児・者福祉医療施設　原",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.37114,
          "lng": 132.292191,
          "address": "廿日市市原９２６番地の１",
          "url": ""
        },
        {
          "name": "アマノ病院",
          "beds": 120,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.350063,
          "lng": 132.320511,
          "address": "廿日市市串戸５－１－３５",
          "url": ""
        },
        {
          "name": "医療法人社団　友和会　友和病院",
          "beds": 120,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.348061,
          "lng": 132.225296,
          "address": "廿日市市峠字下ケ原５００",
          "url": ""
        },
        {
          "name": "佐伯中央病院",
          "beds": 38,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.366844,
          "lng": 132.17659,
          "address": "廿日市市津田４１８０",
          "url": ""
        },
        {
          "name": "大野浦病院",
          "beds": 120,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.275105,
          "lng": 132.261063,
          "address": "廿日市市丸石２丁目３－３５",
          "url": ""
        },
        {
          "name": "広島西医療センター",
          "beds": 438,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "リハビリ",
            "神経内科"
          ],
          "lat": 34.240556,
          "lng": 132.221389,
          "address": "大竹市玖波4-1-1",
          "url": "https://hiroshimanishi.hosp.go.jp/"
        }
      ]
    },
    "kure": {
      "id": "kure",
      "name": "呉",
      "color": "#DC2626",
      "municipalityCodes": [
        "34202",
        "34215"
      ],
      "municipalities": [
        "呉市",
        "江田島市"
      ],
      "population": {
        "2020": 240000,
        "2025": 220000,
        "2030": 200000,
        "2035": 182000,
        "2040": 165000
      },
      "beds": {
        "total": 4544,
        "highAcute": 380,
        "acute": 1200,
        "recovery": 1100,
        "chronic": 900
      },
      "avgTransportTime": 44,
      "avgArrivalTime": 8.8,
      "hospitals": [
        {
          "name": "呉共済病院",
          "beds": 400,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "脳神経外科",
            "心臓血管外科"
          ],
          "lat": 34.248747,
          "lng": 132.55843,
          "address": "呉市西中央2-3-28",
          "url": "https://kure.kkr.or.jp/"
        },
        {
          "name": "ほうゆう病院",
          "beds": 323,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科",
            "内科"
          ],
          "lat": 34.254007,
          "lng": 132.592303,
          "address": "呉市阿賀北1-14-15",
          "url": "https://www.hoyu-hp.or.jp/"
        },
        {
          "name": "木村胃腸科病院",
          "beds": 44,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.249023,
          "lng": 132.554657,
          "address": "呉市三条３丁目５－２２",
          "url": ""
        },
        {
          "name": "呉芸南病院",
          "beds": 119,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.237682,
          "lng": 132.598434,
          "address": "呉市阿賀中央６丁目７－２４",
          "url": ""
        },
        {
          "name": "医療法人社団中川会　呉中通病院",
          "beds": 123,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.244404,
          "lng": 132.562134,
          "address": "呉市中通１－３－８",
          "url": ""
        },
        {
          "name": "大矢整形外科病院",
          "beds": 33,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.248627,
          "lng": 132.567459,
          "address": "呉市中央４－４－３",
          "url": ""
        },
        {
          "name": "医療法人社団有信会　呉記念病院",
          "beds": 93,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.303226,
          "lng": 132.651215,
          "address": "呉市郷原町２３７９－４２",
          "url": ""
        },
        {
          "name": "医療法人社団　永楽会　前田病院",
          "beds": 76,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.245579,
          "lng": 132.561874,
          "address": "呉市中央２丁目６－２０",
          "url": ""
        },
        {
          "name": "佐藤病院",
          "beds": 42,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.248554,
          "lng": 132.555878,
          "address": "呉市三条３丁目４－２５",
          "url": ""
        },
        {
          "name": "青山病院",
          "beds": 120,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.415104,
          "lng": 133.18869,
          "address": "呉市阿賀北５丁目１５－３",
          "url": ""
        },
        {
          "name": "済生会呉病院",
          "beds": 220,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.246229,
          "lng": 132.553557,
          "address": "呉市三条2-1-13",
          "url": "https://www.saiseikaikure.jp/"
        },
        {
          "name": "呉市医師会病院",
          "beds": 150,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "内科",
            "検診"
          ],
          "lat": 34.251452,
          "lng": 132.57488,
          "address": "呉市朝日町15-24",
          "url": "https://www.kure.hiroshima.med.or.jp/hp/"
        },
        {
          "name": "マッターホルンリハビリテーション病院",
          "beds": 64,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.242126,
          "lng": 132.562363,
          "address": "呉市中通１丁目５－２５",
          "url": ""
        },
        {
          "name": "ふたば病院",
          "beds": 186,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.225941,
          "lng": 132.641251,
          "address": "呉市広白石４－７－２２",
          "url": ""
        },
        {
          "name": "医療法人社団　薫風会　横山病院",
          "beds": 40,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.234596,
          "lng": 132.614944,
          "address": "呉市広古新開２丁目５－２０",
          "url": ""
        },
        {
          "name": "中国労災病院",
          "beds": 360,
          "type": "地域医療支援",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "整形外科",
            "リハビリ"
          ],
          "lat": 34.230863,
          "lng": 132.61398,
          "address": "呉市広多賀谷1-5-1",
          "url": "https://www.chugokuh.johas.go.jp/"
        },
        {
          "name": "公立下蒲刈病院",
          "beds": 49,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.186752,
          "lng": 132.664185,
          "address": "呉市下蒲刈町下島２１２０番地の４",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　呉やけやま病院",
          "beds": 184,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.287968,
          "lng": 132.571701,
          "address": "呉市焼山南１丁目８－２３",
          "url": ""
        },
        {
          "name": "医療法人社団　悠仁会　後藤病院",
          "beds": 84,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.250164,
          "lng": 132.57074,
          "address": "呉市東中央１丁目８－２０",
          "url": ""
        },
        {
          "name": "重症心身障害児施設　ときわ呉",
          "beds": 70,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.220711,
          "lng": 132.551971,
          "address": "呉市宮原十三丁目２－１２",
          "url": ""
        },
        {
          "name": "医療法人社団ひかり会　木村眼科内科病院",
          "beds": 40,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.242443,
          "lng": 132.557709,
          "address": "呉市宝町３番１５号",
          "url": ""
        },
        {
          "name": "呉みどりヶ丘病院",
          "beds": 275,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.255123,
          "lng": 132.593063,
          "address": "呉市阿賀北一丁目１５番４５号",
          "url": ""
        },
        {
          "name": "呉共済病院",
          "beds": 400,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "脳神経外科",
            "心臓血管外科"
          ],
          "lat": 34.248747,
          "lng": 132.55843,
          "address": "呉市西中央2-3-28",
          "url": "https://kure.kkr.or.jp/"
        },
        {
          "name": "島の病院おおたに",
          "beds": 96,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.21933,
          "lng": 132.436142,
          "address": "江田島市能美町中町４７１１",
          "url": ""
        },
        {
          "name": "医療法人社団　仁風会　青木病院",
          "beds": 78,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.236885,
          "lng": 132.478333,
          "address": "江田島市江田島町中央４丁目１７－１０",
          "url": ""
        },
        {
          "name": "一般財団法人　広島結核予防協会　住吉浜病院",
          "beds": 35,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.186752,
          "lng": 132.664185,
          "address": "呉市下蒲刈町下島２４９８",
          "url": ""
        },
        {
          "name": "医療法人社団　吉田会　吉田病院",
          "beds": 105,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.249218,
          "lng": 132.449585,
          "address": "江田島市江田島町津久茂２丁目６－２",
          "url": ""
        },
        {
          "name": "医療法人社団はまい会　大君浜井病院",
          "beds": 35,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.158569,
          "lng": 132.480515,
          "address": "江田島市大柿町大君９６２－１",
          "url": ""
        },
        {
          "name": "呉医療センター",
          "beds": 700,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "がん",
            "循環器"
          ],
          "lat": 34.239036,
          "lng": 132.565333,
          "address": "呉市青山町3-1",
          "url": "https://kure.hosp.go.jp/"
        }
      ]
    },
    "hiroshimaChuo": {
      "id": "hiroshimaChuo",
      "name": "広島中央",
      "color": "#F97316",
      "municipalityCodes": [
        "34212",
        "34214",
        "34431"
      ],
      "municipalities": [
        "東広島市",
        "竹原市",
        "大崎上島町"
      ],
      "population": {
        "2020": 220000,
        "2025": 215000,
        "2030": 208000,
        "2035": 198000,
        "2040": 188000
      },
      "beds": {
        "total": 2450,
        "highAcute": 280,
        "acute": 920,
        "recovery": 680,
        "chronic": 570
      },
      "avgTransportTime": 52,
      "avgArrivalTime": 10.5,
      "hospitals": [
        {
          "name": "医療法人楽生会　馬場病院",
          "beds": 80,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.335205,
          "lng": 132.88884,
          "address": "竹原市下野町１７４４",
          "url": ""
        },
        {
          "name": "医療法人社団恵宣会　竹原病院",
          "beds": 192,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.347534,
          "lng": 132.887619,
          "address": "竹原市下野町６５０",
          "url": ""
        },
        {
          "name": "医療法人社団仁慈会　安田病院",
          "beds": 153,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.348072,
          "lng": 132.884247,
          "address": "竹原市下野町３１３６",
          "url": ""
        }
      ]
    },
    "bisan": {
      "id": "bisan",
      "name": "尾三",
      "color": "#059669",
      "municipalityCodes": [
        "34204",
        "34205",
        "34462"
      ],
      "municipalities": [
        "三原市",
        "尾道市",
        "世羅町"
      ],
      "population": {
        "2020": 210000,
        "2025": 195000,
        "2030": 180000,
        "2035": 165000,
        "2040": 150000
      },
      "beds": {
        "total": 4036,
        "highAcute": 320,
        "acute": 1100,
        "recovery": 980,
        "chronic": 800
      },
      "avgTransportTime": 46,
      "avgArrivalTime": 9.8,
      "hospitals": [
        {
          "name": "小泉病院",
          "beds": 392,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科"
          ],
          "lat": 34.4552,
          "lng": 132.99818,
          "address": "三原市小泉町4245",
          "url": "https://koizumi-hp.jp/"
        },
        {
          "name": "三原赤十字病院",
          "beds": 356,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.402602,
          "lng": 133.089615,
          "address": "三原市東町2-7-1",
          "url": "https://www.mihara.jrc.or.jp/"
        },
        {
          "name": "医療法人清幸会　三原城町病院",
          "beds": 188,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.398003,
          "lng": 133.084946,
          "address": "三原市城町１丁目１４－１４",
          "url": ""
        },
        {
          "name": "三原病院",
          "beds": 337,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科"
          ],
          "lat": 34.41725,
          "lng": 133.05609,
          "address": "三原市中之町6-31-1",
          "url": "https://www.miharahp.com/"
        },
        {
          "name": "医療法人杏仁会　松尾内科病院",
          "beds": 110,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.396912,
          "lng": 133.08342,
          "address": "三原市城町３丁目７－１",
          "url": ""
        },
        {
          "name": "三原市医師会病院",
          "beds": 199,
          "type": "地域医療支援",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.3975,
          "lng": 133.078889,
          "address": "三原市円一町1-3-36",
          "url": "https://www.mihara-ishikai.jp/"
        },
        {
          "name": "医療法人宗斉会　須波宗斉会病院",
          "beds": 70,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.352413,
          "lng": 133.077805,
          "address": "三原市須波ハイツ２丁目３番１０号",
          "url": ""
        },
        {
          "name": "興生総合病院",
          "beds": 302,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "循環器",
            "消化器"
          ],
          "lat": 34.395556,
          "lng": 133.089722,
          "address": "三原市円一町2-5-1",
          "url": "https://www.kohsei.or.jp/"
        },
        {
          "name": "青山病院",
          "beds": 120,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.415104,
          "lng": 133.18869,
          "address": "尾道市栗原東２丁目２－６９",
          "url": ""
        },
        {
          "name": "尾道市立市民病院",
          "beds": 285,
          "type": "地域医療支援",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "脳神経外科",
            "整形外科"
          ],
          "lat": 34.411667,
          "lng": 133.181944,
          "address": "尾道市新高山3-1170-177",
          "url": "https://www.onomichi-mh.jp/"
        },
        {
          "name": "医療法人社団　杏佑会　笠井病院",
          "beds": 30,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.411858,
          "lng": 133.204025,
          "address": "尾道市久保１丁目３－１９",
          "url": ""
        },
        {
          "name": "医療法人社団　神田会　木曽病院",
          "beds": 133,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.402447,
          "lng": 133.169098,
          "address": "尾道市神田町２－２４",
          "url": ""
        },
        {
          "name": "医療法人社団　啓卯会　村上記念病院",
          "beds": 52,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.40078,
          "lng": 133.180176,
          "address": "尾道市新浜１丁目１４－２６",
          "url": ""
        },
        {
          "name": "医療法人社団　重松会　松本病院",
          "beds": 182,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.410465,
          "lng": 133.208694,
          "address": "尾道市久保３丁目１４－２２",
          "url": ""
        },
        {
          "name": "公立みつぎ総合病院",
          "beds": 240,
          "type": "公的",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "脳神経外科",
            "リハビリ"
          ],
          "lat": 34.51667,
          "lng": 133.14778,
          "address": "尾道市御調町市124",
          "url": "https://www.mitsugibyouin.com/"
        },
        {
          "name": "尾道総合病院",
          "beds": 352,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "循環器",
            "がん"
          ],
          "lat": 34.407056,
          "lng": 133.176139,
          "address": "尾道市平原1-10-23",
          "url": "https://www.onomichi-gh.jp/"
        },
        {
          "name": "山本病院",
          "beds": 39,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.437828,
          "lng": 133.232315,
          "address": "尾道市高須町７３５番地",
          "url": ""
        },
        {
          "name": "カナデビア健康保険組合　因島総合病院",
          "beds": 83,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.28252,
          "lng": 133.179749,
          "address": "尾道市因島土生町２５６１",
          "url": ""
        },
        {
          "name": "因島医師会病院",
          "beds": 197,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "リハビリ"
          ],
          "lat": 34.313088,
          "lng": 133.15304,
          "address": "尾道市因島中庄町1962",
          "url": "http://innoshima.com/ishikai/hospital/"
        },
        {
          "name": "医療法人　仁康会　本郷中央病院",
          "beds": 81,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.407169,
          "lng": 132.974625,
          "address": "三原市下北方一丁目７番３０号",
          "url": ""
        },
        {
          "name": "公立世羅中央病院",
          "beds": 288,
          "type": "公的",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.585857,
          "lng": 133.04586,
          "address": "世羅郡世羅町本郷918-3",
          "url": "https://www.serachuo-hp.jp/"
        }
      ]
    },
    "fukuyamaFuchu": {
      "id": "fukuyamaFuchu",
      "name": "福山・府中",
      "color": "#E11D48",
      "municipalityCodes": [
        "34207",
        "34208",
        "34545"
      ],
      "municipalities": [
        "福山市",
        "府中市",
        "神石高原町"
      ],
      "population": {
        "2020": 520000,
        "2025": 495000,
        "2030": 468000,
        "2035": 438000,
        "2040": 408000
      },
      "beds": {
        "total": 6270,
        "highAcute": 650,
        "acute": 1850,
        "recovery": 1380,
        "chronic": 1203
      },
      "avgTransportTime": 44,
      "avgArrivalTime": 9,
      "hospitals": [
        {
          "name": "医療法人村上会　福山回生病院",
          "beds": 40,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.492981,
          "lng": 133.404175,
          "address": "福山市引野町５丁目９－２１",
          "url": ""
        },
        {
          "name": "医療法人　賢仁会　松岡病院",
          "beds": 41,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.489876,
          "lng": 133.366241,
          "address": "福山市宝町５－３２",
          "url": ""
        },
        {
          "name": "医療法人　大林会　福山こころの病院",
          "beds": 254,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.481167,
          "lng": 133.340286,
          "address": "福山市佐波町５７６－１",
          "url": ""
        },
        {
          "name": "医療法人社団　健生会　いそだ病院",
          "beds": 41,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.483322,
          "lng": 133.373596,
          "address": "福山市松浜町１丁目１３－３８",
          "url": ""
        },
        {
          "name": "中国中央病院",
          "beds": 281,
          "type": "地域医療支援",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "循環器",
            "消化器"
          ],
          "lat": 34.490278,
          "lng": 133.381667,
          "address": "福山市御幸町大字上岩成148-13",
          "url": "https://kouritu-cch.jp/"
        },
        {
          "name": "福山市民病院",
          "beds": 506,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "がん",
            "循環器",
            "周産期"
          ],
          "lat": 34.510972,
          "lng": 133.397861,
          "address": "福山市蔵王町5-23-1",
          "url": "https://fc-hosp.jp/"
        },
        {
          "name": "福山記念病院",
          "beds": 217,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "整形外科",
            "リハビリ"
          ],
          "lat": 34.484233,
          "lng": 133.380258,
          "address": "福山市港町1-15-30",
          "url": "https://kbk-group.or.jp/"
        },
        {
          "name": "医療法人社団　若葉会　蔵王病院",
          "beds": 241,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.498325,
          "lng": 133.403259,
          "address": "福山市南蔵王町６丁目２３－１",
          "url": ""
        },
        {
          "name": "医療法人慈生会　前原病院",
          "beds": 59,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.486515,
          "lng": 133.385437,
          "address": "福山市手城町１丁目３－４１",
          "url": ""
        },
        {
          "name": "日本鋼管福山病院",
          "beds": 350,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "整形外科",
            "消化器"
          ],
          "lat": 34.454167,
          "lng": 133.383611,
          "address": "福山市大門町津之下1844",
          "url": "https://www.nkfh.or.jp/"
        },
        {
          "name": "医療法人　信英会　島谷病院",
          "beds": 53,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.463108,
          "lng": 133.397034,
          "address": "福山市新涯町２丁目５－８",
          "url": ""
        },
        {
          "name": "大石病院",
          "beds": 50,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.472374,
          "lng": 133.387482,
          "address": "福山市川口町１－７－１５",
          "url": ""
        },
        {
          "name": "医療法人社団緑誠会　光の丘病院",
          "beds": 175,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.531086,
          "lng": 133.298416,
          "address": "福山市駅家町大字向永谷３０２",
          "url": ""
        },
        {
          "name": "医療法人社団玄同会　小畠病院",
          "beds": 111,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.534611,
          "lng": 133.3302,
          "address": "福山市駅家町大字上山守２０３",
          "url": ""
        },
        {
          "name": "医療法人　徹慈会　堀病院",
          "beds": 35,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.471886,
          "lng": 133.372986,
          "address": "福山市沖野上町３丁目４－１３",
          "url": ""
        },
        {
          "name": "脳神経センター大田記念病院",
          "beds": 199,
          "type": "一般",
          "emergencyLevel": 3,
          "departments": [
            "脳神経外科",
            "救急"
          ],
          "lat": 34.471861,
          "lng": 133.37361,
          "address": "福山市沖野上町3-6-28",
          "url": "https://otahp.jp"
        },
        {
          "name": "福山城西病院",
          "beds": 156,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "整形外科"
          ],
          "lat": 34.490052,
          "lng": 133.356561,
          "address": "福山市西町2-11-36",
          "url": "https://iwadou.or.jp/"
        },
        {
          "name": "医療法人社団　永光会　水永リハビリテーション病院",
          "beds": 73,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.498806,
          "lng": 133.397141,
          "address": "福山市南蔵王町４丁目１６－１６",
          "url": ""
        },
        {
          "name": "医療法人　辰川会　山陽病院",
          "beds": 82,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.477746,
          "lng": 133.365068,
          "address": "福山市野上町２－８－２",
          "url": ""
        },
        {
          "name": "医療法人　叙叙会　福山第一病院",
          "beds": 132,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.503686,
          "lng": 133.402025,
          "address": "福山市南蔵王町５－１４－５",
          "url": ""
        },
        {
          "name": "下永病院",
          "beds": 159,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.441013,
          "lng": 133.305267,
          "address": "福山市金江町藁江５９０－１",
          "url": ""
        },
        {
          "name": "西福山病院",
          "beds": 122,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.451309,
          "lng": 133.259186,
          "address": "福山市松永町３４０－１",
          "url": ""
        },
        {
          "name": "医療法人東和会　小林病院",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.510406,
          "lng": 133.414261,
          "address": "福山市春日町７－１－１８",
          "url": ""
        },
        {
          "name": "医療法人財団竹政会　福山循環器病院",
          "beds": 80,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.477859,
          "lng": 133.374451,
          "address": "福山市緑町２－３９",
          "url": ""
        },
        {
          "name": "医療法人社団健照会　住吉ふじい病院",
          "beds": 81,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.485795,
          "lng": 133.371153,
          "address": "福山市住吉町４－１",
          "url": ""
        },
        {
          "name": "福山友愛病院",
          "beds": 347,
          "type": "精神科",
          "emergencyLevel": 1,
          "departments": [
            "精神科"
          ],
          "lat": 34.45667,
          "lng": 133.40776,
          "address": "福山市水呑町7302-2",
          "url": "https://yuai-hospital.or.jp/"
        },
        {
          "name": "楠本病院",
          "beds": 97,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.470123,
          "lng": 133.396774,
          "address": "福山市曙町３－１９－１８",
          "url": ""
        },
        {
          "name": "医療法人社団　宏仁会　寺岡整形外科病院",
          "beds": 122,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.485657,
          "lng": 133.353668,
          "address": "福山市南本庄３丁目１－５２",
          "url": ""
        },
        {
          "name": "井上病院",
          "beds": 38,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.496224,
          "lng": 133.399597,
          "address": "福山市東深津町三丁目２３番４６号",
          "url": ""
        },
        {
          "name": "医療法人三宅会　三宅会グッドライフ病院",
          "beds": 110,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.489872,
          "lng": 133.3685,
          "address": "福山市東町一丁目１番１８号",
          "url": ""
        },
        {
          "name": "広島県立福山若草園",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.465542,
          "lng": 133.353577,
          "address": "福山市水呑町三新田一丁目５３８番地",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　福山リハビリテーション病院",
          "beds": 302,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.490316,
          "lng": 133.397176,
          "address": "福山市明神町二丁目１５番４１号",
          "url": ""
        },
        {
          "name": "医療法人財団竹政会　セントラル病院",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.485546,
          "lng": 133.370682,
          "address": "福山市住吉町１番２６号",
          "url": ""
        },
        {
          "name": "医療法人　秀明会　小池病院",
          "beds": 54,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.480934,
          "lng": 133.366852,
          "address": "福山市光南町１丁目５番２３号",
          "url": ""
        },
        {
          "name": "福山南病院",
          "beds": 114,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.446892,
          "lng": 133.379807,
          "address": "福山市水呑町１９４７番地２",
          "url": ""
        },
        {
          "name": "医療法人同仁会　府中中央内科病院",
          "beds": 45,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.563866,
          "lng": 133.243423,
          "address": "府中市高木町４０２",
          "url": ""
        },
        {
          "name": "府中市立湯が丘病院",
          "beds": 248,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.671429,
          "lng": 133.101517,
          "address": "府中市上下町矢野１００",
          "url": ""
        },
        {
          "name": "府中市民病院",
          "beds": 150,
          "type": "公的",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "整形外科"
          ],
          "lat": 34.569817,
          "lng": 133.248333,
          "address": "府中市鵜飼町555-3",
          "url": "https://fuchuhp.jp/"
        },
        {
          "name": "府中北市民病院",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.698513,
          "lng": 133.123383,
          "address": "府中市上下町上下２１０１番地",
          "url": ""
        },
        {
          "name": "沼隈病院",
          "beds": 118,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "リハビリ",
            "内科"
          ],
          "lat": 34.419064,
          "lng": 133.323037,
          "address": "福山市沼隈町中山南469-3",
          "url": "http://www.shounankai.or.jp/"
        },
        {
          "name": "医療法人　慈彗会　亀川病院",
          "beds": 74,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.564587,
          "lng": 133.398132,
          "address": "福山市神辺町下御領６８２－１",
          "url": ""
        },
        {
          "name": "寺岡記念病院",
          "beds": 248,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "脳神経外科",
            "循環器"
          ],
          "lat": 34.550389,
          "lng": 133.280306,
          "address": "福山市新市町新市37",
          "url": "https://www.teraoka-hosp.jp/"
        },
        {
          "name": "神石高原町立病院",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.710163,
          "lng": 133.256851,
          "address": "神石郡神石高原町小畠１７０９－３",
          "url": ""
        },
        {
          "name": "福山医療センター",
          "beds": 365,
          "type": "地域医療支援",
          "emergencyLevel": 3,
          "departments": [
            "救急",
            "がん",
            "呼吸器"
          ],
          "lat": 34.47056,
          "lng": 133.37056,
          "address": "福山市沖野上町4-14-17",
          "url": "https://fukuyama.hosp.go.jp/"
        }
      ]
    },
    "bihoku": {
      "id": "bihoku",
      "name": "備北",
      "color": "#0891B2",
      "municipalityCodes": [
        "34209",
        "34210"
      ],
      "municipalities": [
        "三次市",
        "庄原市"
      ],
      "population": {
        "2020": 85000,
        "2025": 77000,
        "2030": 70000,
        "2035": 63000,
        "2040": 56000
      },
      "beds": {
        "total": 1571,
        "highAcute": 120,
        "acute": 480,
        "recovery": 450,
        "chronic": 370
      },
      "avgTransportTime": 58,
      "avgArrivalTime": 12.4,
      "hospitals": [
        {
          "name": "医療法人新和会　三次病院",
          "beds": 235,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.810196,
          "lng": 132.834961,
          "address": "三次市粟屋町１７３１",
          "url": ""
        },
        {
          "name": "三次地区医療センター",
          "beds": 150,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.810047,
          "lng": 132.860031,
          "address": "三次市十日市東３－１６－１",
          "url": ""
        },
        {
          "name": "医療法人微風会　ビハーラ花の里病院",
          "beds": 290,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.844803,
          "lng": 132.825912,
          "address": "三次市山家町６０５－２０",
          "url": ""
        },
        {
          "name": "市立三次中央病院",
          "beds": 315,
          "type": "地域医療支援",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "循環器",
            "がん"
          ],
          "lat": 34.782053,
          "lng": 132.867632,
          "address": "三次市東酒屋町531",
          "url": "https://miyoshi-central-hospital.jp/"
        },
        {
          "name": "子鹿医療療育センター",
          "beds": 84,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.783424,
          "lng": 132.803925,
          "address": "三次市粟屋町１１６６４番地",
          "url": ""
        },
        {
          "name": "庄原赤十字病院",
          "beds": 220,
          "type": "一般",
          "emergencyLevel": 2,
          "departments": [
            "救急",
            "内科",
            "外科"
          ],
          "lat": 34.855278,
          "lng": 133.022222,
          "address": "庄原市西本町2-7-10",
          "url": "https://www.shobara.jrc.or.jp/"
        },
        {
          "name": "庄原同仁病院",
          "beds": 60,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.919243,
          "lng": 133.015732,
          "address": "庄原市川北町字久井田８９０－１",
          "url": ""
        },
        {
          "name": "備北ななつか病院",
          "beds": 113,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.838055,
          "lng": 132.966507,
          "address": "庄原市七塚町１６１３",
          "url": ""
        },
        {
          "name": "庄原市立西城市民病院",
          "beds": 54,
          "type": "公的",
          "emergencyLevel": 1,
          "departments": [
            "内科",
            "地域包括"
          ],
          "lat": 34.940483,
          "lng": 133.116062,
          "address": "庄原市西城町栗729-1",
          "url": "https://saijyo-hospital.jp/"
        },
        {
          "name": "医療法人社団増原会　東城病院",
          "beds": 50,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 34.897171,
          "lng": 133.274643,
          "address": "庄原市東城町川東１４６３－１",
          "url": ""
        }
      ]
    }
  },
  "municipalityMapping": {
    "広島市中区": "hiroshima",
    "広島市東区": "hiroshima",
    "広島市南区": "hiroshima",
    "広島市西区": "hiroshima",
    "広島市安佐南区": "hiroshima",
    "広島市安佐北区": "hiroshima",
    "広島市安芸区": "hiroshima",
    "広島市佐伯区": "hiroshima",
    "安芸高田市": "hiroshima",
    "府中町": "hiroshima",
    "海田町": "hiroshima",
    "熊野町": "hiroshima",
    "坂町": "hiroshima",
    "安芸太田町": "hiroshima",
    "北広島町": "hiroshima",
    "大竹市": "hiroshimaNishi",
    "廿日市市": "hiroshimaNishi",
    "呉市": "kure",
    "江田島市": "kure",
    "東広島市": "hiroshimaChuo",
    "竹原市": "hiroshimaChuo",
    "大崎上島町": "hiroshimaChuo",
    "三原市": "bisan",
    "尾道市": "bisan",
    "世羅町": "bisan",
    "福山市": "fukuyamaFuchu",
    "府中市": "fukuyamaFuchu",
    "神石高原町": "fukuyamaFuchu",
    "三次市": "bihoku",
    "庄原市": "bihoku"
  },
  "prefectureStats": {
    "totalPopulation2020": 2800000,
    "totalPopulation2040": 2500000,
    "totalBeds2023": 26000,
    "avgTransportTime2022": 45.2,
    "avgArrivalTime2022": 9.4
  },
  "reorganizationScenarios": [
    {
      "id": "current",
      "name": "現行（7医療圏）"
    },
    {
      "id": "scenario1",
      "name": "6医療圏案"
    },
    {
      "id": "scenario2",
      "name": "5医療圏案"
    }
  ]
};