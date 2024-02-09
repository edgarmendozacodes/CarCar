import React, { useEffect, useState } from 'react';

function ListSaleHistory() {
    const [sales, setSales] = useState([]);
    const [salespeople, setSalesPeople] = useState([]);
    const [salesperson, setSalesPerson] = useState('');

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
    };

    const getSalesData = async () => {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales);
        }
    };

    const getSalesPersonData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesPeople(data.salespeople);
        }
    };

    function filterSalesBySalesperson() {
        return sales.filter((sale) => sale.salesperson.id === parseInt(salesperson));
    }

    useEffect(() => {
        getSalesData();
        getSalesPersonData();
    }, []);
   
    return (
        <div className="shadow p-4 mt-4">
            <h1>Salesperson History</h1>
            <div className="form-floating mb-2">
                <select 
                    onChange={handleSalespersonChange} 
                    value={salesperson} 
                    name="salesperson" 
                    id="salesperson" 
                    className="form-select d-inline-flex" 
                    aria-label="Default select example" 
                >
                    <option>Choose a Salesperson!</option>
                    {salespeople.map((salesperson) => (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.first_name}
                        </option>
                    ))}
                </select>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr className="table-success">
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filterSalesBySalesperson().map((sale)=> (
                    // {sales.map((sale) => {
                    //     return (
                            <tr key={sale.id}>
                                <td>{sale.salesperson.employee_id}</td>
                                <td>{`${sale.salesperson.first_name} ${sale.salesperson.last_name}`}</td>
                                <td>{`${sale.customer.first_name} ${sale.customer.last_name}`}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>${sale.price}</td>
                            {/* </tr>);
                    })
                    } */}
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSaleHistory;
