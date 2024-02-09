# CarCar

CarCar is an application designed for automobile dealerships to manage their inventory of automobiles, create records of sales and service appointments.

Team:

* Edgar - Sales
* Dylin - Service

## How to Run The Project:

    Ensure the following are installed on your computer:

    Docker Desktop:
        https://www.docker.com/products/docker-desktop/

    Node.js:
        https://nodejs.org/en/download/

    Clone the Repository by running this command in terminal:
        git clone https://gitlab.com/edgarmendoza02/project-beta.git

    Open Docker Desktop run the following commands in terminal:
        docker volume create beta-data
        docker-compose build
        docker-compose up

    You should be able to now access the project at the below referenced URLs.

## Design

Car Car was created utilizing 3 microservices and a user interface accessible via browsers.

Microservices:
    Inventory
    Service
    Sales

User Interface:
    http://localhost:3000

Ports:
    Inventory:8100
    Service: 8080
    Sales: 8090

![Domain Design Document](<Project Beta Domain Driven Design.png>)

## Inventory microservice

The Inventory microsevice contains available automobiles and is the single source of truth for what automobiles have been in the inventory of the dealership. It relies on creating a manufacturer, linking models to that manufacturer and then providing additional details such as vin to create a specific automobile in the inventory.

Inventory is built using 3 models, Manufacturer, VehichleModel and Automobile. All models are entity objects. Data from these models is used to list data and create new objects in the user interface for manufacturers, models and automobiles.

Data contained in the entity models can be accessed in browser here:

    Manufacturer: http://localhost:8100/api/manufacturers/
    VehichleModel: http://localhost:8100/api/models/
    Automobiles: http://localhost:8100/api/automobiles/


Data can be created, updated, viewed, deleted via a REST API client such as Insomnia or Postman utilizing the following methods and URLs:

Manufacturer:

    Create Manufacturer:
        Method: POST
        Endpoint: http://localhost:8100/api/manufacturers/
        Body: JSON
        Sample Content:

        {
			"name": "HotWheel"
		}

        Sample Response:

        {
            "href": "/api/manufacturers/13/",
            "id": 13,
            "name": "HotWheel"
        }

    View all Manufacturers:
        Method: GET
        Endpoint: http://localhost:8100/api/manufacturers/
        Body: None
        Sample Content: NA

        Sample Response:

        {
	        "manufacturers": [
                {
                    "href": "/api/manufacturers/1/",
                    "id": 1,
                    "name": "Ford"
                },
                {
                    "href": "/api/manufacturers/2/",
                    "id": 2,
                    "name": "project"
                }
            ]
        }

    Get a specific manufacturer:

        Method: GET
        Endpoint: http://localhost:8080/api/manufacturers/:id/ <-- Replace ID with ID from Manufacturer Model
        Body: None
        Sample Content: N/A

        Sample Response:

        {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "project"
        }

    Update a specific manufacturer:

        Method: PUT
        Endpoint: http://localhost:8080/api/manufacturers/:id/ <-- Replace ID with ID from Manufacturer Model
        Body: JSON
        Sample Content:

        {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "project12"
        }

        Sample Response:

        {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "project12"
        }

    Delete a specific manufacturer:

        Method: Delete
        Endpoint: http://localhost:8080/api/manufacturers/:id/ <-- Replace ID with ID from Manufacturer Model
        Body: None
        Sample Content:

        None

        Sample Response:

        {

        }

