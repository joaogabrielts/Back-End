from studentUpadte import StudentUpandate

john = StudentUpandate('John', 17)


john.change_data_instancemethod('John Mackenzie', 18, 'Kenzie Academy')
print(john.name)
# John Mackenzie

print(john.age)
# 18

print(john.school_name)
# Kenzie Academy

print(StudentUpandate.school_name)
# Kenzie

john.change_data_classmethod('Kenzie Academy Brasil')
print(john.school_name)
# Kenzie Academy

print(StudentUpandate.school_name)
# Kenzie Academy Brasil

john.change_data_staticmethod()
# Eu não posso alterar os atributos da classe ou da instância

# Geralmente acessamos os métodos de classe e métodos
# estáticos diretamente pela classe

StudentUpandate.change_data_classmethod('Kenzie Academy Brasil - Escola')
print(StudentUpandate.school_name)
# Kenzie Academy Brasil - Escola

print(john.school_name)
# Kenzie Academy

john.change_data_classmethod('Kenzie Academy Brasil - Escola')
print(john.school_name)

StudentUpandate.change_data_staticmethod()
# Eu não posso alterar os atributos da classe ou da instância