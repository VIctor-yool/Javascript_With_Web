// const newSection = document.createElement("section");
// newSection.style.display = "flex";
// newSection.style.flexDirection = "row";
// document.body.appendChild(newSection);

// const btnp = document.createElement("button");
// btnp.innerText = "+";
// btnp.style.cssText =
//   "background-color:white; padding:4px; border-radius:4px; border:1px solid #efefef";
// newSection.appendChild(btnp);

// const newP = document.createElement("p");
// newP.innerText = 0;
// newSection.appendChild(newP);

// const btnm = document.createElement("button");
// btnm.innerText = "-";
// btnm.style.cssText =
//   "background-color:white; padding:4px; border-radius:4px; border:1px solid #efefef";
// newSection.appendChild(btnm);

// btnp.addEventListener("click", () => {
//   btnp.innerText = +newp.innerText + 1;
// });

// btnm.addEventListener("click", () => {
//   btnm.innerText = +newm.innerText - 1;
// });

// btn.addEventListener("click", () => {
//   btn.innerText = "사이다";
// });

const plus = document.createElement("button");
plus.innerText = "+";
plus.addEventListener("click", () => {
  num.innerText = +num.innerText + 1;
  num.style.color = +num.innerText > 10 ? "blue" : "black";
});
document.body.appendChild(plus);
const num = document.createElement("p");
num.innerText = "0";
document.body.appendChild(num);

const minus = document.createElement("button");
minus.innerText = "-";
minus.addEventListener("click", () => {
  num.innerText = +num.innerText == 0 ? 0 : +num.innerText - 1;
  num.style.color = +num.innerText > 10 ? "blue" : "black";
});
document.body.appendChild(minus);
