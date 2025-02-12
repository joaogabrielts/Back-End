function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, exploraremos a inserção de dados em tabelas do
            PostgreSQL.
          </p>
        </li>
        <li>
          <h1> Inserindo recursos</h1>
          <p>
            Para inserir dados em tabelas, utilizaremos o comando INSERT INTO. O
            formato padrão deste comando é ilustrado a seguir:
          </p>
          <h3>INSERT INTO (colunas) VALUES (valores);</h3>
          <p>Vamos examinar um exemplo prático:</p>
          <h3>
            INSERT INTO products ("name", "description", "price", "createdAt",
            "updatedAt") VALUES ('Computador', 'Computador bonito', 250000,
            '2023-10-16', '2023-10-16');
          </h3>
          <p>
            Neste exemplo, inserimos um novo produto na tabela "products," e
            observe que não foi necessário fornecer um valor para a coluna "id,"
            pois ela é autoincrementada pelo banco de dados.
          </p>
          <span>
            Neste exemplo, inserimos um novo produto na tabela "products," e
            observe que não foi necessário fornecer um valor para a coluna "id,"
            pois ela é autoincrementada pelo banco de dados.
          </span>
          <div>
            <h1>2.1 Inserção múltipla</h1>
            <p>
              O comando INSERT não se limita a inserir um recurso de cada vez;
              ele permite a inserção de vários recursos de uma só vez. Veja o
              exemplo de código a seguir:
            </p>
            <h2>
              INSERT INTO products ("name", "description", "price", "createdAt",
              "updatedAt") VALUES ('Notebook', 'Notebook bonito', 350000,
              '2023-10-16', '2023-10-16'), ('Mouse', 'Mouse bonito', 25000,
              '2023-10-16', '2023-10-16');
            </h2>
          </div>
          <div>
            <h1>2.2 RETURNING</h1>
            <p>
              Ao adicionar um ou mais recursos, é possível recuperar os valores
              inseridos usando a cláusula RETURNING. Confira o exemplo abaixo:
            </p>
            <h3>
              INSERT INTO products ("name", "description", "price", "createdAt",
              "updatedAt") VALUES ('Computador Gamer', 'Computador gamer
              bonito', 550000, '2023-10-16', '2023-10-16') RETURNING *;
            </h3>
          </div>
        </li>
      </ol>
    </div>
  );
}


export default App;
