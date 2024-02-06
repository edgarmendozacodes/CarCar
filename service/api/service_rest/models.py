from django.db import models

class Technician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.CharField(max_length=100)

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    vin = models.CharField(max_length=17)
    technician = models.ForeignKey(
        Technician,
        related_name="+",
        on_delete=models.PROTECT
    )

    def __str__(self):
        return self.name
