CREATE TABLE students(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "module" CHAR(2) not NULL,
    "score" INTEGER,
    "active" BOOLEAN
);
/*Texto (String):
 
 CHAR(n): Armazena uma string de tamanho fixo de comprimento n.
 VARCHAR(n): Armazena uma string de tamanho variável com comprimento máximo n.
 TEXT: Armazena texto longo, sem limite específico de tamanho.
 Numérico:
 
 INTEGER: Armazena números inteiros.
 NUMERIC(p, s): Armazena números decimais com precisão p e escala s (pode ser usado para valores monetários).
 FLOAT(n): Armazena números de ponto flutuante com n dígitos de precisão.
 Data e Hora:
 
 DATE: Armazena uma data (ano, mês, dia).
 TIME: Armazena um horário do dia (hora, minuto, segundo).
 TIMESTAMP: Armazena data e hora.
 Booleano:
 
 BOOLEAN: Armazena valores verdadeiro (true) ou falso (false).
 Binário:
 
 BLOB: Armazena dados binários, como imagens ou arquivos.
 Chave Primária e Chave Estrangeira:
 
 SERIAL: Um tipo especial usado para criar chaves primárias autoincrementadas.
 INTEGER ou BIGINT: Usados para chaves primárias ou chaves estrangeiras, dependendo do tamanho necessário.*/