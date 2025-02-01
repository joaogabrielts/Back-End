function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Além de criar tipos personalizados usando interfaces em TypeScript,
            podemos utilizar a palavra reservada type para criar tipos
            personalizados. Nesta aula, aprenderemos sobre type e como usá-lo
            para definir tipos complexos e compostos.
          </p>
        </li>
        <li>
          <h1>O que é type em TypeScript?</h1>
          <p>
            A palavra reservada type é usada para criar um tipo personalizado
            que pode ser composto de outros tipos existentes em TypeScript. Isso
            nos permite criar tipos mais complexos e expressivos sem a
            necessidade de criar uma interface.
          </p>
        </li>
        <li>
          <h1>Criando um Tipo com type</h1>
          <p>
            Para criar um tipo com type, usamos a palavra reservada type seguida
            do nome do tipo e a definição do mesmo. Podemos usar type para
            definir tipos primitivos, tipos de objetos, tipos de união, tipos
            literais, entre outros.
          </p>
          <div>
            <h1>3.1 Exemplo de Tipo com type</h1>
          </div>
        </li>
        <li>
          <h1>Utilizando Tipos com type</h1>
          <p>
            Assim como as interfaces, os tipos criados com type podem ser usados
            para definir variáveis, parâmetros de função e até mesmo outros
            tipos
          </p>
          <div>
            <h1>4.1 Exemplo de Utilização de Tipos com type</h1>
          </div>
        </li>
        <li>
          <h1>Interfaces vs type</h1>
          <p>
            Ambas as interfaces e type podem ser usadas para criar tipos
            personalizados em TypeScript. A escolha entre uma interface e type
            depende das necessidades do projeto e do estilo de codificação
            preferido.
          </p>
          <div>
            <h2>Dica</h2>
            <p>
              Use interfaces quando precisar definir a estrutura de um objeto ou
              classe, ou quando quiser estender outras interfaces. Use type
              quando quiser criar tipos de união, tipos literais, tipos
              primitivos ou tipos complexos e compostos.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}
/*
// Definição de um tipo primitivo
type Age = number;

// Definição de um tipo de objeto
type Person = {
  name: string;
  age: Age;
};

// Definição de um tipo de união
type Result = number | string;

// Definição de um tipo literal
type Status = "pending" | "completed";


---------------------------------------------------------------------------------------------------------


type Age = number;

const age: Age = 30;

type Person = {
  name: string;
  age: Age;
};

const person: Person = {
  name: "Alice",
  age: 30,
};

type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;

type Status = "pending" | "completed";

const updateStatus = (status: Status) => {
  // implementação da função
}
*/

export default App;
