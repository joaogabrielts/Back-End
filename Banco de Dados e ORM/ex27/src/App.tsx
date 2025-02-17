function App() {
  return (
    <div>
      <ol>
        <li>
          <h1> Introdução</h1>
          <p>
            Nesta aula, exploraremos as funções de agregação em SQL, usadas para
            resumir e calcular informações estatísticas sobre os dados em uma
            tabela. As funções de agregação são fundamentais para realizar
            análises e obter insights a partir de grandes conjuntos de dados.
          </p>
        </li>
        <li>
          <h1> Funções de Agregação Comuns</h1>
          <p>Existem várias funções de agregação comuns em SQL, incluindo:</p>
          <ol>
            <li>
              <h1>COUNT: Calcula o número de registros em uma coluna.</h1>
            </li>
            <li>
              <h1>SUM: Calcula a soma dos valores em uma coluna numérica.</h1>
            </li>
            <li>
              <h1>AVG: Calcula a média dos valores em uma coluna numérica.</h1>
            </li>
            <li>
              <h1>MIN: Retorna o valor mínimo em uma coluna.</h1>
            </li>
            <li>
              <h1>MAX: Retorna o valor máximo em uma coluna.</h1>
            </li>
          </ol>
          <div>
            <h2>2.1 COUNT</h2>
            <p>
              Suponha que temos uma tabela "Pedidos" e queremos saber quantos
              pedidos foram feitos:
            </p>
            <h2>SELECT COUNT(*) AS TotalPedidos FROM Pedidos;</h2>
            <p>
              Neste exemplo, COUNT(*) retorna o número total de registros na
              tabela "Pedidos," que é o número total de pedidos feitos.
            </p>
          </div>
          <div>
            <h2>2.2 SUM</h2>
            <p>
              Suponha que queremos calcular o valor total de todos os pedidos:
            </p>
            <h2>SELECT SUM(Valor) AS TotalValorPedidos FROM Pedidos;</h2>
            <p>
              Aqui, SUM(Valor) soma todos os valores dos pedidos na coluna
              "Valor" e nos retorna o valor total.
            </p>
          </div>
          <div>
            <h2>2.3 AVG</h2>
            <p>
              Suponha que queremos calcular a média de idade dos clientes em uma
              tabela "Clientes":
            </p>
            <h3>SELECT AVG(Idade) AS MediaIdadeClientes FROM Clientes;</h3>
            <p>
              A função AVG(Idade) calcula a média das idades dos clientes na
              tabela "Clientes."
            </p>
          </div>
          <div>
            <h2>2.4 MIN e MAX</h2>
            <p>
              Vamos encontrar o cliente mais novo e o mais velho em uma tabela
              "Clientes":
            </p>
            <h3>
              SELECT MIN(Idade) AS MenorIdade, MAX(Idade) AS MaiorIdade FROM
              Clientes;
            </h3>
            <p>
              As funções MIN(Idade) e MAX(Idade) nos retornam a idade do cliente
              mais novo e do cliente mais velho, respectivamente.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
