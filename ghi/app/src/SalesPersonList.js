import React, {useEffect, useState} from 'react';

function SalesPersonList() {
    const [salespersons, setSalesPersons] = useState([]);

    const fetchData = async () => {
            const url = 'http://localhost:8090/api/salespeople/';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setSalesPersons(data.salespeople);
            } 
        }

    useEffect(() => {
        fetchData();
    }, []);

    return (
                <div className="shadow p-4 mt-4">
                    <h1> Salespeople List </h1>
                    <table className="table table-striped">
                        <thead>
                            <tr className="table-success">
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> Employee ID </th>
                            </tr>
                        </thead>
                        <tbody>
                            {salespersons?.map((salespeople) => (
                                <tr key={salespeople.id}>
                                    <td>{salespeople.first_name}</td>
                                    <td>{salespeople.last_name}</td>
                                    <td>{salespeople.employee_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

    );
}

export default SalesPersonList;
