import React, {useEffect, useState} from 'react';

function SalesPersonList() {
    const [salespeople, setSalespeople] = useState([]);

    const fetchData = async () => {
            const url = 'http://localhost:8090/api/salespeople/';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setSalespeople(data.salespeople);
            } 
        }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
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
                            {salespeople.map((salesperson) => (
                                <tr key={salesperson.id}>
                                    <td>{salesperson.first_name}</td>
                                    <td>{salesperson.last_name}</td>
                                    <td>{salesperson.employee_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SalesPersonList;
