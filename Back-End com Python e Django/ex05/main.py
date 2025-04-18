# main.py
# Isso é um comentário de uma linha
"""
Isso é
um comentário
de várias linhas
"""

"""
Os tipos de dados primitivos em python são:

1. String (str)
2. Inteiro (int)
3. Decimal (float)
4. Booleano (bool)
5. Vazio (NoneType)
"""
# Declarando variáveis
minha_string = "hello"

# Verificando o tipo de uma variável
print("tipo minha_string:", type(minha_string))  # output: <class 'str'>

print(minha_string)

meu_inteiro = 123
print(type(meu_inteiro))  # output: <class 'int'>

print(meu_inteiro)

meu_decimal = 3.1415
print(type(meu_decimal))  # output: <class 'float'>

meu_booleano = True
print(type(meu_booleano))  # output: <class 'bool'>

meu_vazio = None
print(type(meu_vazio))  # output: <class 'NoneType'>


# quando tiver com a letra maiuscula e uma const e minuscula é let ou var, o const no python pode ser madificado

MINHA_CONSTANTE = "HEY"
print("MINHA_CONSTANTE", MINHA_CONSTANTE)

# # não reatribuir valores de constantes
MINHA_CONSTANTE = "hey 2"
print("MINHA_CONSTANTE", MINHA_CONSTANTE)

# tipagem dinamica
minha_string = 2
print("tipo minha_string:", type(minha_string))
# output: <class 'str'>
minha_string = "1500"

# tipagem forte
meu_numero = 1
print("tipo meu_numero", type(meu_numero))
# output:<class 'Int'>

print("tentativa de soma de meu_numero com minha_string:")
# soma = meu_numero + minha_string
# output: TypeError: unsupported operande type(s) for +: 'Int' and 'str'


def minha_funcao():
    meu_valor = 1234
    return meu_valor
# quando tiver quatro espaço é pq faz parte da function


print(minha_funcao())
# # output: 1234

print(type(minha_funcao))

# output: <class 'function>
