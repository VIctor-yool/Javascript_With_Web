// 자바스크립트로 버튼 만들기
// 기본: 5개
// 참조: obj, func, arr + Document[html], Element[tag]

const btn = document.createElement("button");
btn.innerText = "월요일 ㅅㄱ";
document.body.appendChild(btn);
btn.style.color = "#ef1234";

const tomorrow = document.createElement("div");
tomorrow.innerText = "내일은 화요일이다";
document.body.appendChild(tomorrow);

// div태그로 내일은 화요일이다!

const shopping = document.createElement("a");
shopping.innerText = " 쿠팡 이동";
shopping.href = "https://www.coupang.com/";
document.body.appendChild(shopping);
