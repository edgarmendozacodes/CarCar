from django.urls import path

from .views import (
api_list_appointments,
api_show_appointments,
api_list_technicians,
api_show_technicians
)

urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:id>/", api_show_appointments, name="api_show_appointment"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:id>/", api_show_technicians, name="api_detail_technicians"),
]
