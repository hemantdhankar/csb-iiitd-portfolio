from django.shortcuts import render
from django.http import HttpResponse
from .models import *

# Create your views here.

def home(request):
	projects = Project.objects.order_by('projectName')
	placementTeamMembers = PlacementTeamMember.objects
	return render(request, 'index.html', {'projects':projects, 'placementTeamMembers': placementTeamMembers})

