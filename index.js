// constant.jsで設定した項目名を指定
const itemType = 'DINNER';
// const itemType = 'LUNCH';
// const itemType = 'PREFECTURES';
const target = CONSTS[itemType];

window.onload = () => {
  const name = target.name;
  document.title = `${name}ガチャ`;
  document.getElementById('main').querySelector("h1").innerText = `${name}を決めてください。`;
  document.getElementById('result').querySelector("h1").innerText = `あなたの${name}は`;
}

//最大値・最小値を引数に持つ関数
const getRandom = (min, max) => {
  return Math.floor( Math.random() * (max + 1 - min) ) + min;
}

const handleClickButton = () => {
  document.getElementById('main').style.display = 'none';
  document.getElementById('result').style.display = 'block';

  const min = 1;
  const max = target.items.length;
  const random = getRandom(min, max);

  const destination = document.getElementById('destination');
  const targetPrefecture = target.items.find((prefecture) => prefecture.code === random);

  destination.innerText = `${targetPrefecture.name}です！`;
}
