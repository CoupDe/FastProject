from django.shortcuts import render
from rest_framework import generics

from .models import Task
from .serializers import TaskSerializers


class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializers


class TaskRetriveUpdate(generics.RetrieveUpdateAPIView):
    # Так как это ленивый запрос(обрабатывается только по запросоу) вернется единичный запрос
    queryset = Task.objects.all()
    serializer_class = TaskSerializers
