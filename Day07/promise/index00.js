const lunch = () =>
  new Promise((resolve, reject) => {
    console.log("오늘의 점메추");
    resolve();
  });
const a = +prompt("초를 입력하세요 ex) 2000, 3000, ...");
const b = +prompt("초를 입력하세요 ex) 2000, 3000, ...");
const c = +prompt("초를 입력하세요 ex) 2000, 3000, ...");

const doogoo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("두구둑둑둑두굳구둑두구둑두구둑두굳구ㅜㄷ구두구");
      resolve();
    }, `${a}`);
  });

const menu = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("카레와 스팸입니다!");
      resolve();
    }, `${b}`);
  });

const matjeom = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("맛점하세요!🍳");
      resolve();
    }, `${c}`);
  });
lunch()
  .then(() => doogoo())
  .then(() => menu())
  .then(() => matjeom());

// 오늘의 점메추!
// 3최 뒤에 먹고 싶은 메뉴 넣기
