from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.core.files.storage import default_storage
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from employee.models import Employee, Departments
from employee.serializers import EmployeeSerializer, DepartmentSerializers

# Create your views here.

@csrf_exempt
def departmentApi(request, id = 0):

    if request.method == 'GET':
    
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializers(departments, many = True)
        return JsonResponse(departments_serializer.data, safe=False)
        # return JSONRenderer().render(departments_serializer.data)

    if request.method == 'POST':

        department_data = JSONParser().parse(request)
        departments_serializer = DepartmentSerializers(data = department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to Add Department", safe=False)

    if request.method == 'PUT':

        department_data = JSONParser().parse(request)
        department = Departments.objects.get(departmentId = department_data['departmentId'])
        departments_serializer = DepartmentSerializers(department, data = department_data)
        if departments_serializer.is_valid() :
            departments_serializer.save()
            return JsonResponse("Updated successfully", safe = False)
        return JsonResponse("Updation failed", safe = False)
    
    if request.method == 'DELETE':
        
        department = get_object_or_404(Departments.objects.get(departmentId = id))
        department.delete()
        return JsonResponse("Deleted department successfully", safe= False)

@csrf_exempt
def EmployeeAPI(request,id=0):

    if request.method == 'GET':
        employees = Employee.objects.all()
        employe_serialized  = EmployeeSerializer(employees, many = True)
        return JsonResponse(employe_serialized.data, safe= False)

    if request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employe_serialized = EmployeeSerializer(data = employee_data)
        if employe_serialized.is_valid():
            employe_serialized.save()
            return JsonResponse("Employee successfully added.",safe= False)
        return JsonResponse("Failed to add Employee.", safe= False)

    if request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(id = employee_data['id'])
        employe_serialized = EmployeeSerializer(employee, data = employee_data)
        if employe_serialized.is_valid():
            employe_serialized.save()
            return JsonResponse("Employee updated succsessfully", safe= False)
        return JsonResponse("Failed to update Employee.", safe= False)

    if request.method == 'DELETE':
        employee = get_object_or_404(Employee,id = id)
        employee.delete()
        return JsonResponse("Deleted Employee successfully.", safe= False)

@csrf_exempt
def saveFile(request):
    file = request.FILES['uploadedFiles']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe= False)