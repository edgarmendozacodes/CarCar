from django.urls import path
from .views import api_list_customer, api_list_salesperson, api_list_sale

urlpatterns = [
    path("salespeople/", api_list_salesperson, name="api_list_salesperson"),
    path("customers/", api_list_customer, name="api_list_customer"),
    path("sales/", api_list_sale, name="api_list_sale"),
]
