class Programador:
    # 1. Atributo
    languages = ["python", "nodejs"]

    # 2. Inicializador
    def __init__(self, email, telefone):
        # 3. Atributos
        self.email = email
        self.telefone = telefone
        
        
roberto = Programador('roberto@mail.com', '+5544990258742')
claudia = Programador('claudia@mail.com', '+5511912341234')        

print(roberto.email)
print(claudia.email)


print(roberto.languages)
print(claudia.languages)


print(roberto.telefone)
print(claudia.telefone)
