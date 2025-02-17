CREATE TABLE products_1 (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL,
    "price" INTEGER NOT NULL
);

CREATE TABLE categories (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL
);

CREATE TABLE products_categories (
    "id" SERIAL PRIMARY KEY,
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    FOREIGN KEY ("productId") REFERENCES products_1("id") ON DELETE CASCADE,
    FOREIGN KEY ("categoryId") REFERENCES categories("id") ON DELETE CASCADE
);

/* Cadastro de produtos */
⁠
INSERT INTO
    products_1 ("name", "price")
VALUES
    ('Computador', 2500),
    ('Notebook', 3500),
    ('Mouse', 250);

⁠
/* Cadastro de categorias */
INSERT INTO
    categories ("name")
VALUES
    ('Computadores'),
    ('Notebook'),
    ('Acessórios');

⁠
/* Cadastro de relações */
INSERT INTO
    products_categories ("productId", "categoryId")
VALUES
    (1, 1),
    (2, 1),
    (2, 2);