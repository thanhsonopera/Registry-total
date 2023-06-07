from django.urls import path
from . import views

urlpatterns = [
    path('center/', views.center, name='center'),
]