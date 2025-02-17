/*Exemplo Básico de Subconsulta:*/

SELECT Nome
FROM Produtos
WHERE ID IN (SELECT Produto_ID FROM Pedidos);

/*Exemplo de Subconsulta Correlacionada:*/
SELECT Nome
FROM Clientes C
WHERE (SELECT COUNT(*) FROM Pedidos P WHERE P.Cliente_ID = C.ID) >= 2;