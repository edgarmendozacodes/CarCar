import json
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import SalesPerson, Customer, AutomobileVO, Sale
from common.json import ModelEncoder

# Create your views here.
class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "first_name",
        "last_name", 
        "employee_id",
        "id"
    ]

class CustomerEncoder(ModelEncoder):
    model= Customer
    properties = [
        "first_name", 
        "last_name", 
        "address",
        "phone_number"
    ]

class SalesEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer"
    ]
    encoders = {
        "automobile": AutomobileVO,
        "salesperson": SalesPersonEncoder,
        "Customer": CustomerEncoder,
    }
    # nested serialization
    # django-REST-framework.org
    # many to many relationships -> djangoproject

@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salespeople = SalesPerson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder = SalesPersonEncoder, 
        )
# GET: Retrieves list using objects.all, then JsonResponse, ModelEncoder
# takes data and serializes queryset into JSONFormat  
    else: 
        content = json.loads(request.body) 
        salesperson= SalesPerson.objects.create(**content)
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalesPersonEncoder,
            safe=False,
        )
# POST: Loads JSON data, creates new salesperson -> encoder converts data 
# salesperson object to JSON Data. safe=false (need to clarify)  

@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customers=Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            # safe=False, dont know if this is necessary
        )
    else: 
        content=json.loads(request.body)
        customer=Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
@require_http_methods(["GET", "POST"])
def api_list_sale(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder = SalesEncoder, 
        )
        # New Sales are Sales
        # GET: Retrieves list using objects.all, then JsonResponse, ModelEncoder
        # takes data and serializes queryset into JSONFormat  
    else: 
        content = json.loads(request.body) 
        try: # salesperson lookup, 404 error if not found - by id
            salesperson_id = content['salesperson']
            salesperson = SalesPerson.objects.get(id=salesperson_id)
            content['salesperson']=salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "No Salesperson found!"}, status = 404)
        
        try:
            id=content["customer"]
            customer = Customer.objects.get(id=id)
            content["customer"]=customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "No Customer found!"}, status = 404)

        try: # vehicle information: VIN
            vin = content['vin']
            vin = AutomobileVO.objects.get(vin=vin) 
            content["vin"] = vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"message": "No Automobile found!"}, status = 404)

        
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            # {"sale": sale},
            encoder=SalesEncoder,
            safe=False,
        )
        # nested serialization
        # django-REST-framework.org
        # many to many relationships -> djangoproject
    
