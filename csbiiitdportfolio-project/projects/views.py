from django.shortcuts import render
from django.http import HttpResponse
from .models import Project

# Create your views here.

def home(request):
	projects = Project.objects
	return render(request, 'index.html', {'projects':projects})