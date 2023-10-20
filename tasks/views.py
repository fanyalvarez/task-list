# from django.shortcuts import render   ya no se necesita
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
# esto crea el crud
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()