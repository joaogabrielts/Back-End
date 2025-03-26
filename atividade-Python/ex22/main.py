tupla_1 = ('valor_1', 2, 3.1, 'kenzie Academy', 
           ['Elemento1', 'Elemento2'], 'kenzie Academy')
print(tupla_1)

print(len(tupla_1))

print(tupla_1.count('kenzie Academy'))

print(tupla_1.index(3.1))

tupla_list = list(tupla_1)
tupla_list[-1] = 'Ultimo Elemento'

minha_tuple = tuple(tupla_list)
print(minha_tuple)
