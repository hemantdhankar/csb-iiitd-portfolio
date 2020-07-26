from django.db import models

# Create your models here.
class Project(models.Model):
	projectName = models.CharField(max_length=100)
	projectImage = models.ImageField(upload_to='images/')