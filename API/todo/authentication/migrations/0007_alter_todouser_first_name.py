# Generated by Django 4.1 on 2022-08-24 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0006_alter_todouser_first_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todouser',
            name='first_name',
            field=models.CharField(max_length=100),
        ),
    ]
