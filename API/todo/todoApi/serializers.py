from dataclasses import field
from rest_framework import serializers

from .models import Task


class TaskSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields = ['short_description', 'short_description',
                  'importance_task', 'updated_at', 'created_at', 'isComplete', 'id']
