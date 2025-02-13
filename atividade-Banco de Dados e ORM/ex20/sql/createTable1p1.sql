CREATE TABLE employees(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "email" VARCHAR(200) NOT NULL
);

CREATE TABLE contracts(
    "id" SERIAL PRIMARY KEY,
    "startedAt" DATE NOT NULL,
    "expiresAt" DATE NOT NULL,
    "employeeId" INTEGER UNIQUE NOT NULL,
    FOREIGN KEY ("employeeId") REFERENCES employees("id") ON DELETE CASCADE
);

CREATE TABLE skills(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "employeeId" INTEGER NOT NULL,
    FOREIGN KEY ("employeeId") REFERENCES employees("id") ON DELETE CASCADE
);

/*Insira um empregado na tabela "employee". */
INSERT INTO
    employees("name", "email")
VALUES
    ('gabriel', 'gabrie@email.com') RETURNING *;

/*Insira um contrato na tabela "contracts" vinculado ao empregado cadastrado.*/
INSERT INTO
    contracts("startedAt", "expiresAt", "employeeId")
VALUES
    ('2023-10-19', '2028-10-19', 1) RETURNING *;

/*Tente inserir um contrato na tabela "contracts" passando um "employeeId" inválido. O banco de dados deverá retornar um erro.*/
INSERT INTO
    contracts("startedAt", "expiresAt", "employeeId")
VALUES
    ('2023-10-19', '2028-10-19', 2) RETURNING *;

/*Tente inserir um novo contrato vinculado ao mesmo empregado. O banco de dados deverá retornar um erro.*/
INSERT INTO
    contracts("startedAt", "expiresAt", "employeeId")
VALUES
    ('2022-10-19', '2026-10-19', 1) RETURNING *;

INSERT INTO
    skills("name", "employeeId")
VALUES
('React', 1);


INSERT INTO
    skills("name", "employeeId")
VALUES
('Node.js', 1);



INSERT INTO
    skills("name", "employeeId")
VALUES
('sacss', 1),('typeScript',1);

INSERT INTO
    skills("name", "employeeId")
VALUES
('html', 2);