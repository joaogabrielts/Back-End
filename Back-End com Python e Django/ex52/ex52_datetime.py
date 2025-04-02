from datetime import datetime

now = datetime.now()
type(now)

print(now)

print(now.year)  # 2020
print(now.month)  # 9
print(now.day)  # 22
print(now.hour)  # 14
print(now.minute)  # 31
print(now.second)  # 57

# Criar uma data e hora específicas
new_year = datetime(2021, 1, 1)
print(new_year)
# 2021-01-01 00:00:00

# Calcular a diferença entre duas datas
birthday = datetime(2020, 7, 4)
difference = now - birthday
print(difference)  
# Exemplo de saída: 87 days, 14:31:57.362261