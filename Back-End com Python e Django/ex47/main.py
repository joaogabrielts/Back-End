class MinhaClasse:
    def metodo_de_instancia(self):
        return "Mètodo de instância chamado"
    
    @classmethod
    def metodo_de_classe(cls):
        return "Mètodo de classe chamado"
    
    @staticmethod
    def metodo_estatico():
        return "Método estático chamado"
    
    
obj = MinhaClasse()

print(obj.metodo_de_instancia())
print(obj.metodo_de_classe())
print(obj.metodo_estatico())


print(MinhaClasse.metodo_de_classe())
print(MinhaClasse.metodo_estatico())
print(MinhaClasse.metodo_de_instancia())