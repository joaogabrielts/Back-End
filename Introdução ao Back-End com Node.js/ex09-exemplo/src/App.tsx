function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Em TypeScript, assim como em outras linguagens de programação,
            trabalhamos com diferentes tipos de dados. Nesta aula, exploraremos
            os tipos básicos disponíveis no TypeScript e aprenderemos como
            declarar e utilizar variáveis com esses tipos.
          </p>
        </li>
        <li>
          <h1>Tipos Básicos em TypeScript</h1>
          <p>
            O TypeScript oferece alguns tipos básicos para representar
            diferentes tipos de dados em nossos programas. Vamos examinar os
            principais tipos disponíveis:
          </p>

          <div>
            <h2>2.1 number</h2>
            <p>
              O tipo number é usado para representar valores numéricos, sejam
              eles inteiros ou decimais (ponto flutuante). Podemos declarar uma
              variável com o tipo number da seguinte forma:
            </p>
            <div>
              <p>const age: number = 25;</p>
              <p>const price: number = 2.54;</p>
            </div>
          </div>
          <div>
            <h2>2.2 string</h2>
            <p>
              O tipo string é usado para representar sequências de caracteres,
              como texto. Podemos declarar uma variável com o tipo string da
              seguinte forma:
            </p>
            <p>const name: string = "João";</p>
          </div>
          <div>
            <h2>2.3 boolean</h2>
            <p>
              O tipo boolean é usado para representar valores verdadeiros ou
              falsos. Podemos declarar uma variável com o tipo boolean da
              seguinte forma:
            </p>
            <p>const isStudent: boolean = true;</p>
          </div>
          <div>
            <h2>2.4 Array</h2>
            <p>
              O tipo array é usado para representar uma coleção de valores do
              mesmo tipo. Podemos declarar um array das seguintes formas:
            </p>
            <h3># Utilizando o []</h3>
            <p>const numbers: number[] = [1, 2, 3, 4, 5];</p>
            <p>const strings: string[] = ["M1","M2","M3","M4","M5"];</p>

            <h2># Utilizando o Array</h2>
            <p>Exemplo esta comentado no codigo </p>
          </div>
          <div>
            <h2>2.5 any</h2>
            <p>
              O tipo any é usado quando não temos certeza sobre o tipo de uma
              variável ou quando queremos permitir qualquer tipo de valor.
              Embora o uso de any possa ser útil em algumas situações, é
              importante usá-lo com cuidado, pois ele remove a verificação de
              tipo estática do TypeScript.
            </p>
            <p>let dynamicValue: any;</p>
            <p>dynamicValue = 42; // number</p>
            <p>dynamicValue = "hello"; // string</p>
            <p>dynamicValue = true; // boolean</p>
          </div>
        </li>
        <li>
          <h1>Inferência de Tipos</h1>
          <p>O TypeScript também possui a capacidade de inferir ou assumir qual seria o tipo de uma variável com base no valor atribuído a ela. Por exemplo:</p>
          <p>let age = 25; // TypeScript infere que age é do tipo number</p>
          <p>let name = "João"; // TypeScript infere que name é do tipo string</p>
          <p>let isStudent = true; // TypeScript infere que isStudent é do tipo boolean</p>
       
        </li>
        <li>
          <h1>Conclusão</h1>
          <p>Nesta aula, aprendemos sobre os tipos básicos em TypeScript, como number, string, boolean, array e any. Agora, podemos utilizar esses tipos para declarar variáveis e especificar o tipo de dados que elas podem armazenar.</p>
        </li>
      </ol>
    </div>
  );
}
//    Utilizando o Array<>
//const numbers: Array<number> = [1, 2, 3, 4, 5];
//const strings: Array<string> = ["M1","M2","M3","M4","M5"];
export default App;
