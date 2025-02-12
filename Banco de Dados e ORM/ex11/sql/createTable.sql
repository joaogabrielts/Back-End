CREATE TABLE products(
    "id" SERIAL PRIMARY KEY,
    "name"VARCHAR(250) NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "createdAT" TIMESTAMP NOT NULL,
    "updatedAT" TIMESTAMP NOT NULL
);

DROP TABLE products