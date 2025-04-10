from django.db import models


# Create your models here.
class Content(models.Model):
    name = models.CharField(max_length=255)
    author = models.ForeignKey(
        "authors.Author", on_delete=models.CASCADE, related_name="contents"
    )


