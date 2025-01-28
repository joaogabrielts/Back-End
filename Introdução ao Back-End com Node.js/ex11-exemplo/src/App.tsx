function App() {
  return (
    <div>
      <ol>
        <li>
          <h1> Introdução</h1>
          <p>
            Em TypeScript, podemos adicionar notações de tipos para especificar
            explicitamente o tipo de dados que uma variável deve armazenar ou
            que uma função deve receber e retornar. Nesta aula, aprenderemos
            como utilizar notações de tipos para tornar nosso código mais claro
            e seg
          </p>
        </li>
        <li>
          <h1> Notações de Tipos em Variáveis</h1>
          <p>
            Ao declarar uma variável, podemos adicionar uma notação de tipo para
            especificar o tipo de dado que a variável deve conter. Isso ajuda a
            evitar erros de tipo e permite que o TypeScript faça a verificação
            estática do código.
          </p>
          <div>
            <h3>2.1 Exemplo de Notação de Tipo em Variáveis</h3>
            <p>exemplo comentado no codigo </p>
          </div>
        </li>
        <li>
          <h3> Notações de Tipos em Funções</h3>
          <p>
            As notações de tipos também são usadas em funções para especificar o
            tipo dos parâmetros que a função recebe e o tipo do valor que ela
            retorna.
          </p>
          <div>
            <h2>3.1 Exemplo de Notação de Tipo em Funções</h2>
            <p>exemplo comentado no codigo </p>
          </div>
        </li>
        <li>
          <h1> Tipo</h1>
          <p>Quando uma função não retorna um valor, podemos utilizar o tipo void na notação de tipo para indicar que ela não tem um valor de retorno.</p>
          <div>
            <h2>4.1 Exemplo de Função com Tipo void</h2>
          </div>
        </li>
      </ol>
    </div>
  );
}
/*
exemplo 2.1 
// Notação de tipo para uma variável
let age: number;
age = 25; // OK

// Tentativa de atribuir valor de tipo diferente resultará em erro
age = "vinte e cinco"; // Erro de tipo: Type '"vinte e cinco"' is not assignable to type 'number'
------------------------------------------------------------------------------------------------
exemplo 3.1
// Função que recebe dois números e retorna a soma
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// Uso da função com notações de tipo
const result: number = addNumbers(5, 10); // result = 15

// Tentativa de chamar a função com parâmetros de tipo errado resultará em erro
const invalidResult: number = addNumbers(5, "10"); // Erro de tipo: Argument of type '"10"' is not assignable to parameter of type 'number'

----------------------------------------------------------------------------------------------------------------------------------------------

4.1 exemplo
// Função que apenas imprime uma mensagem no console, sem retorno
const showMessage = (message: string): void => console.log(message);

// Uso da função sem esperar retorno
showMessage("Olá, TypeScript!"); // Imprime "Olá, TypeScript!"
 */

export default App;
