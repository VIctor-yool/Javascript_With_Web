// class 대학생
// 학번, 이름, 전공, 듣는 수업

class unistudent {
  #num;
  #name;
  #major;
  #courses;

  constructor(num, name, major) {
    this.#num = num;
    this.#name = name;
    this.#major = major;
    this.#courses = [];
  }

  register(courses) {
    this.#courses.push(courses);
  }
}

class Course {
  name;
  professor;
  time;
  constructor(name, professor, time) {
    this.name = name;
    this.professor = professor;
    this.time = time;
  }
}

const a = new student(1, "전정우", "간호학과");
a.register(new course("간호학개론", "신여진", 2));
