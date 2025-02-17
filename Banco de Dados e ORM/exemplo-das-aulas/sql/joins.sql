/*2 INNER JOIN*/

SELECT Pedidos.ID, Pedidos.Data, Clientes.Nome
FROM Pedidos
INNER JOIN Clientes ON Pedidos.Cliente_ID = Clientes.ID;


/*3 LEFT JOIN*/

SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID, Pedidos.Data
FROM Clientes
LEFT JOIN Pedidos ON Clientes.ID = Pedidos.Cliente_ID;

/*4 RIGHT JOIN*/

SELECT Pedidos.ID AS Pedido_ID, Pedidos.Data, Clientes.ID, Clientes.Nome
FROM Pedidos
RIGHT JOIN Clientes ON Pedidos.Cliente_ID = Clientes.ID;

/*5 FULL JOIN*/

SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID, Pedidos.Data
FROM Clientes
FULL JOIN Pedidos ON Clientes.ID = Pedidos.Cliente_ID;
