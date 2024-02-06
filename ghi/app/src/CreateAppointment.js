import React, { useEffect, useState } from 'react';

function CreateAppointment(){
    const [technicians, setTechnicians] = useState([])
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('')
    const [date, setDate] = useState('')
    const [tech, setTech] = useState('')
    const [reason, setReason] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();


        const data = {};
        data.vin = vin;
        data.customer = customer;
        data.date_time = date;
        data.technician = tech
        data.reason = reason

        console.log(data)

        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        if( response.ok){
            setVin('')
            setCustomer('')
            setDate('')
            setTech('')
            setReason('')
        }
    }


    const getTechData = async () => {
        const response = await fetch('http://localhost:8080/api/technicians/');

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technician)
        }
    }

    const handleVinChange = (event) => {
        setVin(event.target.value)
    }
    const handleCustomerChange = (event) => {
        setCustomer(event.target.value)
    }
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleTechChange = (event) => {
        setTech(event.target.value)
    }

    const handleReasonChange = (event) => {
        setReason(event.target.value)
    }

    useEffect(() => {
        getTechData();
    }, []);

    return (
    <>
    <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Vehicle Model</h1>
                    <form onSubmit={handleSubmit} id="create-vehicle-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} value={vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleCustomerChange} value={customer} placeholder="customer" required type="text" name="customer" id="customer" className="form-control" />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleDateChange} value={date} placeholder="date" required type="datetime-local" name="date" id="date" className="form-control" />
                            <label htmlFor="date">Select Appointment Time</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleTechChange} value={tech} required name="tech" id="tech" className="form-select">
                            <option value="">Choose a Technician</option>
                            {technicians.map(tech => {
                                return (
                                    <option key={tech.id} value={tech.id}>
                                        {tech.first_name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleReasonChange} value={reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default CreateAppointment
