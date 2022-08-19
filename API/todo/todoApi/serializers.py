from dataclasses import field
from rest_framework import serializers

from .models import Task


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['description', 'task', 'importance_task', 'updated_at', 'created_at', 'isComplete', 'id']





               
