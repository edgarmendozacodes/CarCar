import json
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import SalesPerson, Customer, AutomobileVO
from common.json import ModelEncoder

# Create your views here.
class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "first_name",
        "last_name", 
        "employee_id"
    ]

class CustomerEncoder(ModelEncoder):
    model= Customer
    properties = [
        "first_name", 
        "last_name", 
        "address",
        "phone_number"
    ]

@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder = SalesPersonEncoder, 
        )
# GET: Retrieves list using objects.all, then JsonResponse, ModelEncoder
# takes data and serializes queryset into JSONFormat  
    else: 
        content = json.loads(request.body) 
        salesperson=SalesPersonEncoder.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )
# POST: Loads JSON data, creates new salesperson -> encoder converts data 
# salesperson object to JSON Data. safe=false (need to clarify)  

@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customer=Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=Customer,
            # safe=False, dont know if this is necessary
        )
    else: 
        content=json.loads(request.body)
        customer=CustomerEncoder.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
