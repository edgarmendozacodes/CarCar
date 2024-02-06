import { useEffect, useState } from 'react';

function CreateModel(){
    const [manufacturers, setManufacturers] = useState([])
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('')
    const [manufacturer, setManufacturer] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();


        const data = {};
        data.manufacturer_id = manufacturer;
        data.name = name;
        data.picture_url = picture;

        const modelUrl = 'http://localhost:8100/api/models/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(modelUrl, fetchConfig);
        if( response.ok){
            setName('')
            setPicture('')
            setManufacturer('')
        }
    }


    const getData = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/');

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePictureChange = (event) => {
        setPicture(event.target.value)
    }
    const handleManufacturerChange = (event) => {
        setManufacturer(event.target.value)
    }

    useEffect(() => {
        getData();
    }, []);

    return (
    <>
    <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Vehicle Model</h1>
                    <form onSubmit={handleSubmit} id="create-vehicle-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Model Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePictureChange} value={picture} placeholder="Picture" required type="text" name="picture" id="picture" className="form-control" />
                            <label htmlFor="picture">Picture URL </label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleManufacturerChange} value={manufacturer} required name="manufacturer" id="manufacturer" className="form-select">
                            <option value="">Choose a Manufacturer</option>
                            {manufacturers.map(manufacturer => {
                                return (
                                    <option key={manufacturer.name} value={manufacturer.id}>
                                        {manufacturer.name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default CreateModel
