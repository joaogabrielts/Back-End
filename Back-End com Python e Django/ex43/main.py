class Dog:
    species = 'mammal'
    
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        
    def bark(self):
        print('woof!')
        

dog1 = Dog("Fido", "Labrador")
dog2 = Dog("Buddy", "Poodle")

print(dog1.species)

print(dog1.name)
print(dog2.name)

dog1.bark()