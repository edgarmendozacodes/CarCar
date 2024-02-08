import React, {useEffect, useState} from 'react';

function ListAllSales() {

    const [salesData, setsalesData] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json();
            setsalesData(data.sales);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(

            <div className="shadow p-4 mt-4">
                <h1> Sales List </h1>
                <table className="table table-striped">
                    <thead>
                        <tr className="table-success">
                            <th> Salesperson Employee ID </th>
                            <th> Salesperson Name </th>
                            <th> Customer </th>
                            <th> VIN </th>
                            <th> Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData?.map((sales) => (
                            <tr key={sales.id}>
                                <td>{sales.salesperson.employee_id}</td>
                                <td>{sales.salesperson.first_name}</td>
                                <td>{sales.salesperson.last_name}</td>
                                <td>{sales.autombile.vin}</td>
                                <td>{sales.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}
export default ListAllSales;
