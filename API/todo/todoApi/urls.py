from django.urls import URLPattern, include, path

from .views import *

urlpatterns = [
    path('v1/tasklist/', TaskList.as_view(), name='TaskList'),
    path('v1/task/<int:pk>', TaskRetriveUpdate.as_view(), name='Task')
]
