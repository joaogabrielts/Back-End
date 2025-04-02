from datetime import datetime, timedelta

datetime_atual = datetime.now()
print(datetime_atual)
# 2022-05-25 09:30:49.624221

# Adicionar um dia
print(datetime_atual + timedelta(days=1))
# 2022-05-26 09:30:49.624221

# Subtrair 60 dias
print(datetime_atual + timedelta(days=-60))
# 2022-03-26 09:30:49.624221