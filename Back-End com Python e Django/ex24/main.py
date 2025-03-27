# packing

a = 1
b = 2
c = 3

packed = a, b, c
print(packed)

# unpacking

variavel_1, variavel_2, variavel_3 = packed
print(variavel_1)
print(variavel_2)
print(variavel_3)

# args


def show_values(*args: tuple) -> None:
    print(args)


print("Primeira chamada de show_values:")
show_values(1, 2, 3) 
# Saída: (1, 2, 3)
print("Segunda chamada de show_values:")
show_values(4, 5, 6, 7, 8) 
# Saída: (4, 5, 6, 7, 8)


# kwargs


def show_keywords_values(**kwargs: dict) -> None:
    print(kwargs)


print("Primeira chamada de show_keywords_values:")
show_keywords_values(name="Alice", age=25) 
# Saída: {'name': 'Alice', 'age': 25}

print("Segunda chamada de show_keywords_values:")
show_keywords_values(city="New York", country="USA", native_language="english") 
# Saída: {'city': 'New York', 'country': 'USA', 'native_language': 'english'}
