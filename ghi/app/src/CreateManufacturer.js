import React, {useState} from 'react';

function CreateManufacturer(){

    const [name, setName] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name,
        };

    const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
    const fetchConfig = {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    const response = await fetch(manufacturerUrl, fetchConfig);
    if (response.ok) {
    const newManufacturer = await response.json();
      console.log(newManufacturer)
      setName('')
    }
}

function handleNameChange(event) {
    const { value } = event.target;
    setName(value);
  }

return (
<>
<div className='row'>
<div className='offset-3 col-6'>
    <div className='shadow p-4 mt-4'>
    <h1>Add Manufacturer</h1>
    <form onSubmit={handleSubmit} id="create-hat-form">
        <div className='form-floating mb-3'>
        <input value={name} onChange={handleNameChange} placeholder='Name' required type='text' name='name' id='name' className='form-control'/>
        <label htmlFor='name'>Name</label>
        </div>
        <button className='btn btn-primary'>Add Manufacturer</button>
        </form>
    </div>
</div>
</div>
</>
);
}

export default CreateManufacturer
