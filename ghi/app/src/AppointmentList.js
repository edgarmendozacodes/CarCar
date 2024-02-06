import { useEffect, useState } from 'react';

function ListAppointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{const getAppointmentData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        } else {
          alert("Error fetching appointment data");
        }
    }
        getAppointmentData()
    }, [])

    return (
        <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Customer</th>
              <th>Date and Time</th>
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.customer}</td>
                  <td>{appointment.date_time}</td>
                  <td>{appointment.technician.employee_id}</td>
                  <td>{appointment.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </>
      );
    }

    export default ListAppointments;
