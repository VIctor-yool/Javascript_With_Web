// const a = /\d/; // 숫자도 포함
// const b = /^\d$/; // 숫자 하나만
// const c = /^\d+$/; // 숫자만

// const d = /^[a-zA-Z]+$/; // 영문만
// const e = /^[a-zA-Z0-9]+$/; // 영어 숫자만

// // input 태그 만들어서 휴대폰 정규검사 만들기
// // 콘솔로 핸드폰 번호 아님 맞으면 맞음

// const f = /^01[016789]-\d{4}-\d{4}$/; //휴대폰번호

const number = document.querySelector("#number");

// phonenumber.addEventListener("input", () => {
//   const phoneNumber = phonenumber.value.match(/^01[016789]-\d{4}-\d{4}$/)
//     ? "맞음"
//     : "핸드폰 번호 아님";
//   console.log(phoneNumber);
// });

// phonenumber.addEventListener("input", () => {
//   const { value } = phonenumber;
//   console.log(phoneNumber);
// });

// const a = /^[0-9][0-9][0-1][0-9][0-3][0-9]$/;
const a = /^\d{2}(0[9-1]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
number.addEventListener("input", () => {
  const { value } = number;
  console.log(a.test(value));
});
