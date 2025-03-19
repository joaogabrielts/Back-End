# dicionários
# sintaxe {`chave`: `valor`}


meu_dicionario = {'chave': 'valor'}

meu_dicionario = dict([('primeiro', 1,), ('segundo', 2,), ('terceiro', 3,)])

lista = ['primeiro', 'segundo', 'terceiro']

lista_2 = [1, 2, 3]

meu_dicionario = dict(zip(lista, lista_2))
print(meu_dicionario)

chaves = ['primeiro', 'segundo', 'terceiro']

valor = 0

meu_dicionario = dict.fromkeys(chaves, valor)
print(meu_dicionario)

# Acessando elementos no dicionarios

meu_dicionario = dict(primeiro=1, segundo=2, terceiro='terceiro')
print(meu_dicionario['primeiro'])

print(meu_dicionario.get('quarto', 'chave não encotrada'))

# utilizamos pra encotra todas as chaves
utilizando_keys = meu_dicionario.keys()
print(utilizando_keys)

# utilizamos pra achar todos os valores
utilizando_values = meu_dicionario.values()
print(utilizando_values) 

# e pra pegas tanto as chaves e os valores
utilizando_items = meu_dicionario.items()
print(utilizando_items)

# adicionando e atualizando itens em dicionario

# criando 
meu_dicionario.update({'quarto': 5})

# atuzalizando 
meu_dicionario.update({'quarto': 6})

# excluido
del meu_dicionario['primeiro']

# excluido com pop

meu_dicionario.pop('quarto')

# excluir o ultimo elemento

meu_dicionario.popitem()

# exluir todos os elementos

meu_dicionario.clear()