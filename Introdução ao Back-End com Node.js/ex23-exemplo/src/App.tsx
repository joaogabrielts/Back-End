function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, exploraremos um dos conceitos mais poderosos da
            Programação Orientada a Objetos (POO): o Polimorfismo. O
            Polimorfismo é a capacidade de um objeto se comportar de diferentes
            maneiras, permitindo que métodos com o mesmo nome tenham
            implementações diferentes em classes distintas. Essa flexibilidade é
            fundamental para criar códigos mais genéricos e reutilizáveis.
          </p>
        </li>
        <li>
          <h1>O que é?</h1>
          <p>
            O Polimorfismo é um conceito central da POO que nos permite tratar
            objetos de diferentes classes de maneira uniforme, como se fossem
            objetos da mesma classe. Isso significa que podemos chamar métodos
            com o mesmo nome em objetos de classes diferentes, e cada objeto
            executará sua própria implementação específica do método.
          </p>
          <div>
            <h1>1 Polimorfismo de Sobrescrita</h1>
            <p>
              Um tipo de polimorfismo ocorre quando uma subclasse fornece uma
              implementação específica para um método que já está presente na
              superclasse. Isso possibilita que o mesmo método seja chamado, mas
              com comportamentos diferentes, dependendo do objeto em questão.
              Veja o exemplo abaixo:
            </p>
            <span>Exemplo no codigo </span>
          </div>
          <div>
            <h1>2.2 Polimorfismo de Sobrecarga</h1>
            <p>
              Outro tipo de polimorfismo ocorre quando uma classe possui vários
              métodos com o mesmo nome, mas com diferentes tipos ou números de
              parâmetros. Isso é chamado de sobrecarga de métodos e permite que
              a classe responda a diferentes tipos de chamadas para o mesmo
              método. É importante observar que, no TypeScript, novos parâmetros
              devem ser fornecidos apenas pelo método construtor.
            </p>
          </div>
          <div>
            <h1>3 Vantagens do Polimorfismo</h1>
            <ul>
              <li>
                <p>
                  Flexibilidade: O polimorfismo nos permite escrever códigos
                  mais genéricos e flexíveis, pois podemos tratar objetos de
                  diferentes classes como se fossem objetos da mesma classe.
                </p>
              </li>
              <li>
                <p>
                  Reutilização de Código: Com a sobrescrita de métodos, podemos
                  reutilizar códigos em diferentes classes, o que promove a
                  economia de tempo e a redução de duplicação de código.
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  );
}
/*
export class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    saySomething(message: string){
        console.log(message);
    }

    sayMyName(){
        console.log(`Me chamo ${this.name}`);
    }
}

// Polimorfismo

export class Teacher extends Person {
    sayMyName(): void {
        console.log(`Sou o professor ${this.name}`);
    }
}
*/

export default App;
