from django.contrib import admin
from .models import center, owner, registration, inspection

admin.site.register(center)
admin.site.register(owner)
admin.site.register(registration)
admin.site.register(inspection)