Vehicle Model:

    Create a vehicle model:

        Create Manufacturer:
        Method: POST
        Endpoint: http://localhost:8100/api/models/
        Body: JSON
        Sample Content:

        {
			"href": "/api/models/1/",
			"id": 1,
			"name": "Fusion",
			"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
			"manufacturer": 1
        }

        Sample Response:

        {
			"href": "/api/models/1/",
			"id": 1,
			"name": "Fusion",
			"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Ford"
			}
		}

    View all Models:
        Method: GET
        Endpoint: http://localhost:8100/api/models/
        Body: None
        Sample Content: NA

        Sample Response:

        {
	"models": [
		{
			"href": "/api/models/1/",
			"id": 1,
			"name": "Fusion",
			"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Ford"
			}
		},
		{
			"href": "/api/models/2/",
			"id": 2,
			"name": "Truck",
			"picture_url": "https://static.wixstatic.com/media/bedf17_bb472154f3de48158bbbe155d0052f08~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
			"manufacturer": {
				"href": "/api/manufacturers/5/",
				"id": 5,
				"name": "Tonka"
			}
		}
        ]
        }


    Get a specific model:

        Method: GET
        Endpoint: http://localhost:8080/api/models/:id/ <-- Replace ID with ID from VehichleModel Model
        Body: None
        Sample Content: N/A

        Sample Response:

        {
			"href": "/api/models/1/",
			"id": 1,
			"name": "Fusion",
			"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Ford"
			}
        }

    Update a specific model:

        Method: PUT
        Endpoint: http://localhost:8080/api/models/:id/ <-- Replace ID with ID from VehichleModel Model
        Body: JSON
        Sample Content:

        {
			"href": "/api/models/1/",
			"id": 1,
			"name": "Fusion",
			"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
			"manufacturer": 1
        }

        Sample Response:

        {
			"href": "/api/models/1/",
			"id": 1,
			"name": "Fusion",
			"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
			"manufacturer": 1
        }

    Delete a specific model:

        Method: Delete
        Endpoint: http://localhost:8080/api/models/:id/ <-- Replace ID with ID from VehichleModel Model
        Body: None
        Sample Content:

        None

        Sample Response:

        {

        }

Automobiles Model:

    Create a Automobiles:

        Create Manufacturer:
        Method: POST
        Endpoint: http://localhost:8100/api/automobiles/
        Body: JSON
        Sample Content:

        {
			"color": "Black",
			"year": 2013,
			"vin": "70",
			"model": 1
		}

        Sample Response:

        {
			"href": "/api/automobiles/18000/",
			"id": 19,
			"color": "Black",
			"year": 2013,
			"vin": "18000",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "Fusion",
				"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Ford"
				}
			},
			"sold": false
		}

    View all Automobiles:
        Method: GET
        Endpoint: http://localhost:8100/api/automobiles/
        Body: None
        Sample Content: NA

        Sample Response:

        {
	"autos": [
		{
			"href": "/api/automobiles/18000/",
			"id": 19,
			"color": "Black",
			"year": 2013,
			"vin": "18000",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "Fusion",
				"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Ford"
				}
			},
			"sold": false
		},
		{
			"href": "/api/automobiles/1000/",
			"id": 18,
			"color": "Black",
			"year": 2013,
			"vin": "1000",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "Truck",
				"picture_url": "https://static.wixstatic.com/media/bedf17_bb472154f3de48158bbbe155d0052f08~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
				"manufacturer": {
					"href": "/api/manufacturers/5/",
					"id": 5,
					"name": "Tonka"
				}
			},
			"sold": true
		},
		{
			"href": "/api/automobiles/1/",
			"id": 20,
			"color": "red",
			"year": 2013,
			"vin": "1",
			"model": {
				"href": "/api/models/5/",
				"id": 5,
				"name": "Fusion",
				"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Ford"
				}
			},
			"sold": false
		    }
            ]
        }


    Get a specific Automobiles:

        Method: GET
        Endpoint: http://localhost:8100/api/automobiles/:id/ <-- Replace ID with Vin from Automobile Model
        Body: None
        Sample Content: N/A

        Sample Response:

        {
			"href": "/api/models/1/",
			"id": 1,
			"name": "Fusion",
			"picture_url": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/sunset/frd_fsn_sunset_seg.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Ford"
			}
        }

    Update a specific Automobiles:

        Method: PUT
        Endpoint: http://localhost:8100/api/automobiles/:id/ <-- Replace Vin with ID from Automobile Model
        Body: JSON
        Sample Content:

        {
            "href": "/api/automobiles/1000/",
            "id": 18,
            "color": "Black",
            "year": 2013,
            "vin": "1000",
            "model": {
                "href": "/api/models/2/",
                "id": 2,
                "name": "Truck",
                "picture_url": "https://static.wixstatic.com/media/bedf17_bb472154f3de48158bbbe155d0052f08~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
                "manufacturer": {
                    "href": "/api/manufacturers/5/",
                    "id": 5,
                    "name": "Tonka"
                }
            },
            "sold": true
        }

        Sample Response:

        {
            "href": "/api/automobiles/1000/",
            "id": 18,
            "color": "Black",
            "year": 2013,
            "vin": "1000",
            "model": {
                "href": "/api/models/2/",
                "id": 2,
                "name": "Truck",
                "picture_url": "https://static.wixstatic.com/media/bedf17_bb472154f3de48158bbbe155d0052f08~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
                "manufacturer": {
                    "href": "/api/manufacturers/5/",
                    "id": 5,
                    "name": "Tonka"
                }
            },
            "sold": true
        }

    Delete a specific Automobiles:

        Method: Delete
        Endpoint: http://localhost:8100/api/automobiles/:id/ <-- Replace ID with Vin from Automobile Model
        Body: None
        Sample Content:

        None

        Sample Response:

        {
            "href": "/api/automobiles/1000/",
            "id": 18,
            "color": "Black",
            "year": 2013,
            "vin": "1000",
            "model": {
                "href": "/api/models/2/",
                "id": 2,
                "name": "Truck",
                "picture_url": "https://static.wixstatic.com/media/bedf17_bb472154f3de48158bbbe155d0052f08~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
                "manufacturer": {
                    "href": "/api/manufacturers/5/",
                    "id": 5,
                    "name": "Tonka"
                }
            },
            "sold": true
        }

    Error will be displayed if Automobile does not exist

    These actions can also be taken through the UI by going to the following in your browser:

        Manufacturer:
            Add a Manufacturer: http://localhost:3000/manufacturers/new/
            View Manufacturer: http://localhost:3000/manufacturers/

        Model:
            Add a Model: http://localhost:3000/models/new/
            View Model: http://localhost:3000/models/

        Automobile:
            Add a Automobile: http://localhost:3000/automobiles/create/
            View Automobile: http://localhost:3000/automobiles/list/

