// 치킨 만들기 프로그램
// 콘솔로 모든 과정이 찍혀야됨

// 1. 물받기 (1 ~ 5초)
// 2. 물끓이기 (5 ~ 8초)
// 3. 면과 스프 넣기 (1 ~ 3초)
// 4. 계란 넣기 (1 ~ 2초)
// 5. 라면 전체 익히기 (5 ~ 10초)
// 6. 라면 완성 !

// min~max까지 정수를 돌려주는 랜덤 함수
const getRandomInt = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

const start = () =>
  new Promise((resolve, reject) => {
    console.log("라면 끓이기 시작 !🤗");
    setTimeout(() => {
      resolve();
    });
  });

const pots = () =>
  new Promise((resolve, reject) => {
    const delay = getRandomInt(1, 2);
    console.log(`우선 냄비를 꺼낸다. (${delay / 1000}초 소요됨)`);
    setTimeout(() => {
      resolve();
    }, getRandomInt(1, 2));
  });

const water = () =>
  new Promise((resolve, reject) => {
    const delay = getRandomInt(1, 5);
    console.log("냄비에 물 받는 중🍼");
    setTimeout(() => {
      console.log(`물 받기 완료 ! (${delay / 1000}초 소요됨)`);
      resolve();
    }, getRandomInt(1, 5));
  });

const boiling = () =>
  new Promise((resolve, reject) => {
    const delay = getRandomInt(2, 3);
    console.log(`물 끓이는 중 `);
    setTimeout(() => {
      resolve();
    }, getRandomInt(2, 3));
  });

const keepBoiling = () =>
  new Promise((resolve, reject) => {
    const delay = getRandomInt(2, 3);
    console.log(`😡보글보글😡`);
    setTimeout(() => {
      console.log(`다 끓임 (${delay / 1000}초 소요됨)`);
      resolve();
    }, getRandomInt(2, 3));
  });

const noodleFlake = () =>
  new Promise((resolve, reject) => {
    const delay = getRandomInt(2, 3);
    console.log(`면과 스프를 넣어준다`);
    setTimeout(() => {
      console.log(`면과 스프 넣기 끝 (${delay / 1000}초 소요됨)`);
      resolve();
    }, getRandomInt(2, 3));
  });

const egg = () =>
  new Promise((resolve, reject) => {
    const delay = getRandomInt(2, 3);

    console.log(`계란 넣기`);
    setTimeout(() => {
      console.log(`계란을 퐁당🥚 (${delay / 1000}초 소요됨)`);
      resolve();
    }, getRandomInt(2, 3));
  });

const cooking = () =>
  new Promise((resolve, reject) => {
    const delay = getRandomInt(5, 8);
    console.log(`라면을 익히는 중입니다.`);
    setTimeout(() => {
      console.log(`다 익었다! (${delay / 1000}초 소요됨)`);
      resolve();
    }, getRandomInt(5, 8));
  });

const done = () =>
  new Promise((resolve, reject) => {
    console.log(`라면 완성🍜`);
    setTimeout(() => {
      resolve();
    }, getRandomInt(2, 3));
  });
const bonAppetit = () =>
  new Promise((resolve, reject) => {
    console.log(`잘먹겠습니다!😋`);
    setTimeout(() => {
      resolve();
    });
  });

start()
  .then(() => pots())
  .then(() => water())
  .then(() => boiling())
  .then(() => keepBoiling())
  .then(() => noodleFlake())
  .then(() => egg)
  .then(() => cooking())
  .then(() => done())
  .then(() => bonAppetit());
