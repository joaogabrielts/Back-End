function App() {
  return (
    <div>
      <ol>
        <li>
          <h1> Introdução</h1>
          <p>
            Nesta aula, vamos aprofundar o conhecimento sobre interfaces e
            aprender como implementá-las em classes do TypeScript. A
            implementação de interfaces em classes permite garantir que as
            classes sigam um determinado contrato definido pela interface, ou
            seja, que todas as propriedades e métodos especificados na interface
            estejam presentes na classe.
          </p>
        </li>
        <li>
          <h1>Implementação de Interfaces em Classes</h1>
          <p>
            Para implementar uma interface em uma classe, utilizamos a
            palavra-chave implements seguida pelo nome da interface. A classe
            deve conter todas as propriedades e métodos definidos na interface.
          </p>
          <span>exemplo esta comitado no codigo</span>
          <div>
            <h1>2.1 Verificação de Implementação</h1>
            <p>
              Ao implementar uma interface em uma classe, o TypeScript realiza
              uma verificação para garantir que a classe contenha todos os
              membros exigidos pela interface. Se algum membro estiver faltando
              ou não estiver corretamente implementado, o TypeScript emitirá um
              erro.
            </p>
            <span>exemplo esta comitado no codigo</span>
          </div>
          <div>
            <h1>2.2 Implementação de Múltiplas Interfaces</h1>
            <p>
              Uma classe pode implementar várias interfaces. Para fazer isso,
              basta separar os nomes das interfaces com vírgulas.
            </p>
            <span>exemplo esta comitado no codigo</span>
          </div>
          <div>
            <h1>2.3 Herança e Implementação de Interfaces</h1>
            <p>
              Uma classe pode herdar de uma superclasse e, ao mesmo tempo,
              implementar interfaces. Nesse caso, primeiro usamos a
              palavra-chave extends para indicar a superclasse e, em seguida, a
              palavra-chave implements para as interfaces.
            </p>
            <span>exemplo esta comitado no codigo</span>
          </div>
          <div>
            <h1>2.4 Utilizando Polimorfismo com Interfaces</h1>
            <p>
              Interfaces também podem ser usadas para alcançar polimorfismo,
              onde objetos de diferentes classes podem ser tratados de forma
              uniforme, desde que implementem a mesma interface.
            </p>
            <span>exemplo esta comitado no codigo</span>
          </div>
        </li>
      </ol>
    </div>
  );
}
/*
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Au au!");
  }
}
  ------------------------------------------------------------------------------------------------------------

  interface Person {
  name: string;
  age: number;
}

class Client implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  // Error! The Client class did not implement the "age" property defined in the Person interface.
}
 ---------------------------------------------------------------------------------------------------------------------

 interface Animal {
  emitSound(): void;
}

interface LivingBeing {
  breathe(): void;
}

class Dog implements Animal, LivingBeing {
  emitSound(): void {
    console.log("Au au!");
  }

  breathe(): void {
    console.log("Respirando...");
  }
}

------------------------------------------------------------------------------------------------------------------------------

class Animal {
  name: string;
  makeSound(): void {
    console.log("Barulho genérico.");
  }
}

interface Flyable {
  fly(): void;
}

class Bird extends Animal implements Flyable {
  fly(): void {
    console.log("Voando...");
  }
}

-----------------------------------------------------------------------------------------------------------------------------------

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}
*/

export default App;
