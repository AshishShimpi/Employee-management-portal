from pyexpat import model
from rest_framework import serializers
from employee.models import Departments, Employee

class DepartmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ( 'departmentId',
                   'departmentName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id',
                'name',
                'department',
                'photoFileName',
                'dateOfJoining' )

