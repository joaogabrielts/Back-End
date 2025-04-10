from django.db import models

# Create your models here.


class Account(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    age = models.IntegerField()
    sex = models.CharField(max_length=255)
