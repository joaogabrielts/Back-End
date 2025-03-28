# raise Exception('Exceção levantada !!!')


def valor_positivo(v):
    if v <= 0:
        raise ValueError("O valor deve ser positivo")
    return v


def somar_valores(a, b):
    try:
        valor_a = valor_positivo(a)
        valor_b = valor_positivo(b)
        print(valor_a, valor_b)
    except ValueError as error:
        print(error.args)    
    