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
            SELECT Nome 
            FROM Produtos
             WHERE ID IN (SELECT Produto_ID FROM
            Pedidos);
          </h3>
          <p>Neste exemplo, a subconsulta (SELECT Produto_ID FROM Pedidos) retorna uma lista de IDs de produtos pedidos. A consulta principal, então, seleciona os nomes dos produtos cujos IDs estão na lista retornada pela subconsulta.</p>
        </li>
        <li>
          <h1></h1>
        </li>
      </ol>
    </div>
  );
}

export default App;
