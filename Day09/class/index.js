// const a1 = {
//   name: "아메리카노",
//   price: 4800,
//   shots: 2,
//   size: "tall",
// };
// const a2 = {
//   name: "아메리카노",
//   pirce: 5300,
//   shots: 3,
//   size: "grande",
// };

// const a3 = {
//   name: "아이스라떼",
//   price: 6600,
//   shots: 4,
//   size: "grande",
// };

// class Coffee {
//   name;
//   price;
//   shots;
//   size;

//   constructor(name, price, shots, size) {
//     this.name = name;
//     this.price = price;
//     this.shots = shots;
//     this.size = size;
//   }
// }

// 클래스는 오브젝트를 만들어주는 문법 with 함수까지

// class 설계하기

// 축구팀 클래스 만들기
// 팀 명, 팀 인원수 , 팀 감독, 팀 창설연도

class SoccerTeam {
  Name;
  HeadCount;
  director;
  est;

  constructor(name, [], director, est) {
    this.name = name;
    this.players = [];
    this.director = director;
    this.est = est;
  }
  registerPlayer(name, number) {
    this.players.push({ name, number });
  }
}

const paris = new SoccerTeam("paris saint germain", "luise", 1970);
paris.registerPlayer("신율", 7);
paris.registerPlayer("유나", 5);
paris.registerPlayer("여진", 6);
paris.registerPlayer("영철", 11);
console.log(paris);
