function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos abordar a criação e exclusão de tabelas em bancos
            de dados.
          </p>
        </li>
        <li>
          <h1>Criando tabelas</h1>
          <p>
            Para criar tabelas, utilizaremos o comando CREATE TABLE. Abaixo,
            apresentamos um exemplo de código SQL:
          </p>
          <span>exemplo esta no codigo</span>
          <p>
            Durante o comando de criação, você deve especificar o nome da tabela
            e, ao abrir os parênteses, descrever cada uma das colunas da tabela.
            Vamos conferir um exemplo prático:
          </p>
          <p>
          CREATE TABLE products (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(250) NOT NULL,
        "description" TEXT,
        "price" INTEGER NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP NOT NULL
        );
          </p>
          <p>
            No exemplo acima, estamos criando uma tabela chamada "products" com as colunas "id," "name," "description," "price," "createdAt," e "updatedAt."
          </p>
          <div>
            <h2>2.1 SERIAL PRIMARY KEY
            </h2>
            <p>Observe que a coluna "id" foi definida como SERIAL, o que fará com que ela seja autoincrementada pelo banco de dados. Além disso, a marca PRIMARY KEY define a coluna como chave primária dos registros na tabela, o que será fundamental ao trabalhar com relacionamentos entre tabelas.</p>
            <h2>2.2 NOT NULL
            </h2>
            <p>Uma novidade introduzida neste exemplo é a instrução NOT NULL, que torna a coluna obrigatória. Sem ela, por padrão, o SQL cria colunas opcionais.</p>
            <h2>2.3 Aspas duplas (")</h2>
            <p>No exemplo acima, o nome de cada coluna foi envolto em aspas duplas. Isso é uma boa prática, pois, se as aspas duplas estiverem ausentes, o PostgreSQL não fará distinção entre letras maiúsculas e minúsculas.</p>
            <h2>2.4 Excluindo tabelas
            </h2>
            <p>Caso seja necessário excluir uma tabela, seja por erro na criação ou para efetuar alterações na estrutura, você pode usar o comando DROP TABLE. Confira o exemplo abaixo:</p>
            <h3>DROP TABLE products; </h3>
          </div>
        </li>
      </ol>
    </div>
  );
}
/*
CREATE TABLE nome_da_tabela (
    /* Colunas */
//  );
/* 

*/

export default App;
