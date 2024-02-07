from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Appointment, AutomobileVO, Technician

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "sold"
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id"
    ]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer",
        "date_time",
        "reason",
        "technician",
        "status",
        "sold",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
            safe=False
    )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Could not create technician"},
                status=400
            )


@require_http_methods(["GET", "DELETE"])
def api_show_technicians(request, id):
    if request.method=="GET":
        technician = get_object_or_404(Technician, id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        technicians = get_object_or_404(Technician, id=id)
        technicians.delete()
        return JsonResponse(
            {"message": "Technician deleted"}
            )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


    else:
        try:
            content = json.loads(request.body)
            if AutomobileVO.objects.filter(vin=content["vin"]).exists():
                auto = AutomobileVO.objects.get(vin=content["vin"])
                content["sold"] = auto.sold
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
            content["status"] = "Created"
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
                )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Could not create appointment."},
                status=400
            )



@require_http_methods(["GET", "DELETE"])
def api_show_appointments(request, id):
    if request.method=="GET":
        appointment = get_object_or_404(Appointment, id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    else:
        appointment = get_object_or_404(Appointment, id=id)
        appointment.delete()
        return JsonResponse(
            {"message": "Appointment deleted"}
            )

@require_http_methods(["PUT"])
def  api_finished_appointments(request, id):
    appointment = get_object_or_404(Appointment, id=id)
    appointment.finished()
    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False,
    )


@require_http_methods(["PUT"])
def  api_cancelled_appointments(request, id):
    appointment = get_object_or_404(Appointment, id=id)
    appointment.cancelled()
    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False,
    )
