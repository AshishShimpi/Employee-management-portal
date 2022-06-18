from django.urls import re_path
from employee.views import departmentApi, EmployeeAPI
urlpatterns = [
    re_path('^departments/$',departmentApi),
    re_path('^departments/([0-9]+)$',departmentApi),
    re_path('^employee/$',EmployeeAPI),
    re_path('^employee/([0-9]+)$',EmployeeAPI),
]