from student import Student

john = Student('John', 17)
john.show()
# Student John 17
# School Kenzie

john.show_classmethod()
# School Kenzie

john.show_staticmethod()
# Não tenho acesso aos atributos de classe e de instância