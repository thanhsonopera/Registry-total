from django.apps import AppConfig

from .models import inspection


class CenterConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'center'