## Service microservice

The Service microservice contains available technicians and allows for scheduling of appointments with the dealership. Service allows for scheduling appointments with specific technicians for vehicles regardless of status in inventory, however if the vehichle was sold from the inventory appointment will be identified as a VIP customer/appointment. Service retrieves vins and sales status for vehicles in the inventory via a poller that looks for updates every 60 seconds.

Service is built using 3 models, Technician, AutomobileVO and Appointment. Technician and Appointment are entity objects, while AutomobileVO is a value object that relies on a poller retrieving vin and sales status from the Inventory microservice.  Data from these models is used to list data and create new objects in the user interface for both Technicians and Appointments as well as a Service History.

Data contained in the entity models can be accessed in browser here, access via the Inventory url to view automobile information (it is the single source of truth):
    Technicians: http://localhost:8080/api/technicians/
    Appointments: http://localhost:8080/api/appointments/

Data can be created, updated, viewed, deleted via a REST API client such as Insomnia or Postman utilizing the following methods and URLs:

Technician:

    Create Technician:

        Method: POST
        Endpoint: http://localhost:8080/api/technicians/
        Body: JSON
        Sample Content:

        {
	        "first_name": "Slob",
	        "last_name": "Builderman",
	        "employee_id": "SlobbyB"
        }

        Sample Response:

        {
            "id": 9,
            "first_name": "Slob",
            "last_name": "Builderman",
            "employee_id": "SlobbyB"
        }

    View All Technicians:

        Method: GET
        Endpoint: http://localhost:8080/api/technicians/
        Body: None
        Sample Content: N/A

        Sample Response:

        {
            "technician": [
                {
                    "id": 6,
                    "first_name": "Bob",
                    "last_name": "Billiman",
                    "employee_id": "bobbyB"
                },
                {
                    "id": 7,
                    "first_name": "Jeff",
                    "last_name": "Jeff",
                    "employee_id": "JeffJeff"
                },
                {
                    "id": 9,
                    "first_name": "Slob",
                    "last_name": "Builderman",
                    "employee_id": "SlobbyB"
                }
            ]
        }

    View A Technician:

        Method: GET
        Endpoint: http://localhost:8080/api/technicians/:id/ <-- Replace ID with ID from Technician Model, not Employee ID
        Body: None
        Sample Content: N/A

        Sample Response:

        {
            "id": 7,
            "first_name": "Jeff",
            "last_name": "Jeff",
            "employee_id": "JeffJeff"
        }


    Delete A Technician

        Method: DELETE
        Endpoint: http://localhost:8080/api/technicians/:id/ <-- Replace ID with ID from Technician Model, not Employee ID
        Body: None
        Sample Content: N/A

        Sample Response:

            If technician deleted:

            {
                "message": "Technician deleted"
            }

            404 Error will be displayed if Technician does not exist

