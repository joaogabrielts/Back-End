class Person {
  name: string ;

  constructor(name:string){
   this.name = name;
  }

  sayHello(message: string) {
    console.log(message);
  }

  sayMyName(){
    console.log(`me chamo ${this.name}`);
    
  }
}
const person1 = new Person("Gabriel");
console.log(person1.name);
person1.sayHello("olá pessoal, me chamo gabriel");
person1.sayMyName()
console.log("-----------------------------------------------------------");


const person2 = new Person("davi")
person2.sayHello("olá gente!");
person2.sayMyName()