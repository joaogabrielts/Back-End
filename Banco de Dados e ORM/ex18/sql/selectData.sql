SELECT * FROM products;
SELECT "name", "description" from products;
 
SELECT * FROM products WHERE id = 1;

SELECT * FROM products WHERE price < 300000;

SELECT * FROM products WHERE name LIKE 'Computador%';

SELECT * FROM products WHERE name LIKE '%Gamer';

SELECT * FROM products WHERE name LIKE '%Gamer%';

SELECT * FROM products WHERE name ILIKE '%computador%';

/*
SELECT * FROM products WHERE name LIKE '%Gamer%';
quando for o LIKE e vc colocar o game assim com letra minuscula ele não vai achar,

--------------------------------------------------------------------------------------------
não importa se é maiusculo ou minisculo 

SELECT * FROM products WHERE name ILIKE '%computador%';



*/