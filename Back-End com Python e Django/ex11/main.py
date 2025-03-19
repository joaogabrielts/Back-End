numero = 10
if numero > 0:
    print("numero é positivo")


# numero = -10
# if numero > 0:
#    print("numero é positivo")
# else numero < 0:
#    print("numero é negativo")


# numero = 0
# if numero > 0:
#   print("numero é positivo")
# elif numero < 0:
#    print("numero  é negativo")
# else:
#    print("numero é zero")


# (and) é a mesma coisa (e)
# (or) é a mesma coisa (ou)
# (not) vai converte o valor do booleano

# dez = 10
# vinte = 20
# trinta = 30

# print(dez < vinte and vinte < trinta) # True
# print(dez < vinte or vinte > trinta) # True
# print(not (dez == vinte)) # True


# imprime cada elemento da lista
# for numero in [1,2,3]:
#   print(numero)

# # imprime cada caractere da string
# for caractere in "Olá, mundo!":
#    print(caractere)

# # imprimindo os numero de 1 a 5
# for i in range(1,6)
#    print(i)

# imprimindo os números de 1 a 5
# i = 1
# while i <= 5:
#    print(i)
#    i += 1
# print(i)

#  imprimindo os números de 1 a 5, mas interrompendo o laço quando o número é 3

# for i in range(1, 6):
#    if i == 3:
#        break
#   print(i)

# imprimindo os números de 1 a 5, pulando o número 3
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
