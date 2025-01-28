//POO
//class - encapsula


class Person {
  name: string = "Gabriel";

  sayHello(message: string) {
    console.log(message);
  }
}

const person = new Person()
console.log(person.name);
person.sayHello(`olá, Boa noite, me chamo ${person.name} `)