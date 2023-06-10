from django.urls import path
from . import views

urlpatterns = [
    path('center/', views.center1, name='center'),
    path('centers/', views.center_list, name='center-list'),
    path('inspections/', views.inspection_list, name='inspection_list'),
    path('owners/', views.owner_list, name='owner_list'),
    path('registrations/', views.registration_list, name='registration_list'),
]
