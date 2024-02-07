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
    date_time = models.DateTimeField(blank=True)
    reason = models.TextField()
    status = models.CharField(max_length=10, blank=True)
    vin = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        blank=True,
        on_delete=models.PROTECT,
    )
    sold = models.BooleanField(default=False, blank=True)


    def finished(self):
        self.status = "Finished"
        self.save()

    def canceled(self):
        self.status = "Canceled"
        self.save()

    def __str__(self):
        return self.customer
