import { useEffect, useState } from 'react';

function SearchList () {

    const [searchVin, setSearchVin] = useState('');
    const [appointments, setAppointments] = useState([]);

    const getSearchData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        try{
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
            setSearchVin('');
        } }catch(e) {
            console.log("Error fetching appointments", e)
          }
    };

    useEffect(()=>{
        getSearchData();
    }, [])


    const handleSearchChange = (event) => {
        event.preventDefault();
        setSearchVin(event.target.value);
    };
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        if(searchVin.length > 0) {
            const searchData = appointments.filter(appointment => appointment.vin===(searchVin));
            setAppointments(searchData);
            setSearchVin('');
            } else {
                getSearchData();
            }
    };

    return (
        <>
        <div>
            <h1 className='text-center'>Service History</h1>
        </div>
        <div className="input-group mb-3">
            <input onChange={handleSearchChange} type="text" className="form-control" placeholder="Search by VIN..." aria-label="Search by VIN..." aria-describedby="button-addon2" autoComplete='off' id='search' name='search' />
            <button onClick={handleSearchSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
        <div>
        <table className="table table-striped">
            <thead>
                <tr className="table-success">
                    <th>VIN</th>
                    <th>VIP</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                    <tr key={appointment.id}>
                        <td>{ appointment.vin }</td>
                        <td>{ appointment.sold ? "Yes" : "No" }</td>
                        <td>{ appointment.customer }</td>
                        <td>{ new Date(appointment.date_time).toLocaleDateString() }</td>
                        <td>{ new Date(appointment.date_time).toLocaleTimeString() }</td>
                        <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                        <td>{ appointment.reason }</td>
                        <td>{ appointment.status }</td>
                    </tr>);
            })
            }
            </tbody>
        </table>
        </div>
        </>
    );
}


export default SearchList;
