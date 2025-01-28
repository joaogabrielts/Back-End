class Student {
  name: string;
  module: string;
  grade: number | null = null;

  constructor(name: string, module: string) {
    this.name = name;
    this.module = module;
  }

  sayHello() {
    console.log(`me chamo ${this.name} e estou no module ${this.module}`);
  }

  setGrade(grade: number){
    this.grade = grade;
  }

  getGrade(){
    console.log(`minha nota é ${this.grade}`);
    
  }
}

const student = new Student("Osvaldo", "M4");

student.sayHello()

student.setGrade(10)

student.getGrade()