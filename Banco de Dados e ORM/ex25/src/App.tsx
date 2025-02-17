function App() {
  return (
    <div>
      <ol>
        <li>
          <h1> Introdução</h1>
          <p>
            Nesta aula, exploraremos as operações de JOIN em bancos de dados,
            incluindo INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL JOIN. Essas
            operações são fundamentais para combinar dados de múltiplas tabelas
            e realizar consultas complexas.
          </p>
        </li>
        <li>
          <h1>2 INNER JOIN</h1>
          <p>
            O INNER JOIN é usado para combinar registros de duas tabelas com
            base em uma condição de igualdade entre colunas. Ele retorna apenas
            os registros com correspondências em ambas as tabelas.
          </p>
          <h4>Exemplo:</h4>
          <p>
            Suponha que temos duas tabelas, "Pedidos" e "Clientes", e queremos
            obter uma lista de pedidos juntamente com os nomes dos clientes que
            fizeram esses pedidos:
          </p>
          <h3>
            SELECT Pedidos.ID, Pedidos.Data, Clientes.Nome FROM Pedidos INNER
            JOIN Clientes ON Pedidos.Cliente_ID = Clientes.ID;
          </h3>
        </li>
        <li>
          <h1> LEFT JOIN</h1>
          <p>
            O LEFT JOIN retorna todos os registros da tabela da esquerda (tabela
            principal) e os registros correspondentes da tabela da direita
            (tabela relacionada). Se não houver correspondência na tabela da
            direita, ele retorna valores nulos.
          </p>
          <h4>Exemplo:</h4>
          <p>
            Suponha que queremos uma lista de todos os clientes e, se eles
            tiverem feito algum pedido, também exibiremos informações sobre
            esses pedidos:
          </p>
          <h3>
            SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID,
            Pedidos.Data FROM Clientes LEFT JOIN Pedidos ON Clientes.ID =
            Pedidos.Cliente_ID;
          </h3>
        </li>
        <li>
          <h1>RIGHT JOIN</h1>
          <p>
            O RIGHT JOIN é semelhante ao LEFT JOIN, mas retorna todos os
            registros da tabela da direita (tabela relacionada) e os registros
            correspondentes da tabela da esquerda (tabela principal).
          </p>
          <h4>Exemplo:</h4>
          <p>
            Suponha que queremos uma lista de todos os pedidos e, se eles
            estiverem associados a um cliente, também exibiremos informações
            sobre esses clientes:
          </p>
          <h3>
            SELECT Pedidos.ID AS Pedido_ID, Pedidos.Data, Clientes.ID,
            Clientes.Nome FROM Pedidos RIGHT JOIN Clientes ON Pedidos.Cliente_ID
            = Clientes.ID;
          </h3>
        </li>
        <li>
          <h1> FULL JOIN</h1>
          <p>
            O FULL JOIN retorna todos os registros de ambas as tabelas,
            combinando registros quando houver correspondências e preenchendo
            com valores nulos onde não houver correspondência.
          </p>
          <h4>Exemplo:</h4>
          <p>
            Suponha que queremos uma lista de todos os clientes e todos os
            pedidos, combinando as informações quando houver correspondência:
          </p>
          <h3>
            SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID,
            Pedidos.Data 
            FROM Clientes
             FULL JOIN Pedidos ON Clientes.ID =
            Pedidos.Cliente_ID;
          </h3>
        </li>
      </ol>
    </div>
  );
}

export default App;
