/* JOIN */
SELECT
    *
FROM
    users
    JOIN addresses ON users."id" = addresses."userId";

SELECT
    users."id" AS "userId",
    users."name" AS "userName",
    users."email" AS "userEmail",
    addresses."id" AS "addressId",
    addresses."street",
    addresses."number"
FROM
    users
    JOIN addresses ON users."id" = addresses."userId";

/* JOIN parte 2  */
SELECT
    products_1."id" AS "productId",
    products_1."name" AS "productName",
    products_1."price" AS "productPrice",
    categories."id" AS "categoryId",
    categories."name" AS "categoryName"
FROM
    products_1
    JOIN products_categories ON products_1."id" = products_categories."productId"
    JOIN categories ON categories."id" = products_categories."categoryId"
WHERE
    products_1."id" = 2;