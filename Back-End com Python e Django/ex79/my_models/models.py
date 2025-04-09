from django.db import models


class Pai(models.Model):
    name = models.CharField(max_length=50)


class Filho(models.Model):
    name = models.CharField(max_length=50)
    pai = models.ForeignKey(
        "my_models.Pai", on_delete=models.CASCADE, related_name="filhos"
    )
