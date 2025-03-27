# dados imutabilidades
variavel_1 = 20

variavel_2 = variavel_1
print(variavel_1)
print(variavel_2)

id(variavel_1)
id(variavel_2)

variavel_2 = 'i'
print(variavel_2)

print(variavel_1)

id(variavel_2)

id(variavel_1)

# dados mutabilidade 

variavel_1 = [1, 2]
variavel_2 = variavel_1

id(variavel_1)
id(variavel_2)

variavel_1[0] = 7
print(variavel_1)
print(variavel_2)

id(variavel_1)
id(variavel_2)

# outro exemplos 

# main.py


def func_param(lista, numero):
    lista.append(100)
    numero = numero + 50
    print(f'Lista dentro da função: {lista}')
    # Lista dentro da função: [5, 25, 50, 100]
    print(f'Número dentro da função: {numero}')
    # Número dentro da função: 75
    

minha_lista = [5, 25, 50]
numero_inteiro = 25

print(f'Lista antes da chamada da função: {minha_lista}')
# Lista antes da chamada da função: [5, 25, 50]
print(f'Inteiro antes da chamada da função: {numero_inteiro}')
# Inteiro antes da chamada da função: 25
print('*' * 50)
# **************************************************
func_param(minha_lista, numero_inteiro)
print('* ' * 50)
# **************************************************
print(f'Lista fora do escopo da função {minha_lista}')
# Lista fora do escopo da função [5, 25, 50, 100]
print(f'Inteiro fora do escopo da da função: {numero_inteiro}')
# Inteiro fora do escopo da da função: 25
