INSERT INTO
    products(
        "name",
        "description",
        "price",
        "createdAt",
        "updatedAt"
    )
VALUES
(
        'Computador',
        'Computador bonito',
        250000,
        '2023-10-16',
        '2023-10-16'
    );

INSERT INTO
    products(
        "name",
        "description",
        "price",
        "createdAt",
        "updatedAt"
    )
VALUES
(
        'Notebook',
        'Notebook bonito',
        350000,
        '2023-10-16',
        '2023-10-16'
    ),
    (
        'Notebook',
        'Notebook bonito',
        25000,
        '2023-10-16',
        '2023-10-16'
    );

INSERT INTO
    products(
        "name",
        "description",
        "price",
        "createdAt",
        "updatedAt"
    )
VALUES
(
        'Computador Game ',
        'Computador Game bonito',
        550000,
        '2023-10-16',
        '2023-10-16'
    ) RETURNING *;    