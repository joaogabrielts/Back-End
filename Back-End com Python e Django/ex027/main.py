numbers = [1, 2, 3, 4, 5]
squares = []

for n in numbers:
    squares.append(n**2)

print(squares)

# com list comprehension
numbers = [1, 2, 3, 4, 5]

"""
n**2 é a expresso de saída, ou seja, o "append"
n é a variavel
numbers é a sequência do loop

"""

squares = [n**2 for n in numbers]

print(squares)

# --------------------------------------------------------------------

# Sem List comprehension
numbers = [1, 2, 3, 4, 5]
evens = []
for n in numbers:
    if n % 2 == 0:
        evens.append(n)
print(evens)


# Com List comprehension
numbers = [1, 2, 3, 4, 5]
evens = [n for n in numbers if n % 2 == 0]
print(evens)

# -------------------------------------------------------

# Exemplo dicionário que vamos construir
# {0: 'Brasil', 1: 'Argentina', 2: 'Chile'}
lista = ['Brasil', 'Argentina', 'Chile']

novo_dict_comprehension = {indice: pais for indice, pais in enumerate(lista)}
print(novo_dict_comprehension)
# {0: 'Brasil', 1: 'Argentina', 2: 'Chile'}