Appointment:

    Create an Appointment:

        Method: POST
        Endpoint: http://localhost:8080/api/appointments/
        Body: JSON
        Sample Content:

        {
            "vin": "450000000",
            "customer": "Gary",
            "date_time": "2024-02-08T14:58",
            "technician": "6",
            "reason": "Oil Change"
        }

        Sample Response:

        {
            "id": 53,
            "vin": "450000000",
            "customer": "Gary",
            "date_time": "2024-02-08T14:58",
            "reason": "Oil Change",
            "technician": {
                "id": 6,
                "first_name": "Bob",
                "last_name": "Billiman",
                "employee_id": "bobbyB"
            },
            "status": "Created",
            "sold": false
        }

    View Appointments:

        Method: GET
        Endpoint: http://localhost:8080/api/appointments/
        Body: None
        Sample Content: N/A

        Sample Response:
        {
            "appointments": [
                {
                    "id": 52,
                    "vin": "1234",
                    "customer": "Gary",
                    "date_time": "2024-02-21T12:48:00+00:00",
                    "reason": "Fight",
                    "technician": {
                        "id": 6,
                        "first_name": "Bob",
                        "last_name": "Billiman",
                        "employee_id": "bobbyB"
                    },
                    "status": "Created",
                    "sold": false
                },
                {
                    "id": 48,
                    "vin": "450000000",
                    "customer": "Gary",
                    "date_time": "2024-02-08T14:58:00+00:00",
                    "reason": "Oil Change",
                    "technician": {
                        "id": 6,
                        "first_name": "Bob",
                        "last_name": "Billiman",
                        "employee_id": "bobbyB"
                    },
                    "status": "Canceled",
                    "sold": false
                },
                {
                    "id": 49,
                    "vin": "70123",
                    "customer": "Gary",
                    "date_time": "2024-02-29T12:36:00+00:00",
                    "reason": "Fight",
                    "technician": {
                        "id": 6,
                        "first_name": "Bob",
                        "last_name": "Billiman",
                        "employee_id": "bobbyB"
                    },
                    "status": "Finished",
                    "sold": false
                },
                {
                    "id": 50,
                    "vin": "70",
                    "customer": "Gary",
                    "date_time": "2024-03-09T12:38:00+00:00",
                    "reason": "Fight",
                    "technician": {
                        "id": 6,
                        "first_name": "Bob",
                        "last_name": "Billiman",
                        "employee_id": "bobbyB"
                    },
                    "status": "Finished",
                    "sold": false
                }
            ]
        }

    View an Appointment:

        Method: GET
        Endpoint: http://localhost:8080/api/appointments/:id/ <-- Replace ID with ID from Appointment Model, not Employee ID
        Body: None
        Sample Content: N/A

        Sample Response:

        {
            "id": 52,
            "vin": "1234",
            "customer": "Gary",
            "date_time": "2024-02-21T12:48:00+00:00",
            "reason": "Fight",
            "technician": {
                "id": 6,
                "first_name": "Bob",
                "last_name": "Billiman",
                "employee_id": "bobbyB"
            },
            "status": "Created",
            "sold": false
        }

    Delete an Appointment:

        Method: DELETE
        Endpoint: http://localhost:8080/api/appointments/:id/ <-- Replace ID with ID from Appointment Model, not Employee ID
        Body: None
        Sample Content: N/A

        Sample Respone:

         If appointment was deleted:

        {
            "message": "Appointment was deleted"
        }

        404 Error will be displayed if Appointment does not exist

