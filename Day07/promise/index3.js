// min~max까지 정수를 돌려주는 랜덤 함수
const getRandomInt = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

console.log("오늘의 점메추");

const menu = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("오늘의 메뉴: 도시락 🍱");
      resolve();
    }, getRandomInt(1, 10));
  });

const matjeom = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("맛점하세요! 😋");
      resolve();
    }, getRandomInt(1, 10));
  });

menu().then(() => matjeom());
