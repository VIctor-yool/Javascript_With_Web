// const menuLondon = document.querySelector("#menu__london");
// const menuParis = document.querySelector("#menu__paris");
// const menuTokyo = document.querySelector("#menu__tokyo");

// menuLondon.addEventListener("click", () => {
//   summaryLondon.classList.add("is-open");
//   summaryParis.classList.add("is-hidden");
// });

// const capital = document.querySelector("#capital")
// const desc = document.querySelector("#desc")

// const changetext = (capital, nation) ={
//   capital.innerText = capital
//   desc.innertext = `${capital} is the capital city of ${nation}`
// }

const capitalList = document.querySelector("#capitallist");
const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");

const data = [
  { nation: "England", capital: "London" },
  { nation: "NewZealand", capital: "Wellington" },
];

data.foreach((v) => {
  const newLi = document.createElement("li");
  newLi.innerText = v.capital;
  newLi.id = v.capital;
  newLi.addEventListener("click", () => {
    capital.innerText = v.capital;
    desc.innerText = `${v.capital} is the capital city of ${nation}`;
  });
  capitalList.appendChild(newLi);
});
