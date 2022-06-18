# Generated by Django 3.2.13 on 2022-06-13 16:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Departments',
            fields=[
                ('departmentId', models.AutoField(primary_key=True, serialize=False)),
                ('departmentName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
                ('photoFileName', models.CharField(max_length=100)),
                ('dateOfJoining', models.DateField(default=datetime.datetime.today)),
            ],
        ),
    ]
