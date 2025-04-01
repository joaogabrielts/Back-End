class Student:
    school_name = "Kenzie"
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def change_data_instancemethod(self, name, age, school_name):
        self.name = name
        self.age = age
        self.school_name = school_name
    
    @classmethod
    def show_classmethod(cls, school_name):
        cls.school_name = school_name

    @staticmethod
    def show_staticmethod():
        print("não tenho acesso aos atributos de classe e de instância")
        

john = Student("john", 17)

john.change_data_instancemethod("John Mechenzie", 18, "kenzie academy")        


print(john.name)
print(john.age)
print(john.school_name)
print(Student.school_name)

john.show_classmethod('Kenzie Academy Brasil')

print(Student.school_name)

doe = Student("Doe", 22)
print(doe.school_name)