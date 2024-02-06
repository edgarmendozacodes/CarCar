from django.db import models

# Create your models here.
class SalesPerson(models.Model):
    first_name=models.CharField(max_length=200)
    last_name=models.CharField(max_length=200)
    employee_id=models.CharField(max_length=200)

class Customer(models.Model):
    first_name=models.CharField(max_length=200)
    last_name=models.CharField(max_length=200)
    address=models.CharField(max_length=200)
    phone_number=models.CharField(max_length=200)

class AutomobileVO(models.Model):
    vin=models.CharField(max_length=17, unique=True)
    sold=models.BooleanField(default=False)

class Sale(models.Model):
    price=models.CharField(max_length=200)
    automobile=models.ForeignKey( AutomobileVO, related_name="automobile", on_delete=models.CASCADE)
    salesperson=models.ForeignKey( SalesPerson, related_name="salesperson", on_delete=models.CASCADE)
    customer=models.ForeignKey( Customer, related_name="customer", on_delete=models.CASCADE)
