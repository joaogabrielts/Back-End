function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, estaremos escrevendo nosso primeiro teste automático com
            Jest, conhecendo os recursos essenciais da biblioteca.
          </p>
        </li>
        <li>
          <h1>O que iremos testar?</h1>
          <p>
            Para escrevermos nosso primeiro teste automático, vamos criar uma
            função simples de Typescript, executando uma soma entre números.
            Confira o código abaixo:
          </p>
        </li>
        <li>
          <h1>Diretório de testes</h1>
          <p>
            Criaremos nosso diretório de teste levando em conta a configuração
            de testMatch estabelecida na aula anterior.
          </p>
          <h3>Configuração</h3>
          <p>
            testMatch: ["**/__tests__/(units|integrations)/**/*.[jt]s?(x)"],
          </p>
          <p>
            Criaremos em "src", uma pasta __tests__, e poderemos dividir os
            nossos testes em duas pastas diferentes, "units" e "integrations".
          </p>
          <div>
            <h2>Testes unitários</h2>
            <p>
              Os testes unitários são uma forma de teste automatizado na
              programação que se concentra na verificação individual de unidades
              isoladas de código. Uma unidade, nesse contexto, é a menor parte
              testável de um programa, geralmente uma função, método ou
              procedimento. O objetivo dos testes unitários é garantir que cada
              parte do código funcione conforme o esperado de forma
              independente.
            </p>
          </div>
          <div>
            <h2>Testes de integração</h2>
            <p>
              Os testes de integração são uma categoria de testes automatizados
              que se concentram na verificação da interação e integração entre
              diferentes módulos ou componentes de um sistema. O objetivo é
              garantir que as partes do software funcionem corretamente em
              conjunto como um sistema integrado. Enquanto os testes unitários
              visam validar unidades individuais de código, os testes de
              integração buscam identificar falhas que podem surgir quando essas
              unidades são combinadas.
            </p>
          </div>
        </li>
        <li>
          <h1> Primeiro teste</h1>
          <p>Exploraremos melhor os tipos de teste no decorrer das aulas, neste momento, estaremos criando nosso primeiro teste que está classificado como um teste unitário, e, por isso, foi criado no interior da pasta "units".</p>
          <h3>sum.test.ts</h3>
          <p>
          Neste teste, onde testamos o resultado emitido pela função de soma, estão presentes as três estruturas principais de um teste automático.
          </p>
          <p>describe - encapsula um conjunto de testes e carrega uma descrição.
          </p>
          <p>test - se refere a uma unidade de teste automático, recebe dois parâmetros, a descrição do teste específico e a lógica do teste.
          </p>
          <p>
          expect - define expectativas de funcionamento para o que está sendo testado. Um teste poderá conter múltiplas expectativas.

          </p>
        </li>
      </ol>
    </div>
  );
}

export default App;
