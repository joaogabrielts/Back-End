from django.db import models


class Account(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    account_balance = models.DecimalField(max_digits=12, decimal_places=2)
    gender = models.CharField(max_length=255)
