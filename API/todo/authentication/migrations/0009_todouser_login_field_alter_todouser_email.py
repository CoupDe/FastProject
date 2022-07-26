# Generated by Django 4.1 on 2022-08-29 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0008_alter_todouser_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='todouser',
            name='login_field',
            field=models.CharField(default='', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='todouser',
            name='email',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
