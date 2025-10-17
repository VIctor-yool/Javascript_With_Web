// 축구선수 클래스
// 이름, 포지션, 나이, 연봉 + 포지션 바꾸기 함수

// 축구팀 클래스
// 이름, 선수들, 감독, 선수 등록하기/ 선수 삭제하기 함수

class Players {
  name;
  position;
  age;
  salary;

  constructor(name, age, position, salary) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.salary = salary;
  }
  changePosition(newPosition) {
    this.position = newPosition;
  }
}

class Team {
  name;
  player;
  director;

  constructor(name, director) {
    this.name = name;
    this.player = [];
    this.director = director;
  }
  listplayer() {
    console.log(this.player);
  }

  addPlayer(newPlayer) {
    this.player.push(newPlayer);
  }
  removePlayer(name) {
    this.player = this.player.filter((v) => v.name != name);
  }
}

const a = new Team("fcsomething", "신율맨");
a.addPlayer(new Players("신여진", 25, "미드필더", 3000));
a.addPlayer(new Players("신여진", 25, "미드필더", 3000));
a.addPlayer(new Players("신여진", 25, "미드필더", 3000));
a.addPlayer(new Players("신여진", 25, "미드필더", 3000));
a.addPlayer(new Players("신여진", 25, "미드필더", 3000));

console.log(a);
