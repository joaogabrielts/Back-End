lista_1 = list(range(6, 21))
print(lista_1)
print(lista_1[-1])

lista_1.insert(2, 'kenzie')
print(lista_1)

print(lista_1[1:5])

lista_1.append('Academy')

lista_1.remove('kenzie')
lista_1.remove('Academy')
print(lista_1)

lista_2 = sorted(lista_1, reverse=True)
print(lista_1)
print(lista_2)

print(len(lista_1))
print(len(lista_2))

lista_1.pop()
lista_2.pop()
print(lista_1)
print(lista_2)

lista_1.clear()
lista_2.clear()
print(lista_1)
print(lista_2)