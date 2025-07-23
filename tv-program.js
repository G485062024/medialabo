
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
let q;
/*
let p;
p = document.querySelector('button#input1');
p.addEventListener('click',show1);
function show1(){
  let box1 = document.querySelector('select#option');
  let b1 = box1.value;
  console.log(b1);
}
  */
q = document.querySelector('button#submit');
q.addEventListener('click',show2);
function show2(){
  let box2 = document.querySelector('select#options');
  let b2 = box2.value;
  console.log(b2);
}

// 課題5-1 の関数 printDom() はここに記述すること

let countremove = 0;
function printdom(data) {
countremove = countremove+1;
  if(countremove>1){
    let oldul = document.querySelector('ul');
    oldul.remove();
  };
  
let u = document.createElement('ul');
let l = document.createElement('li');

  let key2 = document.querySelector('#option').value;
  let id2;
  switch(key2){
    case 'NHK総合1':
      id2 = 'g1';
      break;
    case 'Eテレ1':
      id2 = 'e1';
      break;
    default:
  }
if(id2 == 'g1'){

//検索結果
for(let id = 0;id<data.list.g1.length;id++){
let l = document.createElement('li');
l.textContent = ('開始時間: ' + data.list.g1[id].start_time);
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = ('終了時間: ' + data.list.g1[id].end_time);
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = ('チャンネル: ' + data.list.g1[id].service.name);
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = ('タイトル: ' + data.list.g1[id].title);
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = ('サブタイトル: ' + data.list.g1[id].subtitle);
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = ('番組説明: ' + data.list.g1[id].content);
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = ('出演者: ' + data.list.g1[id].act);
u.insertAdjacentElement('beforeend', l);

div = document.querySelector('div#result');
div.insertAdjacentElement('afterend', u);
//分かれ目
u.insertAdjacentHTML('beforeend', '<br>');
u.insertAdjacentHTML('beforeend', '<br>');
u.insertAdjacentHTML('beforeend', '<br>');

}

//e1の時
}else if(id2 == 'e1'){

for(let id = 0;id<data.list.e1.length;id++){
l.textContent = ('開始時間: ' + data.list.e1[id].start_time);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('終了時間: ' + data.list.e1[id].end_time);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('チャンネル: ' + data.list.e1[id].service.name);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('タイトル: ' + data.list.e1[id].title);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('サブタイトル: ' + data.list.e1[id].subtitle);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('番組説明: ' + data.list.e1[id].content);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

l.textContent = ('出演者: ' + data.list.e1[id].act);
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');

div = document.querySelector('div#result');
div.insertAdjacentElement('afterend', u);

//二個目の番組

//分かれ目
u.insertAdjacentHTML('beforeend', '<br>');
u.insertAdjacentHTML('beforeend', '<br>');
u.insertAdjacentHTML('beforeend', '<br>');
}
}
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
//let b1 = document.querySelector('#input1');
let b2 = document.querySelector('#submit');
//b1.addEventListener('click',sendRequest);
b2.addEventListener('click',sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let key1 = document.querySelector('#options').value;
  let id1;
  switch(key1){
    case 'ニュース・報道':
      id1 = '0000';
      break;
    case 'スポーツ':
      id1 = '0100';
      break;
    case '情報・ワイドショー':
      id1 = '0205';
      break;
    case 'ドラマ':
      id1 = '0300';
      break;
    case '音楽':
      id1 = '0409';
      break;
    case 'バラエティ':
      id1 = '0502';
      break;
    case '映画':
      id1 = '0600';
      break;
    case 'アニメ':
      id1 = '0700';
      break;
    case 'ドキュメンタリー・教養':
      id1 = '0800';
      break;
    case '劇場・公演':
      id1 = '0903';
      break;
    case '趣味・教育':
      id1 = '1000';
      break;
    case '福祉':
      id1 = '1100';
      break;
    default:
  }
  let key2 = document.querySelector('#option').value;
  let id2;
  switch(key2){
    case 'NHK総合1':
      id2 = 'g1';
      break;
    case 'Eテレ1':
      id2 = 'e1';
      break;
    default:
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + id2 + '-' + id1 + '-j.json';
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  printdom(data);
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
/*

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

*/