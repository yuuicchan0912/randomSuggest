//最大値・最小値を引数に持つ関数
const getRandom = (min, max) => {
  return Math.floor( Math.random() * (max + 1 - min) ) + min;
}

const handleClickButton = () => {
  const main = document.getElementById('main');
  const result = document.getElementById('result');
  const destination = document.getElementById('destination');

  main.style.display = 'none';
  result.style.display = 'block';

  const random = getRandom(1, 47);
  const targetPrefecture = CONSTS.PREFECTURES.find((prefecture) => prefecture.code === random);
  destination.innerText = `${targetPrefecture.name}です！`;
}
