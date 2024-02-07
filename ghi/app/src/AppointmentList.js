import { useEffect, useState } from 'react';

function ListAppointments() {
  const [appointments, setAppointments] = useState([])

  const getPendingAppointmentData = async () => {
      const response = await fetch('http://localhost:8080/api/appointments/')
      if (response.ok) {
          const data = await response.json();
          console.log(data)
          const created_data = data.appointments.filter(appointment => appointment.status === "Created");
          setAppointments(created_data);
      } else {
          console.log("Unable to Fetch Data")
      }
  }
  useEffect(()=>{
      getPendingAppointmentData();
  }, [])

  const completedAppointment = async (id) => {
      const completedURL = `http://localhost:8080/api/appointments/${id}/finished/`
      const fetchConfig = {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
      }
      const response = await fetch(completedURL, fetchConfig)
      if (response.ok){
          setAppointments(appointments.filter(appointment => appointment.id !== id));
      }
  }

  const cancelledAppointment = async (id) => {
      const cancelledURL = `http://localhost:8080/api/appointments/${id}/cancelled/`
      const fetchConfig = {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
      }
      const response = await fetch(cancelledURL, fetchConfig)
      if (response.ok){
          setAppointments(appointments.filter(appointment => appointment.id !== id));
      }
  }

  return (
      <>
          <div>
              <h1 className='text-center'>Pending Appointments</h1>
          </div>
          <div>
              <table className="table table-striped">
                  <thead>
                      <tr className="table-success">
                          <th>VIN</th>
                          <th>VIP</th>
                          <th>Customer Name</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Technician</th>
                          <th>Reason</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {appointments.map((appointment) => {
                          return (
                          <tr key={appointment.id}>
                              <td>{ appointment.vin }</td>
                              <td>{ appointment.sold ? "Yes" : "No" }</td>
                              <td>{ appointment.customer }</td>
                              <td>{ new Date(appointment.date_time).toLocaleDateString() }</td>
                              <td>{ new Date(appointment.date_time).toLocaleTimeString() }</td>
                              <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                              <td>{ appointment.reason }</td>
                              <td>
                                  <div>
                                      <button type="submit"
                                      className="btn btn-danger"
                                      onClick={() => cancelledAppointment(appointment.id)}>
                                      Cancel
                                      </button>
                                      <button type="submit"
                                      className="btn btn-success"
                                      onClick={() => completedAppointment(appointment.id)}>
                                      Complete
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      )})}
                  </tbody>
              </table>
          </div>
      </>
  );
}


    export default ListAppointments;
