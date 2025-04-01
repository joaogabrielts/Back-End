class Student:
    school_name = 'Kenzie'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show(self):
        print('Student', self.name, self.age)
        print('School', self.school_name)

    @classmethod
    def show_classmethod(cls):
        # print('Student', cls.name, cls.age)
        print('School', cls.school_name)

    @staticmethod
    def show_staticmethod():
        print('Não tenho acesso aos atributos de classe e de instância')
