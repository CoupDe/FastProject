from urllib import response
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from authentication.models import TodoUser
from .models import Task, TaskComment
from .serializers import CommentSerializers, TaskSerializers
from rest_framework import status


class TaskList(generics.ListCreateAPIView):
    # (IsAuthenticated,)
    permission_classes = (AllowAny,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializers


class TaskRetriveUpdate(generics.RetrieveUpdateAPIView):
    # Так как это ленивый запрос(обрабатывается только по запросоу) вернется единичный запрос
    permission_classes = (AllowAny,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializers


class TaskCommentList(generics.CreateAPIView):
    permission_classes = (AllowAny,)

    serializer_class = CommentSerializers

    def post(self, request, pk):
   
        user = TodoUser.objects.get(pk=request.data['comment_creator'])
        
        print('user', user)
        return Response({'title': 'Jennifer Shrader Lawrence'})
