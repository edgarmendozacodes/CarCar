import React, { useState } from 'react';

function SalesPersonForm() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [employee_id, setEmployeeId] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value; 
        setFirstName(value);
    }
    const handleLastNameChange = (event) => {
        const value = event.target.value; 
        setLastName(value);
    }    
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value; 
        setEmployeeId(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault(); 
  
        const data = {};
            data.first_name =first_name;
            data.last_name=last_name;
            data.employee_id=employee_id;
        
        const salesPersonUrl = 'http://localhost:8090/api/salespeople/'
        
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }
        console.log(data);
        const response = await fetch(salesPersonUrl, fetchConfig);
        if (response.ok) {
            setFirstName('');
            setLastName('');
            setEmployeeId('');
        };     
    }
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1> Add a SalesPerson </h1>

                    <form onSubmit={handleSubmit} id="add-salesPerson">

                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} value={first_name} placeholder="FirstName" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="first_name">First Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} value={last_name} placeholder="LastName" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeIdChange} value={employee_id} placeholder="EmployeeID" required type="text" name="employee_id" id="employee_id" className="form-control" />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>

                        <button className="btn btn-primary"> Create </button>
                    </form>

                </div>    
            </div>
        </div>
    );
}
export default SalesPersonForm;
