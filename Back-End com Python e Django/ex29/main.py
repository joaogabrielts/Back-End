try:
    x = 1 / 0
except ZeroDivisionError:
    print("não é possivel dividir por zero!")
    
# caso trocamos o except
try:
    x = 1 / 0
except TypeError:
    print("não é possivel dividir por zero!")

# dessa forma acontece um erro, pq temo que colocar a especificação

# ---------------------------------------------------------------------


def divide_dois_numeros(a, b):
    try:
        print(a / b)
    except ZeroDivisionError:
        print('É impossível dividir um número por zero')
    except TypeError:
        print('Um tipo inválido foi fornecido')


divide_dois_numeros(1, 0)
# 'É impossível dividir um número por zero'

divide_dois_numeros('b', 'a')
# 'Um tipo inválido foi fornecido'
