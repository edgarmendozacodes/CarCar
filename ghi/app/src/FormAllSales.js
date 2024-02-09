import React, { useState, useEffect } from 'react';

function FormAllSales() {

    const [price, setPrice] = useState('');

    const [automobiles, setObjectAutomobiles] = useState([]); 
    const [automobile, setAutomobile] = useState('');

    const [salespersons, setObjectSalespersons] = useState([]);
    const [salesperson, setSalesperson] = useState('');
    
    const [customer, setCustomer] = useState('');
    const [customers, setObjectCustomers] = useState([]);

    const handlePriceChange = (event) => {
        const value = event.target.value; 
        setPrice(value);
    }
    const handleAutomobileChange = (event) => {
        const value = event.target.value; 
        setAutomobile(value);
    }       
    const handleSalespersonChange = (event) => {
        const value = event.target.value; 
        setSalesperson(value);
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value; 
        setCustomer(value);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault(); 
  
        const data = {};
            data.automobile =automobile;
            data.salesperson=salesperson;
            data.customer=customer;
            data.price=price;

        const salesUrl = 'http://localhost:8090/api/sales/' // Site is up & ready to recieve information
        
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }
       
        const response = await fetch(salesUrl, fetchConfig);
        console.log(response)
        if (response.ok) {
            setPrice('');
            setAutomobile('');
            setSalesperson('');
            setCustomer('');
        };     
        console.log(data)
    }

    useEffect(() => {    // DATA THAT NEEDS TO BE BROUGHT IN TO PROJECT && filters the sold autos

        async function getAutomobiles() {
            const url = "http://localhost:8100/api/automobiles/";
            const response = await fetch(url);
            if (response.ok) {
              const data = await response.json();
              const availableAutomobiles = data.autos.filter((auto) => !auto.sold); 
              setObjectAutomobiles(availableAutomobiles);
            }
          }
          async function getSalespersons() {
            const url = "http://localhost:8090/api/salespeople/";
            const response = await fetch(url);
            if (response.ok) {
              const data = await response.json();
              setObjectSalespersons(data.salespeople);
            }
          }
      
          async function getCustomers() {
            const url = "http://localhost:8090/api/customers/";
            const response = await fetch(url);
            if (response.ok) {
              const data = await response.json();
              setObjectCustomers(data.customers)
            }
          }
      
          getAutomobiles();
          getSalespersons();
          getCustomers();
        }, []);
      

    return(

                <div className="shadow p-4 mt-4">
                    <h1> Record A New Sale!</h1>

                    <form onSubmit={handleSubmit} id="create-sale-record">

                        <div className="form-floating mb-3">
                            <select required value={automobile} onChange={handleAutomobileChange}  placeholder="Automobile" type="text" name="automobile" id="automobile" className="form-control" >
                            <option value=''> Automobile VIN .. </option>
                            {automobiles?.map(auto => {return (
                                <option key= {auto.id} value = {auto.vin}> {auto.vin} </option>
                            )})}
                            </select>
                        </div>

                        <div className="form-floating mb-3">
                            <select required value={salesperson} onChange={handleSalespersonChange}  placeholder="Salesperson" type="text" name="salesperson" id="salesperson" className="form-control" >
                            <option value=''> Select a Salesperson .. </option>
                            {salespersons.map(salesperson => {return (
                                <option key= {salesperson.id} value = {salesperson.id} > {salesperson.first_name} {salesperson.last_name} </option>
                            )})}
                            </select>
                        </div>

                        <div className="form-floating mb-3">
                            <select required value={customer} onChange={handleCustomerChange}  placeholder="Customer" type="text" name="customer" id="customer" className="form-control" >
                            <option value=''> Select Customer .. </option>
                            {customers?.map(customer => {return (
                                <option key= {customer.id} value = {customer.id} > {customer.first_name} {customer.last_name}</option>
                            )})}
                            </select>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} value={price} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
                            <label htmlFor="price"> Price ..</label>
                        </div> 

                        <button className="btn btn-primary"> Create </button>
                    </form>

                </div>    

    );
}
export default FormAllSales;
