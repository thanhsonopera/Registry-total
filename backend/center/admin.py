from django.contrib import admin
from .models import centers, owner, registration, inspection

admin.site.register(centers)
admin.site.register(owner)
admin.site.register(registration)
admin.site.register(inspection)
