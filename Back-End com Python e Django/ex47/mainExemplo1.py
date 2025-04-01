class Student:
    school_name = "Kenzie"
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def show(self):
        print("Student", self.name, self.age)
        print("Student", self.school_name)
       
    @classmethod
    def show_classmethod(cls):
        # print('Student', cls.name, cls.age)
        print("school", cls.school_name)   
        
    @staticmethod
    def show_staticmethod():
        print("não tenho acesso aos atributos de classe e de instância")
        

john = Student("john", 17)
john.show()
# student john 17
# school kenzie

john.show_classmethod()
# schhol kenzie

john.show_staticmethod()
# não tenho acesso aos atributos de classe e de instância


