// const apple = () =>
//   new Promise((res, rej) => {
//     res("사과");
//   });

// apple().then((v) => console.log(`충주 ${v}`));

const iphone = (color, version) =>
  new Promise((res, rej) => {
    res(`${color}색상, ${version} 아이폰`);
  });

iphone("스페이스 그레이", "17").then((v) => console.log(v));
