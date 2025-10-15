<<<<<<< HEAD
const input = document.querySelector("#input");

input.addEventListener("input", () => {
  const hascat = input.value.match(/\bcat\b/);
  const result = hascat ? "고양이 포함!" : "고양이 없음!";
  console.log(result);
});
=======
const input = document.querySelector("#input");

input.addEventListener("input", () => {
  const hascat = input.value.match(/\bcat\b/);
  const result = hascat ? "고양이 포함!" : "고양이 없음!";
  console.log(result);
});
>>>>>>> 958b3a85145d735581aedea7a6ac4bfb65245264
