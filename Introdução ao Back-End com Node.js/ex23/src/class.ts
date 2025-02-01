export class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(message: string) {
    console.log(message);
  }

  sayMyName() {
    console.log(`me chamo ${this.name}`);
  }
}

export class Student extends Person {
  module: string;

  constructor(name: string, module: string) {
    super(name); // ele é utilizado pra enviar pra elemento pai nesse caso o Person
    this.module = module;
  }

  sayMyModule() {
    console.log(` Estou matriculado no modulo: ${this.module}`);
  }
}

//polimorfismo
export class Teacher extends Person {
  sayMyName(): void {
    console.log(`Sou o professor ${this.name}`);
  }
}
