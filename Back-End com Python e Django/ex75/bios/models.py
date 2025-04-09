from django.db import models


class Bio(models.Model):
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=50)
    published_date = models.DateField(null=True)
    musican = models.OneToOneField("musicians.Musician",
                                   on_delete=models.CASCADE)
    # "musicians.Musician":
    #  -string que representa com qual classe a relação esta denotada
    # on_delete:
    # - que tipo de ação sera executada na deleção 