const krTime = document.querySelector("#krtime");
setInterval(() => {
  const now = new Date().toLocaleTimeString();
  krTime.innerHTML = now;
}, 1000);

const cities = document.querySelectorAll("#city button");
const imgs = document.querySelectorAll("#picContainer img");

const a = [
  { name: cities[0], background: imgs[0], time: "bupyeong / korea" },
  { name: cities[1], background: imgs[1], time: "bern / switzerland" },
  { name: cities[2], background: imgs[2], time: "wellington / newzealand" },
  { name: cities[3], background: imgs[3], time: "toshkent / uzbekistan" },
  { name: cities[4], background: imgs[4], time: "tokyo / japan" },
  { name: cities[5], background: imgs[5], time: "oslo / norway" },
  { name: cities[6], background: imgs[6], time: "london / england" },
];
