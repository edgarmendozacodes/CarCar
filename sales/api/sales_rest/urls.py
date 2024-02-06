from django.urls import path
from .views import api_list_customer, api_list_salesperson

ulrpatterns = [
    path("sales/", api_list_salesperson, name="api_list_salesperson"),
    path("sales/<int:pk>", api_list_customer, name="api_list_customer"),
]
