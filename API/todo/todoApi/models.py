from ast import boolop
from tabnanny import verbose
from typing import Literal
from django.db import models


class Priority(models.TextChoices):
    HIGHT = 'AA', ('Высокий')
    MEDIUM = "BB", ('Средний')
    LOW = "CC", ('Низкий')


class BaseModel(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Обновлено')

    class Meta:
        abstract = True
# Create your models here.


class Task(BaseModel):
    short_description = models.CharField(
        max_length=300, verbose_name='Краткое описание')
    description = models.TextField(
        blank=False, verbose_name='Задача', default='Описание')
    isComplete = models.BooleanField(verbose_name="Выполенено", default=False)
    importance_task = models.CharField(
        max_length=30, choices=Priority.choices, default=Priority.MEDIUM, verbose_name='Важность задачи')

    def __str__(self):
        return f'%{self.description}'
