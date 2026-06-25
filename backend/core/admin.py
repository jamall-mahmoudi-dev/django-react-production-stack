from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin
from .models import User, Posts

admin.site.register(Posts)
@admin.register(User)
class UserAdmin(DefaultUserAdmin):
    pass
