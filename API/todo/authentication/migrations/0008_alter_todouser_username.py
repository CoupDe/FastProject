# Generated by Django 4.1 on 2022-08-26 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0007_alter_todouser_first_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todouser',
            name='username',
            field=models.CharField(blank=True, db_index=True, max_length=100, unique=True),
        ),
    ]
