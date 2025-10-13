const input = document.querySelector("#input");
const goBtn = document.querySelector("#goBtn");
const resetBtn = document.querySelector("#resetBtn");
const guide = document.querySelector("#guide");
const chance = document.querySelector("#chance");

const answer = Math.floor(Math.random() * 100) + 1;

goBtn.addEventListener("click", () => {
  const { value } = input;
  if (answer > value) {
    guide.innerText = "up!";
    chance.innerText = +chance.innerText - 1;
    if (+chance.innerText == 0) {
      goBtn.disabled = true;
      input.disabled = true;
      chance.innerText = "게임 끝";
    }
  } else if (answer < value) {
    guide.innerText = "down";
    chance.innerText = +chance.innerText - 1;
    if (+chance.innerText == 0) {
      goBtn.disabled = true;
      input.disabled = true;
      chance.innerText = "게임 끝";
    }
  } else {
    guide.innerText = "정답입니다.";
    goBtn.disabled = true;
  }
});

// 코드 줄임 버전

// const gameoverView = (isClear) => {
//   goBtn.disabled = true;
//   input.disabled = true;
//   guide.innerText = isClear ? "정답입니다." : "게임 끝";
// };

// goBtn.addEventListener("click", () => {
//   const { value } = input;
//   chance.innerText = +chance.innerText - 1;
//   const gameover = +chance.innerText == 0;
//   if (answer != vlaue) {
//     guide.innerText = answer > value ? "up" : "down";
//     gameover && gameoverView(false);
//   } else {
//     gameoverView(ture);
//   }
// });

// const number = function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// container.foreach((v, i) => {
//   if (input.innerHTML > number) {
//     v.
//   }
// });

// input.addEventListener("input", () => {
//   if (input.innerHTML > number) {
//   }
// });
