# Podemos criar uma lista com sintaxe literal []
minha_lista = [3, "abacate", 9.7, [4, 5, 6]]
minha_lista[3]


# Utilizando o builtin list() para trabalhar com lista:
minha_lista = list("abc")
print(minha_lista)

# minha_list_3 = list(123)  # error

minha_list_3 = list(str(123))

# -------------------------------------------------------------------------------------------------------------

# range(intervalo_inicial, intervalo_final, passo)

minha_list_4 = list(range(6))
print("Range", minha_list_4)


minha_list_5 = list(range(15, 35, 5))
print("Range", minha_list_5)

# alterando valor pelo indice dele

minha_list_4[3] = 'kenzie'
print("index_troca", minha_list_4)

# ------------------------------------------------------------------------------------------------------

# nome_da_lista[limite_inferior:limite_superior:passo]

print(minha_list_4[0:3])

# pegando a list completa

print(minha_list_4[::])

# pulando a list completa

print(minha_list_4[::2])

# ----------------------manipulando items ------------------

# cria uma lista de números
minha_lista = [1, 2, 3, 4, 5]

# quantidade da list
print("Len list", len(minha_lista))

# remove todos os items da list
# print(minha_lista.clear())

# copia list
lista_copia = minha_lista.copy()
print('copia list', lista_copia)

# adiciona o número 6 no final da lista
minha_lista.append(6)
print('adiciona o 6 no final da list', minha_lista)
#  imprime [1, 2, 3, 4, 5, 6]

# estende a lista com outra lista de números
minha_lista.extend([7, 8, 9])
print('estender a list', minha_lista)  # imprime [1, 2, 3, 4, 5, 6, 7, 8, 9]

# insere o número 0 na posição de índice 0 da lista
minha_lista.insert(0, 0)
print("adiciona com a posicao e o index", minha_lista)
# imprime [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


# ------------------------ sort--------------- sorted-----------------


minha_list = ['hi', 'hello', 'ola']
minha_list_numerica = [1, 2, 3]
minha_list_alimento = ['melão', 'abacaxi', 'jabuticaba']


# lista.sort(key=[func], reverse=true ou false) vai altera a list principal

minha_list.sort()
minha_list_alimento.sort(key=len, reverse=True)

#  key vai fazer comeca pela palavra menor,
#  mas com o reverse=True vai trocar a ordem

minha_list_alimento.sort(reverse=True)

# aqui seria em ordem alfabetica
# mas com reveser=true vai comeca pela ultima letra do alfabeto


# sorted(lista, key=[func], reverse=true ou  false) não vai altera a list

sorted(minha_list)

sorted(minha_list_numerica, reverse=True)
# o reverse true vai fazer começa pelo 3 2 1

# ---------------------------------------------------------------------------------------------

minha_list = [1, 2, 3, 4, 1, 2, 1]

# count quantas vezes um número repete na list
minha_list.count(1)

print("achar numero", minha_list.index(3))

# pop remove o ultimo elemento

ultimo_elemento = minha_list.pop()

print(ultimo_elemento)
print(minha_list)

# tambem podemos remover pelo index com pop

elemento_posicao_2 = minha_list.pop(1)
print(elemento_posicao_2)
print(minha_list)