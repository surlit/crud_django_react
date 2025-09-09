from django.shortcuts import render
from django.views.generic import RedirectView
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
class HomeRedirectView(RedirectView):
    url = '/docs/'
    