These actions can also be taken through the UI by going to the following in your browser:

Technician:
    Add a Technician: http://localhost:3000/service/technicians/new/
    View Technicians: http://localhost:3000/service/technicians/

Appointment:
    Add an Appointment: http://localhost:3000/service/appointments/new/
    View Appointments: http://localhost:3000/service/appointments/
    Service History: http://localhost:3000/service/history/

## Sales microservice


Planned out the route of attack on the project
- Excalidraw: Visualize the problem, review points of friction, and begin to think of the code
- Pseudocode: Commented out - began
- Reviewed Conference Go SPA and Wardrobify to mimic structure and data calling.
- Youtubed Django and Rest videos while working on project to get a better grasp on the frameworks

The Sales microservice contains

Sales is built using 4 models: Sales, Salesperson, Customer, and AutomobileVO. AutomobileVO is a Value Object that polls the monolith to recieve data every 60 seconds regarding inventory.

Sales:

    CREATE SALE

        Method: POST
        Endpoint: http://localhost:8090/api/sales/
        Body: JSON
        Sample Content:

            {
                "automobile": "5YJ3E1EAXJF033340",
                "salesperson": "1",
                "customer": "2",
                "price": "10000"
            }

    VIEW SALES
        Method: GET
        Endpoint: http://localhost:8090/api/sales/
        Body: JSON
        Sample Content:

            {
                "sales": [
                    {
                        "id": 1,
                        "automobile": {
                            "id": 3,
                            "vin": "5TFEM5F11EX067924",
                            "sold": false
                        },
                        "salesperson": {
                            "id": 1,
                            "first_name": "Edgar ",
                            "last_name": "Mendoza",
                            "employee_id": "5959"
                        },
                        "customer": {
                            "id": 1,
                            "first_name": "Edgar",
                            "last_name": "Mendoza",
                            "address": "01 Gold St",
                            "phone_number": "555-555-5555"
                        },
                        "price": "10000"
                    },
                    {
                        "id": 14,
                        "automobile": {
                            "id": 2,
                            "vin": "5YJ3E1EAXJF033340",
                            "sold": false
                        },
                        "salesperson": {
                            "id": 4,
                            "first_name": "Lewis",
                            "last_name": "Tharon",
                            "employee_id": "3123"
                        },
                        "customer": {
                            "id": 2,
                            "first_name": "Margot",
                            "last_name": "Robbie",
                            "address": "123 White House Ln",
                            "phone_number": "5556667777"
                        },
                        "price": "15000"
                    }
                ]
            }


Salesperson/Salespeople:

    CREATE SALESPERSON

        Method: POST
        Endpoint: http://localhost:8090/api/salespeople/
        Body: JSON
        Sample Content:

            {
                "first_name": "Lewis",
                "last_name": "Tharon",
                "employee_id": "3123"
            }

    LIST SALESPEOPLE

        Method: GET
        Endpoint: http://localhost:8090/api/salespeople/
        Body: JSON
        Sample Content:
            {
                "salesperson": {
                    "id": 4,
                    "first_name": "Lewis",
                    "last_name": "Tharon",
                    "employee_id": "3123"
                }
            }

Customer(s):


    CREATE CUSTOMER

        Method: POST
        Endpoint: http://localhost:8090/api/customers/
        Body: JSON
        Sample Content:

            {
                "first_name": "Margot",
                "last_name": "Robbie",
                "address": "123 White House Ln",
                "phone_number": "5556667777"
            }

    LIST CUSTOMERS

        Method: GET
        Endpoint: http://localhost:8090/api/customers/
        Body: JSON
        Sample Content:

            {
            "customers": [
            {
                "id": 1,
                "first_name": "Edgar",
                "last_name": "Mendoza",
                "address": "01 Gold St",
                "phone_number": "555-555-5555"
            },
            {
                "id": 2,
                "first_name": "Margot",
                "last_name": "Robbie",
                "address": "123 White House Ln",
                "phone_number": "5556667777"
            }
            ]
        }

AutomobileVO:
--------
- Consists of VIN Number, has no API endpoint.

- A GET request is made very 60 seconds
