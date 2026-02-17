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
        "total": 12762,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区翠４丁目１３－７",
          "url": ""
        },
        {
          "name": "真田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区皆実町３丁目１３－２１",
          "url": ""
        },
        {
          "name": "医療法人　土本病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区橋本町４－７",
          "url": ""
        },
        {
          "name": "塩田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区堀越１丁目７－３６",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　たかの橋中央病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区国泰寺町２丁目４－１６",
          "url": ""
        },
        {
          "name": "医療法人三渓会　川堀病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区松川町３－８",
          "url": ""
        },
        {
          "name": "広島第一病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市東区戸坂南２丁目９－１５",
          "url": ""
        },
        {
          "name": "槙坪病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市東区光町１丁目１４－２",
          "url": ""
        },
        {
          "name": "山本整形外科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区青崎２丁目４－２０",
          "url": ""
        },
        {
          "name": "医療法人　せのがわ　瀬野川病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安芸区中野東４丁目１１－１３",
          "url": ""
        },
        {
          "name": "医療法人ワカサ会　ワカサ・リハビリ病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市東区東山町１５－１",
          "url": ""
        },
        {
          "name": "山﨑病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市東区上温品１丁目２４－９",
          "url": ""
        },
        {
          "name": "太田川病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市東区戸坂千足１丁目２１－２５",
          "url": ""
        },
        {
          "name": "医療法人恒和会　松石病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安芸区船越南３丁目２３－３",
          "url": ""
        },
        {
          "name": "広島シーサイド病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区元宇品町２６－２０",
          "url": ""
        },
        {
          "name": "広島厚生病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区上東雲町３－１",
          "url": ""
        },
        {
          "name": "医療法人社団まりも会　ヒロシマ平松病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市南区比治山本町１１番２７号",
          "url": ""
        },
        {
          "name": "医療法人社団おると会　浜脇整形外科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区大手町４丁目６番６号",
          "url": ""
        },
        {
          "name": "一ノ瀬病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区国泰寺町１－５－１１",
          "url": ""
        },
        {
          "name": "林病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区三川町３番８号",
          "url": ""
        },
        {
          "name": "医療法人　新でしお病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区東千田町一丁目１番２３号",
          "url": ""
        },
        {
          "name": "広島中央リハビリテーション病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区平野町６－２４",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　広島はくしま病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市中区東白島町１９番１６号",
          "url": ""
        },
        {
          "name": "瀬野記念病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区鈴が峰町１４－２０",
          "url": ""
        },
        {
          "name": "医療法人社団　光仁会　梶川病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区天満町８－７",
          "url": ""
        },
        {
          "name": "医療法人社団　正岡産婦人科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区西原５丁目１１－１８",
          "url": ""
        },
        {
          "name": "高陽中央病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区古江西町２２－１０",
          "url": ""
        },
        {
          "name": "医療法人社団　慈恵会　いまだ病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区三篠町１丁目５－１",
          "url": ""
        },
        {
          "name": "長久堂野村病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐北区可部南４－１７－３０",
          "url": ""
        },
        {
          "name": "医療法人社団共愛会　己斐ケ丘病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区己斐上６丁目５５４－１",
          "url": ""
        },
        {
          "name": "日比野病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区伴東７丁目９番２号",
          "url": ""
        },
        {
          "name": "野村病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区祇園２丁目４２－１４",
          "url": ""
        },
        {
          "name": "医療法人社団うすい会　高陽ニュータウン病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐北区亀崎４丁目７－１",
          "url": ""
        },
        {
          "name": "養神館病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市佐伯区五日市１丁目１２－６",
          "url": ""
        },
        {
          "name": "医療法人社団　一陽会　原田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市佐伯区海老山町７－１０",
          "url": ""
        },
        {
          "name": "ナカムラ病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市佐伯区坪井３丁目８１８－１",
          "url": ""
        },
        {
          "name": "医療法人社団初仁会　桧田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市佐伯区五日市中央１丁目１－３２",
          "url": ""
        },
        {
          "name": "荒木脳神経外科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区庚午北２丁目８－７",
          "url": ""
        },
        {
          "name": "医療法人社団朋和会　西広島リハビリテーション病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市佐伯区五日市町下河内１８８－６",
          "url": ""
        },
        {
          "name": "医療法人和同会　広島パークヒル病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区田方２－１６－４５",
          "url": ""
        },
        {
          "name": "妹尾病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区相田１丁目１０－２１",
          "url": ""
        },
        {
          "name": "重症児・者福祉医療施設　鈴が峰",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市佐伯区五日市町皆賀１０４－２７",
          "url": ""
        },
        {
          "name": "医療法人社団公仁会　槇殿順記念病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区横川新町８－２１",
          "url": ""
        },
        {
          "name": "生協さえき病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市佐伯区八幡東３丁目１１－２９",
          "url": ""
        },
        {
          "name": "さんよう水野病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区川内４丁目１３－３３",
          "url": ""
        },
        {
          "name": "サカ緑井病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区緑井６丁目２８－１",
          "url": ""
        },
        {
          "name": "医療法人社団　聖愛会　ぎおん牛田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区西原八丁目２９番２４号",
          "url": ""
        },
        {
          "name": "原田整形外科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区上安二丁目１５－２７",
          "url": ""
        },
        {
          "name": "長崎病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市西区横川新町３番１１号",
          "url": ""
        },
        {
          "name": "地方独立行政法人広島市立病院機構　広島市立リハビリテーション病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "広島市安佐南区相田一丁目１６番２９号",
          "url": ""
        },
        {
          "name": "医療法人　広和会　福馬病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市赤坂町赤坂１３１３",
          "url": ""
        },
        {
          "name": "医療法人社団葵会　本永病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "東広島市西条岡町８－１３",
          "url": ""
        },
        {
          "name": "木阪病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "東広島市西条町土与丸１２３５番地",
          "url": ""
        },
        {
          "name": "医療法人社団　二山会　宗近病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "東広島市西条町西条東１２８３－２",
          "url": ""
        },
        {
          "name": "医療法人社団葵会八本松病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "東広島市八本松東３丁目９－３０",
          "url": ""
        },
        {
          "name": "井野口病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "安芸郡府中町みくまり３－１－１１",
          "url": ""
        },
        {
          "name": "山本整形外科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "安芸郡海田町堀川町２－２３",
          "url": ""
        },
        {
          "name": "南海田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "山県郡北広島町有田１１９２",
          "url": ""
        },
        {
          "name": "大朝ふるさと病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "東広島市黒瀬町楢原７５７",
          "url": ""
        },
        {
          "name": "医療法人　真慈会　真愛病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
        "total": 1850,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "廿日市市原９２６番地の１",
          "url": ""
        },
        {
          "name": "アマノ病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "廿日市市串戸５－１－３５",
          "url": ""
        },
        {
          "name": "医療法人社団　友和会　友和病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "廿日市市峠字下ケ原５００",
          "url": ""
        },
        {
          "name": "佐伯中央病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "廿日市市津田４１８０",
          "url": ""
        },
        {
          "name": "大野浦病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
        "total": 3580,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市三条３丁目５－２２",
          "url": ""
        },
        {
          "name": "呉芸南病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市阿賀中央６丁目７－２４",
          "url": ""
        },
        {
          "name": "医療法人社団中川会　呉中通病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市中通１－３－８",
          "url": ""
        },
        {
          "name": "大矢整形外科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市中央４－４－３",
          "url": ""
        },
        {
          "name": "医療法人社団有信会　呉記念病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市郷原町２３７９－４２",
          "url": ""
        },
        {
          "name": "医療法人社団　永楽会　前田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市中央２丁目６－２０",
          "url": ""
        },
        {
          "name": "佐藤病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市三条３丁目４－２５",
          "url": ""
        },
        {
          "name": "青山病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市中通１丁目５－２５",
          "url": ""
        },
        {
          "name": "ふたば病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市広白石４－７－２２",
          "url": ""
        },
        {
          "name": "医療法人社団　薫風会　横山病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市下蒲刈町下島２１２０番地の４",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　呉やけやま病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市焼山南１丁目８－２３",
          "url": ""
        },
        {
          "name": "医療法人社団　悠仁会　後藤病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市東中央１丁目８－２０",
          "url": ""
        },
        {
          "name": "重症心身障害児施設　ときわ呉",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市宮原十三丁目２－１２",
          "url": ""
        },
        {
          "name": "医療法人社団ひかり会　木村眼科内科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市宝町３番１５号",
          "url": ""
        },
        {
          "name": "呉みどりヶ丘病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "江田島市能美町中町４７１１",
          "url": ""
        },
        {
          "name": "医療法人社団　仁風会　青木病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "江田島市江田島町中央４丁目１７－１０",
          "url": ""
        },
        {
          "name": "一般財団法人　広島結核予防協会　住吉浜病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "呉市下蒲刈町下島２４９８",
          "url": ""
        },
        {
          "name": "医療法人社団　吉田会　吉田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "江田島市江田島町津久茂２丁目６－２",
          "url": ""
        },
        {
          "name": "医療法人社団はまい会　大君浜井病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "竹原市下野町１７４４",
          "url": ""
        },
        {
          "name": "医療法人社団恵宣会　竹原病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "竹原市下野町６５０",
          "url": ""
        },
        {
          "name": "医療法人社団仁慈会　安田病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
        "total": 3200,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "尾道市久保１丁目３－１９",
          "url": ""
        },
        {
          "name": "医療法人社団　神田会　木曽病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "尾道市神田町２－２４",
          "url": ""
        },
        {
          "name": "医療法人社団　啓卯会　村上記念病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "尾道市新浜１丁目１４－２６",
          "url": ""
        },
        {
          "name": "医療法人社団　重松会　松本病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "尾道市高須町７３５番地",
          "url": ""
        },
        {
          "name": "カナデビア健康保険組合　因島総合病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
        "total": 5083,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市引野町５丁目９－２１",
          "url": ""
        },
        {
          "name": "医療法人　賢仁会　松岡病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市宝町５－３２",
          "url": ""
        },
        {
          "name": "医療法人　大林会　福山こころの病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市佐波町５７６－１",
          "url": ""
        },
        {
          "name": "医療法人社団　健生会　いそだ病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市南蔵王町６丁目２３－１",
          "url": ""
        },
        {
          "name": "医療法人慈生会　前原病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市新涯町２丁目５－８",
          "url": ""
        },
        {
          "name": "大石病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市川口町１－７－１５",
          "url": ""
        },
        {
          "name": "医療法人社団緑誠会　光の丘病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市駅家町大字向永谷３０２",
          "url": ""
        },
        {
          "name": "医療法人社団玄同会　小畠病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市駅家町大字上山守２０３",
          "url": ""
        },
        {
          "name": "医療法人　徹慈会　堀病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市南蔵王町４丁目１６－１６",
          "url": ""
        },
        {
          "name": "医療法人　辰川会　山陽病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市野上町２－８－２",
          "url": ""
        },
        {
          "name": "医療法人　叙叙会　福山第一病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市南蔵王町５－１４－５",
          "url": ""
        },
        {
          "name": "下永病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市金江町藁江５９０－１",
          "url": ""
        },
        {
          "name": "西福山病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市松永町３４０－１",
          "url": ""
        },
        {
          "name": "医療法人東和会　小林病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市春日町７－１－１８",
          "url": ""
        },
        {
          "name": "医療法人財団竹政会　福山循環器病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市緑町２－３９",
          "url": ""
        },
        {
          "name": "医療法人社団健照会　住吉ふじい病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市曙町３－１９－１８",
          "url": ""
        },
        {
          "name": "医療法人社団　宏仁会　寺岡整形外科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市南本庄３丁目１－５２",
          "url": ""
        },
        {
          "name": "井上病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市東深津町三丁目２３番４６号",
          "url": ""
        },
        {
          "name": "医療法人三宅会　三宅会グッドライフ病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市東町一丁目１番１８号",
          "url": ""
        },
        {
          "name": "広島県立福山若草園",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市水呑町三新田一丁目５３８番地",
          "url": ""
        },
        {
          "name": "医療法人社団生和会　福山リハビリテーション病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市明神町二丁目１５番４１号",
          "url": ""
        },
        {
          "name": "医療法人財団竹政会　セントラル病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市住吉町１番２６号",
          "url": ""
        },
        {
          "name": "医療法人　秀明会　小池病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市光南町１丁目５番２３号",
          "url": ""
        },
        {
          "name": "福山南病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "福山市水呑町１９４７番地２",
          "url": ""
        },
        {
          "name": "医療法人同仁会　府中中央内科病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "府中市高木町４０２",
          "url": ""
        },
        {
          "name": "府中市立湯が丘病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
        "total": 1420,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "三次市粟屋町１７３１",
          "url": ""
        },
        {
          "name": "三次地区医療センター",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "三次市十日市東３－１６－１",
          "url": ""
        },
        {
          "name": "医療法人微風会　ビハーラ花の里病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
          "address": "庄原市川北町字久井田８９０－１",
          "url": ""
        },
        {
          "name": "備北ななつか病院",
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
          "beds": 0,
          "type": "一般",
          "emergencyLevel": 1,
          "departments": [],
          "lat": 0,
          "lng": 0,
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
