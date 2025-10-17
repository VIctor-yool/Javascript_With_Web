// character 클래스 작성하기
// 필드: name, emoji, hp
// 메소드:
// - attack 함수: {emoji} {name}이(가) 공격했다 출력하기
// - status 함수: 남은 hp 출력하기

// Hero 클래스 작성하기 [Unit을 상속받기]
// 필드: skills
// 메소드: activate 함수: skill이 발동했다

// Monster 클래스 작성하기 [Unit을 상속받기]
// 필드: level

class unit {
  #name;
  #emoji;
  #hp;
  constructor(name, emoji, hp) {
    this.#name = name;
    this.#emoji = emoji;
    this.#hp = hp;
  }
  attack() {
    console.log(`${this.#emoji} ${this.#name}이(가) 공격했다`);
  }
  status() {
    console.log(`남은 hp ${hp}`);
  }
}

class Hero extends unit {
  #skills;
  constructor(name, emoji, hp, skills) {
    super(name, emoji, hp);
    this.#skills = skills;
  }
  activate() {
    console.log(`${this.#skills}이 발동됐다.`);
  }
}

class Monster extends unit {
  #level;
  constructor(name, emoji, hp, level) {
    super(name, emoji, hp);
    this.#level = level;
  }
}
