from datetime import datetime

# Parse uma string em um objeto datetime
date_string = "2021-01-01"
date_object = datetime.strptime(date_string, "%Y-%m-%d")
print(date_object)  # 2021-01-01 00:00:00

# Parse uma string em um objeto datetime com hora
date_string = "2021-01-01 12:34:56"
date_object = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S")
print(date_object)  # 2021-01-01 12:34:56

# Parse uma string em um objeto datetime com fuso horário
date_string = "2021-01-01 12:34:56-0500"
date_object = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S%z")
print(date_object)  # 2021-01-01 12:34:56-05:00