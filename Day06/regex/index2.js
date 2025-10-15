<<<<<<< HEAD
const textarea = document.querySelector("#textarea");
const input = document.querySelector("#input");
const included = document.querySelector("#included");
const wordlength = document.querySelector("#wordLength");

// input.addEventListener("input", (e) => {
//   included.innerHTML =
//     input.value.match(`${input.value}gi`) ==
//     textarea.value.match(`${input.value}gi`)
//       ? "있음!"
//       : "없음!";
//   wordlength.innerHTML = `${e.target.value.length}`;
// });

input.addEventListener("input", () => {
  const valueRegex = new RegExp(`\\b${input.value}\\b`, "gi");
  included.innerHTML = valueRegex.test(textarea.value) ? "있음!" : "없음!";
  wordlength.innerHTML = `${textarea.value.match(valueRegex).length}개`;
});
=======
const textarea = document.querySelector("#textarea");
const input = document.querySelector("#input");
const included = document.querySelector("#included");
const wordlength = document.querySelector("#wordLength");

// input.addEventListener("input", (e) => {
//   included.innerHTML =
//     input.value.match(`${input.value}gi`) ==
//     textarea.value.match(`${input.value}gi`)
//       ? "있음!"
//       : "없음!";
//   wordlength.innerHTML = `${e.target.value.length}`;
// });

input.addEventListener("input", () => {
  const valueRegex = new RegExp(`\\b${input.value}\\b`, "gi");
  included.innerHTML = valueRegex.test(textarea.value) ? "있음!" : "없음!";
  wordlength.innerHTML = `${textarea.value.match(valueRegex).length}개`;
});
>>>>>>> 958b3a85145d735581aedea7a6ac4bfb65245264
