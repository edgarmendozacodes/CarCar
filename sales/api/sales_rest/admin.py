from django.contrib import admin
from .models import SalesPerson

# Register your models here.
@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass
