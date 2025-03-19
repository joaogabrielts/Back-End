dicionario_d1 = dict([
    ('nome', 'kenzie',), ('cidade', 'curitiba',), ('modulo', 'M5',)
    ])
print(dicionario_d1['nome'])
print(dicionario_d1['cidade'])
print(dicionario_d1['modulo'])
print(dicionario_d1.get('telefone', 'A chave telefone não existe'))

print(dicionario_d1.keys())
print(dicionario_d1.values())


lista_1 = ["telefone", "casado", "idade"]
lista_2 = ["999-999-999", False, 28]

d2 = dict(zip(lista_1, lista_2))
print('adicionando list', d2)


dicionario_d1.update(d2)
print('adicionando d2', dicionario_d1)

del dicionario_d1["casado"]
print(dicionario_d1)


print(dicionario_d1.pop("idade"))
print(dicionario_d1)


dicionario_d1.clear()
print(dicionario_d1)