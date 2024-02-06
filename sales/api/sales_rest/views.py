import json
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import SalesPerson, Customer, AutomobileVO
from common.json import ModelEncoder

# Create your views here.
@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    pass

@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    pass
