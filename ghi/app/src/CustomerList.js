import React, {useEffect, useState} from 'react';

function CustomerList() {

    const [customer, setCustomer] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json();
            setCustomer(data.customer);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1> Salespeople List </h1>
                <table className="table table-striped">
                    <thead>
                        <tr className="table-success">
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Address </th>
                            <th> Phone Number </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((customers) => (
                            <tr key={customers.id}>
                                <td>{customers.first_name}</td>
                                <td>{customers.last_name}</td>
                                <td>{customers.address}</td>
                                <td>{customers.phone_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}
export default CustomerList;
