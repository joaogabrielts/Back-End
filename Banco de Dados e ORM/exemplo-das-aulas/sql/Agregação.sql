/*2.1 COUNT*/
SELECT COUNT(*) AS TotalPedidos FROM Pedidos;

/*2.2 SUM*/
SELECT SUM(Valor) AS TotalValorPedidos FROM Pedidos;

/*2.3 AVG*/
SELECT AVG(Idade) AS MediaIdadeClientes FROM Clientes;

/*2.4 MIN e MAX*/
SELECT MIN(Idade) AS MenorIdade, MAX(Idade) AS MaiorIdade FROM Clientes;
