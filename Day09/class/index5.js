class Student {}

class Student {
  #id;
  #name;
  #major;
  #course;

  constructor(id, name, grade, classroom) {
    this.#id = id;
    this.#name = name;
    this.#grade = grade;
    this.classroom = classroom;
  }
  register(course) {
    this.#classroom = course;
  }
}

class HighSchoolStudent {
  #id;
  #name;
  #grade;
  #classroom;

  constructor(id, name, grade, classroom) {
    this.#id = id;
    this.#name = name;
    this.#grade = grade;
    this.classroom = classroom;
  }
  register(course) {
    this.#classroom = course;
  }
}

class colleger extends Student {
  #major;
  #courses;
  constructor(id, name, major) {
    super(id, name);
    this.#major = majorthis.#courses = [];
  }
  register(course) {
    this.#courses.push(course);
  }
}
class HighSchoolStudent extends Student {
  #grade;
  #classroom;
  constructor(id, name, grade, classroom) {
    super(id, name); // 부모의 생성자까지 넣을게
    this.#grade = grade;
    this.#classroom = classroom;
  }
}
