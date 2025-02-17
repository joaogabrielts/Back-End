function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, exploraremos o conceito de subconsultas (subqueries) em
            SQL. Subconsultas são consultas SQL aninhadas dentro de outras
            consultas e são uma técnica poderosa para recuperar dados
            específicos de maneira eficiente.
          </p>
        </li>
        <li>
          <h1> O que é uma Subconsulta?</h1>
          <p>
            Uma subconsulta é uma consulta SQL incorporada em uma consulta
            principal. Ela é usada para buscar dados com base em condições
            específicas e pode ser usada em várias cláusulas, como WHERE, FROM,
            SELECT e outras.
          </p>
          <h4>Exemplo Básico de Subconsulta:</h4>
          <p>
            Vamos considerar uma situação em que temos duas tabelas, "Produtos"
            e "Pedidos". Queremos encontrar todos os produtos pedidos pelo menos
            uma vez. Uma subconsulta pode ser usada para resolver isso:
          </p>
          <h3>
            SELECT Nome FROM Produtos WHERE ID IN (SELECT Produto_ID FROM
            Pedidos);
          </h3>
          <p>
            Neste exemplo, a subconsulta (SELECT Produto_ID FROM Pedidos)
            retorna uma lista de IDs de produtos pedidos. A consulta principal,
            então, seleciona os nomes dos produtos cujos IDs estão na lista
            retornada pela subconsulta.
          </p>
        </li>
        <li>
          <h1>Tipos de Subconsultas</h1>
          <p>
            Existem diferentes tipos de subconsultas, dependendo de onde são
            usadas e do resultado esperado:
          </p>
          <ol>
            <li>
              <h1>
                Subconsultas Escalares: Essas subconsultas retornam um único
                valor, geralmente usado em uma cláusula SELECT.
              </h1>
            </li>
            <li>
              <h1>
                Subconsultas Correlacionadas: As subconsultas correlacionadas
                são usadas quando a subconsulta depende dos resultados da
                consulta principal. Elas podem ser usadas em uma cláusula WHERE,
                por exemplo.
              </h1>
            </li>
            <li>
              <h1>
                Subconsultas em Cláusulas FROM: Subconsultas podem ser usadas na
                cláusula FROM para criar temporariamente uma tabela derivada que
                pode ser usada na consulta principal.
              </h1>
              <p>Exemplo de Subconsulta Correlacionada:</p>
              <p>
                Suponha que queremos encontrar todos os clientes que fizeram
                pelo menos dois pedidos:
              </p>
              <h2>SELECT Nome
FROM Clientes C
WHERE (SELECT COUNT(*) FROM Pedidos P WHERE P.Cliente_ID = C.ID) >= 2;</h2>
<p>Neste exemplo, a subconsulta (SELECT COUNT(*) FROM Pedidos P WHERE P.Cliente_ID = C.ID) é correlacionada com a consulta principal. Ela conta o número de pedidos para cada cliente na consulta principal e retorna apenas os clientes que fizeram pelo menos dois pedidos.</p>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default App;
