function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>introdução</h1>
          <p>
            Nesta aula, aprenderemos a criar, selecionar e excluir bancos de
            dados PostgreSQL utilizando o psql.
          </p>
        </li>
        <li>
          <h1>Criando o banco de dados</h1>
          <p>
            Para criar um banco de dados, após o login de usuário, podemos criar
            um banco rodando o comando abaixo:
          </p>
          <h3>CREATE DATABASE nome_do_banco;</h3>
        </li>
        <li>
          <h1>Listando banco de dados</h1>
          <p>
            Após criar o banco, você pode visualizar a lista de bancos de dados
            no psql executando o comando:
          </p>
          <h2>\l</h2>
        </li>
        <li>
          <h1>Selecionando um banco de dados</h1>
          <p>Para trabalhar diretamente com um banco de dados pelo terminal, é fundamental selecionar o banco desejado. Use o seguinte comando:</p>
          <h3>\c nome_do_banco</h3>
        </li>
        <li>
          <h1>Excluir banco de dados</h1>
          <p>É possível excluir bancos de dados utilizando o seguinte comando SQL:</p>
          <h3>DROP DATABASE m4_books_api;</h3>
        </li>
      </ol>
    </div>
  );
}

export default App;
