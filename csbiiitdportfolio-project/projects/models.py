from django.db import models
from multiselectfield import MultiSelectField


# Create your models here.
class Project(models.Model):
	projectName = models.CharField(max_length=60)
	projectDescription = models.CharField(max_length=300)
	projectImage = models.ImageField(upload_to='images/')
	projectLink = models.URLField(max_length=300)
	Categories = [
		('Web Dev', 'Web Dev'),
		('App Dev', 'App Dev'),
		('Data Science', 'Data Science'),
		('Machine Learning', 'Machine Learning'),
		('Deep Learning', 'Deep Learning'),
		('Research', 'Research'),
		('Database Management', 'Database Management'),
		('Other', 'Other')
		]
	
	projectCategory = MultiSelectField(
		choices=Categories,
	)
	projectTeam = models.CharField(max_length=100)

	def __str__(self):
		return self.projectName