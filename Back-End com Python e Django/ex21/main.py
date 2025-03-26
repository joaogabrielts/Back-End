minha_tupla = (1, 2, 3, 4, 5)

minha_tupla_vazia = ()

primeiro_elemento = minha_tupla[0]

minha_tupla_string = ('João', 'José', 'Maria', 'Joana', 'João')

# convertendo a tupla pra list pra altera 
minha_lista = list(minha_tupla_string)

# alterando o valor 
minha_lista[0] = 'Pedro'

# reatribuindo para tupla
minha_tupla = tuple(minha_lista)
print(minha_tupla)

minha_tupla = ('João', 'José', 'Maria', 'Joana', 'José', 'João')
print(minha_tupla.count('João'))
print(minha_tupla.index('José'))