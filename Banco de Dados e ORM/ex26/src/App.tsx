function App() {
  return (
    <div>
      <h1>Join</h1>
      <p>
        O JOIN é uma cláusula fundamental que permite combinar registros de duas
        ou mais tabelas com base em uma condição específica. Ele é usado para
        recuperar informações relacionadas de diferentes tabelas de um banco de
        dados relacional. Confira o modelo sintático abaixo:
      </p>

      <h3>SELECT * FROM tabela1 ⁠ JOIN tabela2 ON condição de combinação;</h3>

      <p>
        Com a cláusula JOIN, podemos unir duas ou mais tabelas. No entanto, para
        que essa junção seja bem-sucedida, a cada tabela combinada, será
        necessário declarar uma condição, que, geralmente, irá envolver as
        chaves estrangeiras declaradas nos relacionamentos.
      </p>

      <p>
        Confira o exemplo contextualizado de uma combinação adequada para
        relacionamentos um para um ou um para muitos:
      </p>
      <h3>
        SELECT * FROM users JOIN addresses ON users."id" = addresses."userId";
      </h3>
      <p>
        Neste exemplo, estamos combinando a tabela "users" com a tabela
        "addresses" para listarmos todos os usuários com seus respectivos
        endereços.
      </p>

      <h2>2.1 Renomeando colunas com AS</h2>
      <p>Perceba que, no exemplo acima, alguns nomes de coluna se repetem:</p>
      <ul>
        <li>
          <p>id da tabela "users"</p>
        </li>
        <li>
          <p>id da tabela "addresses</p>
        </li>
        <p>Bem como alguns valores também:</p>
        <li>
          <p>id da tabela "users"</p>
        </li>
        <li>
          <p>userId da tabela "addresses"</p>
        </li>
      </ul>
      <p>
        Por isso, quando estamos combinando tabelas com JOIN, geralmente não
        utilizamos o * para trazer todas as colunas, e, em alguns casos, é
        necessário renomear algumas colunas, para isso podemos utilizar a
        cláusula AS. Confira o exemplo abaixo:
      </p>

      <h3>
        SELECT users."id" AS "userId", users."name" AS "userName", users."email"
        AS "userEmail", addresses."id" AS "addressId", addresses."street",
        addresses."number" FROM users JOIN addresses ON users."id" =
        addresses."userId";
      </h3>
      <p>
        Em vez de trazermos todas as colunas, determinamos as colunas desejadas
        uma a uma, e com AS renomeamos:
      </p>
      <ul>
        <li>
          <p>users.id para userId</p>
        </li>
        <li>
          <p>users.name para userName</p>
        </li>
        <li>
          <p>users.email para userEmail</p>
        </li>
        <li>
          <p>addresses."id" para addressId</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
