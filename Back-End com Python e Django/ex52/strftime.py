from datetime import datetime


datetime_atual = datetime.now()
year = datetime_atual.strftime("%Y")
print("year:", year)
# year: 2022

month = datetime_atual.strftime("%m")
print("month:", month)
# month: 05

day = datetime_atual.strftime("%d")
print("day:", day)
# day: 25
time = datetime_atual.strftime("%H:%M:%S")
print("time:", time)
# time: 09:07:06

date_time = datetime_atual.strftime("%m/%d/%Y, %H:%M:%S")
print("date and time:", date_time)
# date and time: 05/25/2022, 09:07:06
