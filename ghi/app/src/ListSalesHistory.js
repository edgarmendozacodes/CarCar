// import React, { useEffect, useState } from 'react';

// function ListSaleHistory() {

//     const [sales, setSales] = useState([]);
//     const [salespeople, setSalesPeople] = useState([]);

//     const [salesperson, setSalesPerson] = useState('');
//     const handleSalespersonChange = (event) => {
//         const value = event.target.value;
//         setSalesPerson(value);
//     }

//     const getSalesData = async () => {
//         const url = 'http://localhost:8090/api/sales/';
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             setSales(data.sales);
//         }
//     }
//     const getSalesPersonData = async () => {
//         const url = 'http://localhost:8090/api/salespeople/';
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             setSalesPeople(data.salespeople);
//         }
//     }
//     useEffect(() => {
//         getSalesData();
//         getSalesPersonData();
//     }, []);

//     return (

//         <div className="shadow p-4 mt-4">
//             <h1> Sales History </h1>
//             <table className="table table-striped">
//                 <thead>
//                     <tr className="table-success">
//                         <th> Salesperson Employee ID </th>
//                         <th> Salesperson Name </th>
//                         <th> Customer </th>
//                         <th> VIN </th>
//                         <th> Price </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sales.filter((sale) => sale.salesperson?.employee_id === parseInt(salesperson)).map(sale => (
//                         <tr key={sale.id}>
//                             <td>{sale.salesperson?.employee_id}</td>
//                             <td>{`${sale.salesperson?.first_name} ${sale.salesperson?.last_name}`}</td>
//                             <td>{`${sale.customer?.first_name} ${sale.customer?.last_name}`}</td>
//                             <td>{sale.automobile?.vin}</td>
//                             <td>{sale.price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
// export default ListSaleHistory;