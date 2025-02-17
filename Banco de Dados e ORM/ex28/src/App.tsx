function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, exploraremos as cláusulas GROUP BY e HAVING em SQL.
            Essas cláusulas são fundamentais para a agregação de dados e a
            realização de consultas mais complexas em um banco de dados.
          </p>
        </li>
        <li>
          <h1> GROUP BY</h1>
          <p>
            A cláusula GROUP BY é usada para agrupar registros com base em
            valores semelhantes em uma ou mais colunas. Ela permite criar grupos
            de registros que compartilham características comuns em uma coluna
            específica e, em seguida, realizar operações de agregação, como
            COUNT, SUM, AVG, etc., nos grupos criados.
          </p>
          <h4>Exemplo de GROUP BY:</h4>
          <p>Suponha que temos uma tabela "Vendas" com informações sobre vendas de produtos. Queremos calcular o total de vendas por categoria de produto:</p>
          <h4>
         SELECT Categoria, SUM(Valor) AS TotalVendas
        FROM Vendas
        GROUP BY Categoria;        
          </h4>
          <p>Neste exemplo, usamos GROUP BY para agrupar as vendas por categoria e, em seguida, calculamos a soma dos valores de cada categoria.</p>
        </li>
        <li>
          <h1>HAVING</h1>
          <p>A cláusula HAVING é usada para filtrar grupos resultantes de uma cláusula GROUP BY. Ela permite aplicar condições aos grupos, de forma semelhante à cláusula WHERE, mas funciona após o GROUP BY e se aplica aos grupos em vez de registros individuais.</p>
          <h4>Exemplo de HAVING:</h4>
          <p>Suponha que queremos encontrar as categorias de produtos com vendas totais superiores a $1.000:</p>
          <h4>
          SELECT Categoria, SUM(Valor) AS TotalVendas
          FROM Vendas
          GROUP BY Categoria
          HAVING SUM(Valor) > 1000;
          <p>Neste exemplo, usamos HAVING para filtrar apenas as categorias com vendas totais superiores a $1.000 após o GROUP BY.</p>
          </h4>
        </li>
      </ol>
    </div>
  );
}

export default App;
