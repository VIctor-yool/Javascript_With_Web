const makeDough = () =>
  new Promise((resolve, reject) => {
    //도우 입력: 씬, 오리지널, 바이트
    const pickedDough = prompt("도우를 입력하세요. ex) 씬, 오리지널, 바이트");
    resolve(`${pickedDough}으로 만들기`);
  });

const makeTopping = () =>
  new Promise((resolve, reject) => {
    //토핑 입력: 페퍼로니, 불고기, 포테이토
    const pickedTopping = prompt(
      "토핑를 입력하세요. ex) 페퍼로니, 불고기, 포테이토"
    );
    resolve(`${pickedTopping} 넣기`);
  });

const makeCheese = () =>
  new Promise((resolve, reject) => {
    //치즈 입력: 모짜렐라, 체다, 슈레드
    const pickedCheese = prompt(
      "치즈를 입력하세요. ex) 모짜렐라, 체다, 슈레드"
    );
    resolve(`${pickedCheese} 뿌리기`);
  });

const makeBaked = () =>
  new Promise((resolve, reject) => {
    resolve("빵 굽기");
  });

const makePizza = () =>
  new Promise((resolve, reject) => {
    resolve("피자 완성 !");
  });

makeDough().then((v) => {
  console.log(v);
  return makeTopping;
});

makeTopping().then((v) => {
  console.log(v);
  return makeCheese;
});

makeCheese().then((v) => {
  console.log(v);
  return makeBaked;
});

makeBaked().then((v) => {
  console.log(v);
  return makePizza;
});
