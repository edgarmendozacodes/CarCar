# CarCar

CarCar is an application designed for automobile dealerships to manage their inventory of automobiles, create records of sales and service appointments.

Team:

* Edgar Mendoza - Sales
* Dylin - Service

## Design

Car Car was created utilizing 3 microservices and a user interface accessible via browsers.

Microservices:
    Inventory
    Service
    Sales

User Interface:
    http://localhost:3000

## Inventory microservice


## Service microservice

The Service microservice contains available technicians and allows for scheduling of appointments with the dealership. Service allows for scheduling appointments with specific technicians for vehicles regardless of status in inventory, however if the vehichle was sold from the inventory appointment will be identified as a VIP customer/appointment. Service retrieves vins and sales status for vehicles in the inventory via a poller that looks for updates every 60 seconds.

Service is built using 3 models, Technician, AutomobileVO and Appointment. Technician and Appointment are entity objects, while AutomobileVO is a value object that relies on a poller retrieving vin and sales status from the Inventory microservice.  Data from these models is used to create list and create views in the user interface for both Technicians and Appointments as well as a Service History.

Data contained in the entity models can be accessed in browser here, access via the Inventory url to view automobile information (it is the single source of truth):
    Technicians: http://localhost:8080/api/technicians/
    Appointments: http://localhost:8080/api/appointments/

Data can be created, updated, viewed, deleted via a REST API client such as Insomnia or Postman utilizing the following methods and URLs:

Technician:

    New Technician:

        Method: POST
        Body: JSON
        Sample Content:

        {
	        "first_name": "Slob",
	        "last_name": "Builderman",
	        "employee_id": "SlobbyB"
        }

    v

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
