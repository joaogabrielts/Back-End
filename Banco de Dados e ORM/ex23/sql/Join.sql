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