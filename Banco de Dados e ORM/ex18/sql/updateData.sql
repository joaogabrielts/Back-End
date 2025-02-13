UPDATE products SET name = 'mouse' WHERE id = 2;
UPDATE products SET  description = 'mousa bonito' WHERE  id = 2;

UPDATE products SET price = 350000 WHERE id = 3;

UPDATE products SET price = 25000 WHERE id = 2;


/* Atualizando mais de uma coluna   */
 
UPDATE products SET("name", "price") = ROW ('Computador X', 300000) WHERE id = 1;

/*Tambem podemos colocar um return */

UPDATE products SET price = 360000 WHERE id = 3 RETURNING *;


