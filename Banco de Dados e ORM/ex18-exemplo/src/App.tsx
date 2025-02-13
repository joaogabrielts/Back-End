function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, exploraremos o relacionamento 1 para 1 em bancos de
            dados. Esse tipo de relacionamento ocorre quando cada registro em
            uma tabela está diretamente associado a apenas um registro em outra
            tabela. Vamos entender melhor esse conceito com exemplos práticos.
          </p>
        </li>
        <li>
          <h1>Relacionamento 1:1 na prática</h1>
          <h3>Usuários:</h3>
          <p>
            CREATE TABLE users ( "id" SERIAL PRIMARY KEY, "name" VARCHAR(250)
            NOT NULL, "email" VARCHAR(100) NOT NULL );
          </p>

          <h3>Endereços:</h3>
          <p>
            CREATE TABLE addresses ( "id" SERIAL PRIMARY KEY, "street"
            VARCHAR(250) NOT NULL, "number" INTEGER );
          </p>
          <p>
            No exemplo acima, temos uma tabela de usuário e outra de endereço;
            no entanto, não há um relacionamento entre elas.
          </p>

          <div>
            <h2>2.1 Utilizando o "id" como ponte de relacionamento</h2>
            <p>
              O "id", por representar um recurso e uma tabela de forma única,
              será sempre a chave utilizada para criação de qualquer tipo de
              relacionamento. Para criar um relacionamento 1:1, podemos seguir o
              exemplo abaixo:
            </p>
            <h3>
              CREATE TABLE users ( "id" SERIAL PRIMARY KEY, "name" VARCHAR(250)
              NOT NULL, "email" VARCHAR(100) NOT NULL ); CREATE TABLE addresses
              ( "id" SERIAL PRIMARY KEY, "street" VARCHAR(250) NOT NULL,
              "number" INTEGER, "userId" INTEGER UNIQUE NOT NULL, FOREIGN KEY
              ("userId") REFERENCES users("id") ON DELETE CASCADE );
            </h3>
            <p>
              Neste exemplo acima, temos uma relação onde um usuário pode ter
              somente um endereço (1:1). Isso acontece por meio da criação de
              uma nova coluna na tabela "addresses".
            </p>

            <h3>"userId" INTEGER UNIQUE NOT NULL</h3>
            <p>
              Essa coluna é criada para receber o "id" do usuário relacionado à
              aquele endereço, e unido a cláusula UNIQUE, cria a restrição de um
              endereço por usuário.
            </p>
          </div>

          <div>
            <h2>2.2 Chave estrangeiras (FOREIGN KEY)</h2>
            <p>
              A referência de FOREIGN KEY está presente para garantir que o
              valor passado na coluna seja de fato um "id" de usuário. É uma
              prática importante para evitar o cadastramento de relacionamentos
              inválidos.
            </p>
            <h3>FOREIGN KEY ("userId") REFERENCES users("id")</h3>
            <p>
              Neste exemplo, a coluna "userId" é tratada como chave estrangeira,
              devendo corresponder à coluna "id" da tabela "users".
            </p>
          </div>

          <div>
            <h2>2.3 ON DELETE</h2>
            <p>
              Quando estabelecemos a relação entre chaves, é possível determinar
              o que irá acontecer na exclusão do recurso relacionado.
            </p>

            <div>
              <h2>2.3.1 CASCADE</h2>
              <p>O recurso será excluído junto com o recurso relacionado.</p>
              <h3>
                FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
              </h3>
            </div>

            <div>
              <h2>2.3.2 SET NULL</h2>
              <p>2.3.2 SET NULL</p>
              <h3>
                FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE SET NULL
              </h3>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
