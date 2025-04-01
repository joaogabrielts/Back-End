from minhaclasse import MinhaClasse

# Chamando os métodos pelo objeto
obj = MinhaClasse()

print(obj.metodo_de_instancia())
# Método de instância chamado

print(obj.metodo_de_class())
# Método de classe chamado

print(obj.metodo_estatico())
# Método estático chamado

# Chamando os métodos pela classe
print(MinhaClasse.metodo_de_class())
# Método de classe chamado

print(MinhaClasse.metodo_estatico())
# Método estático chamado

print(MinhaClasse.metodo_de_instancia())
# TypeError: MinhaClasse.metodo_de_instancia() missing
# 1 required positional argument: 'self'

