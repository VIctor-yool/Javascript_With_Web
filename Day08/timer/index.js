const timer = document.querySelector("#timer");
const fire = document.querySelector("#fire");

fire.addEventListener("click", () => {
  let time = 4;
  let interval = setInterval(() => {
    timer.innerHTML = `🐥 ${time}초전`;
    time = time - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    timer.innerHTML = `☀`;
  }, 5000);
});

// const change = document.querySelector("#change");
// const decrease = [5, 4, 3, 2, 1];

// const a = () => {
//   new Promise((resolve) => {
//     fire.addEventListener("click", () => {
//       timer.innerHTML = decrease[0] + "초전";
//       resolve();
//     });
//   });
// };
// const b = () => {
//   new Promise((resolve) => {
//     timer.innerHTML = decrease[0] + "초전";
//     resolve();
//   });
// };

// const c = () => {
//   new Promise((resolve) => {
//     fire.addEventListener("click", () => {
//       timer.innerHTML = decrease[0] + timer();
//       resolve();
//     });
//   });
// };
// const d = () => {
//   new Promise((resolve) => {
//     fire.addEventListener("click", () => {
//       timer.innerHTML = decrease[0] + timer();
//       resolve();
//     });
//   });
// };
// const e = () => {
//   new Promise((resolve) => {
//     fire.addEventListener("click", () => {
//       timer.innerHTML = decrease[0] + timer();
//       resolve();
//     });
//   });
// };

// a()
//   .then(() => b())
//   .then(() => c())
//   .then(() => d())
//   .then(() => e());
