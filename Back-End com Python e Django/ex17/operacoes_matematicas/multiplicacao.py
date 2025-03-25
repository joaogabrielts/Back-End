from .soma import somar


def multiplicador(a, b):
    acumulador = 0
    for i in range(b):
        acumulador = somar(acumulador, a)
        print(acumulador)
    return acumulador
