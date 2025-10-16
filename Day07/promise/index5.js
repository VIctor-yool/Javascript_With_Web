// //  동물 6마리 랜덤시간!

// // min~max까지 정수를 돌려주는 랜덤 함수
// const getRandomInt = (min, max) => {
//   return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
// };
// const startbtn = document.querySelector("#btn");

// startbtn.addEventListener("click", () => {
//   Promise.race([horse(), turtle(), rabbit(), snail(), snake(), cat()]).then(
//     (v) => console.log(v)
//   );
// });

// 한 번 넣어봐야함

//  startbtn.addEventListener("click", () => {
//   // 1등 출력
//   Promise.race([horse(), turtle(), rabbit(), snail(), snake(), cat()]).then(
//     (v) => console.log(`1등: ${v}`)
//   );

//   // 3등까지 출력용 배열
//   const results = [];

//   // 모든 참가자 실행, 도착할 때마다 결과 저장
//   [horse, turtle, rabbit, snail, snake, cat].forEach((racer) => {
//     racer().then((v) => {
//       results.push(v);
//       if (results.length <= 3) {
//         console.log(`${results.length}등: ${v}`);
//       }
//     });
//   });
// });

// const horse = () =>
//   new Promise((resolve) =>
//     setTimeout(
//       () => resolve(`🐎 ${getRandomArbitrary(1, 10) / 1000}`),
//       getRandomArbitrary(1, 10)
//     )
//   );
// const rabbit = () =>
//   new Promise((resolve) =>
//     setTimeout(
//       () => resolve(`🐇 ${getRandomArbitrary(1, 10) / 1000}`),
//       getRandomArbitrary(1, 10)
//     )
//   );
// const turtle = () =>
//   new Promise((resolve) =>
//     setTimeout(
//       () => resolve(`🐢 ${getRandomArbitrary(1, 10) / 1000}`),
//       getRandomArbitrary(1, 10)
//     )
//   );
// const snail = () =>
//   new Promise((resolve) =>
//     setTimeout(
//       () => resolve(`🐌 ${getRandomArbitrary(1, 10) / 1000}`),
//       getRandomArbitrary(1, 10)
//     )
//   );
// const snake = () =>
//   new Promise((resolve) =>
//     setTimeout(
//       () => resolve(`🐍 ${getRandomArbitrary(1, 10) / 1000}`),
//       getRandomArbitrary(1, 10)
//     )
//   );
// const cat = () =>
//   new Promise((resolve) =>
//     setTimeout(
//       () => resolve(`🐈 ${getRandomArbitrary(1, 10) / 1000}`),
//       getRandomArbitrary(1, 10)
//     )
//   );

// min~max까지 정수를 돌려주는 랜덤 함수
const makeRandomTime = (min, max) =>
  (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
const animals = ["🐎", "🐇", "🐢", "🐌", "🐍", "🐈"];

const makeRace = (name) => {
  const time = makeRandomTime(0, 10);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time });
    }, time);
  });
};
promise.all(animals.map((v) => makeRace(v))).then((results) => {
  console.log(results);
});
