from django.urls import re_path
from djangoAPI import settings
from employee.views import departmentApi, EmployeeAPI, saveFile

from django.conf.urls.static import static
from django.conf import Settings

urlpatterns = [
    re_path('^department/$',departmentApi),
    re_path('^department/([0-9]+)$',departmentApi),

    re_path('^employee/$',EmployeeAPI),
    re_path('^employee/([0-9]+)$',EmployeeAPI),

    re_path('^saveFile$',saveFile),
] + static( settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)