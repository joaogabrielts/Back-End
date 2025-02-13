function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos abordar a leitura de dados em tabelas do
            PostgreSQL.
          </p>
        </li>
        <li>
          <h1>Leitura de dados</h1>
          <p>
            Para realizar a leitura de dados em tabelas, utilizaremos o comando
            SELECT. O formato padrão deste comando é ilustrado a seguir:
          </p>
          <h3>SELECT colunas FROM nome_da_tabela;</h3>
          <p>Vamos analisar um exemplo prátic</p>
          <h3>
            /* todas as colunas */ SELECT * FROM products;
             /* colunas específicas */ SELECT "name", "description" from products;
          </h3>
          <p>No exemplo acima, estamos realizando uma consulta na tabela "products". No primeiro exemplo, estamos trazendo todas as colunas representadas pelo "*", e no segundo, somente as colunas "name" e "description."</p>

          <div>
            <h1>
            2.1 WHERE
            </h1>
            <p>Podemos fazer leituras filtradas em nosso banco de dados usando a cláusula WHERE, o que nos permite fornecer uma condição para a consulta. Confira os exemplos abaixo:</p>
            <h1>SELECT * FROM products WHERE id = 1;

           SELECT * FROM products WHERE price < 300000;</h1>
           <p>Busca de um recurso específico com id igual 1.
           </p>
           <p>Busca de recursos com preços inferiores a 3000,00.
           </p>
          </div>
          <div>
            <h1>2.2 LIKE</h1>
            <p>Além de utilizar operadores relacionais para criar nossas regras de filtragem, podemos comparar valores de texto usando o LIKE. Ao combinar o LIKE com o '%', é possível filtrar texto de forma parcial. Veja o exemplo abaixo:</p>
            <h1>SELECT * FROM products WHERE name LIKE '%Computador%';</h1>
          </div>
          <div>
            <h1>2.3 ILIKE</h1>
            <p>Mesmo sendo uma ferramenta flexível, o LIKE é sensível a variações entre maiúsculas e minúsculas. Se desejarmos ignorar essa diferenciação na filtragem, podemos usar o ILIKE. Confira o exemplo abaixo:</p>
            <h3>SELECT * FROM products WHERE name ILIKE '%computador%';</h3>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
