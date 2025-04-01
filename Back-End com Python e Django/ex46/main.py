# __init__
# # É um método mágico chamado quando um objeto é 
# criado a partir de uma classe.
# Ele é usado para inicializar o estado do objeto.
class Person:
    def __init__(self, name):
        self.name = name


john = Person('John')
print(john)
# <__main__.Person object at 0x7f4347ecc430>


# __str__
# é chamado quando a função str() é aplicada a um objeto ou quando o objeto
# é usado em uma interpolação de string.
# Ele é usado para retornar uma string representando o estado do objeto:
class Person:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f'Classe: {Person.__name__} - Pessoa: {self.name}'
    
    
john = Person('John')
print(john)
# Classe: Person - Pessoa: John


# __len__
# É chamado quando a função len() é aplicada a um objeto. 
# Ele é usado para retornar o tamanho do objeto:

class Person:
    def __init__(self, name):
        self.name = name


john = Person('John', 17)
print(len(john))

# Traceback (most recent call last):
#  File ".../main.py", line 95, in <module>
#  print(len(john))
# TypeError: object of type 'Person' has no len()

# Chamamos a função len e estourou um erro,
# isso se dá pelo fato de que o dunder method __len__ não vem declarado
# por padrão em nossas classes, então temos que criá-lo do 0:


class Person:
    def __init__(self, name):
        self.name = name
        self.minha_lista = list()

    def __len__(self):
        return len(self.minha_lista)
    

john = Person('John')
print(len(john))
# 0