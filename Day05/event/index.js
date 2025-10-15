const input = document.querySelector("#input");
const count = document.querySelector("#span");

input.addEventListener("input", (e) => {
  count.innerHTML = `${e.target.value.length}/6`;
});
