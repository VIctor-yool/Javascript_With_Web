const a = new Promise((res, rej) => {
  const num = +prompt("숫자 입력");
  if (num >= 0) res("약과");
  else rej("초콜렛");
});

a.then((v) => console.log(`${v} 꿀맛 !`)).catch((v) =>
  console.log(`${v} 노맛!`)
);
