class Person:
    def __init__(self, name):
        self.name = name
        self.minha_list = []
 
    def __str__(self):
        return f"classe: {Person.__name__} - Pessoa: {self.name}"

    def __len__(self):
        return len(self.minha_list)    
    
        
john = Person("John")
print(john)        

print(len(john))