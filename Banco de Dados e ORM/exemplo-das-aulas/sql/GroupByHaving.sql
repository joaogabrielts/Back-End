/* GROUP BY*/
SELECT Categoria, SUM(Valor) AS TotalVendas
FROM Vendas
GROUP BY Categoria;

/* HAVING*/

SELECT Categoria, SUM(Valor) AS TotalVendas
FROM Vendas
GROUP BY Categoria
HAVING SUM(Valor) > 1000;