from django.urls import path
from . import views

urlpatterns = [
    path('Center_feature/', views.Center_feature, name='Center_feature'),
]
