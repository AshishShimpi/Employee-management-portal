import datetime
from django.db import models

# Create your models here.


class Departments(models.Model):
    departmentId = models.AutoField(primary_key = True)
    departmentName = models.CharField(max_length = 100)

class Employee(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 100)
    department = models.CharField(max_length=100)
    photoFileName = models.CharField(max_length=100)
    dateOfJoining = models.DateField(default=datetime.datetime.today)

    