const save = document.querySelector("#save");
const load = document.querySelector("#load");
const input = document.querySelector("#input");

save.addEventListener("click", () => {
  if (localStorage.getItem("사탕리스트")) {
    const list = localStorage.getItem("사탕리스트");
    localStorage.setItem("사탕리스트", list + "," + input.value);
    input.value = "";
  } else {
    localStorage.setItem("사탕리스트", input.value);
    input.value = "";
  }
});

load.addEventListener("click", () => {
  const list = localStorage.getItem("사탕리스트");
  console.log(list);
});
