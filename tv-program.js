
// 課題3-2 のプログラムはこの関数の中に記述すること
let kennsuu = 0;
function print(data) {
  kennsuu = kennsuu + 1;
  console.log(kennsuu + "件目の検索結果");
  console.log("開始時間:" + data.list.g1[kennsuu-1].start_time);
  console.log("終了時間:" + data.list.g1[kennsuu-1].end_time);
  console.log("タイトル:" + data.list.g1[kennsuu-1].title);
  console.log("サブタイトル:" + data.list.g1[kennsuu-1].subtitle);
  console.log("出演者:" + data.list.g1[kennsuu-1].act);
}

//課題4
let p, q;
p = document.querySelector('button#input1');
p.addEventListener('click',show1);
function show1(){
  let box1 = document.querySelector('input#input1');
  let b1 = box1.value;
  console.log(b1);
}
q = document.querySelector('button#submit');
q.addEventListener('click',show2);
function show2(){
  let box2 = document.querySelector('select#options');
  let b2 = box2.value;
  console.log(b2);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printdom(data) {
let u = document.createElement('ul');
let l = document.createElement('li');

//検索結果
l.textContent = ('開始時間: ' + data.list.g1[0].start_time);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('終了時間: ' + data.list.g1[0].end_time);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('チャンネル: ' + data.list.g1[0].service.name);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('タイトル: ' + data.list.g1[0].title);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('サブタイトル: ' + data.list.g1[0].subtitle);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('番組説明: ' + data.list.g1[0].content);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('出演者: ' + data.list.g1[0].act);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

//分かれ目
u.insertAdjacentHTML('beforeend', '<br>');
u.insertAdjacentHTML('beforeend', '<br>');


//こっからg1[1]
l.textContent = ('開始時間: ' + data.list.g1[1].start_time);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('終了時間: ' + data.list.g1[1].end_time);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('チャンネル: ' + data.list.g1[1].service.name);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('タイトル: ' + data.list.g1[1].title);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('サブタイトル: ' + data.list.g1[1].subtitle);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('番組説明: ' + data.list.g1[1].content);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('出演者: ' + data.list.g1[1].act);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

div = document.querySelector('div#result');
div.insertAdjacentElement('afterend', u);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

