function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos aprofundar nosso entendimento sobre como definir
            rotas com o Express. Para isso, criaremos um conjunto completo de
            rotas para todos os verbos HTTP.
          </p>
        </li>
        <li>
          <h1>Métodos de criação de rotas</h1>
          <p>
            Para criar rotas com o Express, como mencionado em aulas anteriores,
            temos um método disponibilizado pela instância do Express para cada
            verbo HTTP:
          </p>
          <ul>
            <li>app.get - para rotas de leitura (verbo HTTP GET)</li>
            <li>
              app.post - para rotas de criação, cadastro e login (verbo HTTP
              POST)
            </li>
            <li>
              app.patch - para rotas de atualização parcial (verbo HTTP PATCH)
            </li>
            <li>
              app.put - para rotas de atualização completa (verbo HTTP PUT)
            </li>
            <li>app.delete - para rotas de exclusão (verbo HTTP DELETE)</li>
          </ul>
        </li>
      </ol>
      <p>
        Neste exemplo, foram criadas quatro rotas, e independentemente do método
        HTTP utilizado, a estrutura de criação é praticamente a mesma. Cada rota
        recebe a URL como primeiro parâmetro e uma função lógica como segundo
        parâmetro, com req e res presentes em todos os casos.
      </p>
      <h3>
        É importante notar que é possível criar quantas rotas desejarmos em
        nossas APIs, contanto que elas não compartilhem o mesmo método HTTP e
        endereço.
      </h3>
    </div>
  );
}

export default App;
