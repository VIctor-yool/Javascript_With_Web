class car {
  #name;
  #speed;

  constructor(name) {
    this.#name = name;
    this.#speed = 0;
  }
  speedUp(x) {
    this.#speed = this.speed + x;
  }
  speedDown(x) {
    if (this.#speed - x < 0) {
      this.#speed = 0;
    } else {
      this.#speed = this.#speed - x;
    }
  }
}

const myCar = new car("페라리");
myCar.speedUp(30);
console.log(myCar);
