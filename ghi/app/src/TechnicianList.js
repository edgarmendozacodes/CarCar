import { useEffect, useState } from 'react';

function TechniciansList() {
    const [technician, setTechnicians] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/technicians/');

    if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technician);
    }
}

    useEffect(() => {
        getData();
    }, [])

    const handleDelete = async (techId) => {
        const response = await fetch(`http://localhost:8080/api/technicians/${techId}`, {
          method: 'DELETE',
        });
        try{
          if (response.ok) {
            getData();
        }}catch(e){
          console.log("Error Deleting Item", e)
        }
      }

    return (
        <div>
            <div className="row">
                <div className="offset-3 col-8">
                    <div className="shadow p-4 mt-4">
                    <h1>Technicians</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Employee ID</th>
                            <th>Delete Technician</th>
                            </tr>
                        </thead>
                    <tbody>
                        {technician.map(tech => {
                            return (
                                <tr key={tech.id}>
                                <td>{tech.first_name}</td>
                                <td>{tech.last_name}</td>
                                <td>{tech.employee_id}</td>
                                <td>
                                    <button onClick={() => handleDelete(tech.id)} className="btn btn-danger">Delete</button>
                                </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    </table>
                        </div>
                        </div>
                        </div>
        </div>
    );
    }

export default TechniciansList;
