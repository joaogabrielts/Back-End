class Developer:
    languages = ["python", "C#"]
    
    def __init__(self, email, telefone) -> None:
        self.email = email
        self.telefone = telefone


# # Instanciando objetos

maria = Developer("maria@gmail.com", "+5531998765476")
joao = Developer("teixeirajsilva21@gmail.com", "+5521976217390")


# Atributos de instancia
print(maria.email, maria.telefone)
print(joao.email, joao.telefone)

# # objetos são únicos
print(maria)
print(joao)

# # Atributos de instancia
print(maria.languages)
print(joao.languages)
print(Developer.languages)

print(Developer.email)  # erro