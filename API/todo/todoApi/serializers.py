from dataclasses import field
from rest_framework import serializers
from authentication.models import TodoUser

from authentication.serializers import TodoUserSerializer

from .models import Task, TaskComment


class TaskSerializers(serializers.ModelSerializer):
    creator = serializers.CharField(source='creator.first_name')

    class Meta:
        model = Task
        fields = ['short_description', 'id',
                  'importance_task', 'updated_at', 'created_at', 'isComplete', 'creator']


class CommentSerializers(serializers.ModelSerializer):
    comment_task = serializers.CharField()
    comment_creator = serializers.CharField()

    class Meta:
        model = TaskComment
        fields = ['description', 'id',
                  'updated_at', 'created_at',  'comment_task', 'comment_creator']
        depth = 1

    def create(self, validated_data):
    
    
        print('comment_task', validated_data['comment_task'])
        print('comment_creator', validated_data['comment_creator'])
        print('description', validated_data['description'])
        return TaskComment.objects.create(**validated_data)
