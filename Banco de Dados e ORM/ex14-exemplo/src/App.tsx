function App() {
  return (
  <div>
    <ol>
      <li>
        <h1>Introdução</h1>
        <p>Nesta aula, vamos aprender sobre atualização com PostgreSQL.</p>
      </li>
      <li>
        <h1>Atualização de dados</h1>
        <p>Para realizar a atualização de dados em uma tabela, utilizaremos o comando UPDATE. O formato padrão deste comando é ilustrado abaixo:</p>
        <h3>UPDATE nome_da_tabela SET coluna = valores WHERE filtro;</h3>
        <p>Vamos analisar o exemplo contextualizado:</p>
        <h3>UPDATE products SET price = 320000 WHERE id = 1;</h3>
        <p>Neste exemplo, estamos atualizando a coluna "price" na tabela de produtos, no recurso com "id" igual a 1.</p>
        <div>
          <h2>2.1 Atualizando múltiplas colunas</h2>
          <p>Podemos usar a sintaxe padrão para atualizar múltiplas colunas. No entanto, dependendo da quantidade, ela pode se tornar muito extensa. Confira o exemplo abaixo:</p>
          <h3>UPDATE products SET name = "Computador X", price = 320000 WHERE id = 1;</h3>
          <p>Portanto, temos uma alternativa sintática interessante:</p>
          <h3>UPDATE products SET ("name", "price") = ROW ('Computador X', 300000) WHERE id = 1;</h3>
          <p>Dessa forma, conseguimos atualizar múltiplas colunas e obter uma consulta semelhante à inserção de dados.</p>
        </div>
        <div>
          <h2>2.2 RETURNING</h2>
          <p>Assim como na inserção de dados, é possível utilizar a claúsula RETURNING para obter os recursos atualizados. Exemplo:</p>
          <h3>UPDATE products SET price = 360000 WHERE id = 2 RETURNING *;</h3>
        </div>
      </li>
    </ol>
  </div>
  );
}

export default App;
