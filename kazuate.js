// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let kaisu2 = 0;
let b, i;
i = document.querySelector('input[name="kazu"]');
i.getAttribute('name');
b = document.querySelector('button#print');
b.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義


function hantei() {

  kaisu = kaisu+1;
  kaisu2 = kaisu2+1;

  let yoso = Number(i.value);
  let ans = document.querySelector('span#answer');
  let ans2 = document.querySelector('span#kaisu');
  ans.textContent = yoso;
  ans2.textContent = kaisu2;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  let risult = document.querySelector('p#result');
  
  //result.textContent = (kaisu + "回目の予想: " + yoso);
  if(kaisu >= 4){
    result.textContent = ("答えは" + kotae + "でした．すでにゲームは終わっています");
  }else if(kotae === yoso){
    result.textContent = ("正解です.おめでとう！");
    kaisu = kaisu + 3;
  }else if(kaisu === 3){
    result.textContent = ("まちがい．残念でした答えは" + kotae +"です.");
  }else if(kaisu <= 2 && yoso < kotae){
    result.textContent = ("まちがい．答えはもっと大きいですよ");
  }else if(kaisu <= 2 && yoso > kotae){
    result.textContent = ("まちがい．答えはもっと小さいですよ");
  }
}