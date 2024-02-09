import json
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import SalesPerson, Customer, AutomobileVO, Sale
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id", 
        "vin",
        "sold",
    ]
class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "first_name",
        "last_name", 
        "employee_id",
    ]

class CustomerEncoder(ModelEncoder):
    model= Customer
    properties = [
        "id",
        "first_name", 
        "last_name", 
        "address",
        "phone_number",
    ]

class SalesEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "automobile",
        "salesperson",
        "customer",
        "price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }


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
            safe=False
        )
    else: 
        content = json.loads(request.body) 

        try: # salesperson lookup, 404 error if not found - by id
            automobile_id=content['automobile']
            automobile=AutomobileVO.objects.get(vin=automobile_id)
            content['automobile'] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse({'message': 'Automobile does not exist'}, status = 404 )
        
        try:
            salesperson_id = content['salesperson']
            salesperson = SalesPerson.objects.get(id=salesperson_id)
            content['salesperson']=salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "No Salesperson found!"}, status = 404)
        
        try:
            customer_id=content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"]=customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "No Customer found!"}, status = 404)
        
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SalesEncoder,
            safe=False,
        )
