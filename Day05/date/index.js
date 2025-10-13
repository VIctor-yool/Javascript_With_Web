const a = new Date();

const time = document.querySelector("#time");
time.innerHTML = `현재시간 : ${a.getHours()}시 ${a.getMinutes()}분 ${a.getSeconds()}초`;

const btn = document.querySelector("#btn");
btn.innerText = "시간 갱신";
btn.addEventListener("click", () => {
  const a = new Date();
  time.innerHTML = `현재시간 : ${a.getHours()}시 ${a.getMinutes()}분 ${a.getSeconds()}초`;
});

// mini quiz
// 브라우저 화면에
// 현재 시간: ~~시 ~~분 ~~초
// 나오도록 하기
