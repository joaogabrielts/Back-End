class StudentUpandate:
    school_name = 'Kenzie'

    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    # Altera somente o estado do objeto, da classe não altera
    def change_data_instancemethod(self, name, age, school_name):
        self.name = name
        self.age = age
        self.school_name = school_name

    # Altera o estado da classe toda
    @classmethod
    def change_data_classmethod(cls, school_name):
        cls.school_name = school_name
    
    # Não altera nenhum estado
    @staticmethod
    def change_data_staticmethod():
        print('Eu não posso alterar os atributos da classe ou da instância')
