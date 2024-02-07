import { useState, useEffect } from 'react';

function AutomobileList() {


    const [list, setList] = useState([])


    const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            setList(data.autos); //auto?
        }
    };


    useEffect(() => { //hook
        fetchData(); // call
    }, []); // dependency array; if empty, only run once NOT forever


return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1> Automobiles </h1>
                <table className="table table-striped">
                    <thead>
                        <tr className="table-success">
                            <th> VIN </th>
                            <th> Color </th>
                            <th> Year </th>
                            <th> Model </th>
                            <th> Manufacturer </th>
                            <th> Sold </th>
                        </tr>
                    </thead>
                    <tbody>
                    {list?.map((auto) => {
                        return (
                        <tr key={auto.id} value={auto.id} >
                            <td>{ auto.vin }</td>
                            <td>{ auto.color }</td>
                            <td>{ auto.year }</td>
                            <td>{ auto.model.name }</td>
                            <td>{ auto.model.manufacturer.name }</td>
                            <td>{ auto.sold ? "Yes":"No" }</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
}

export default AutomobileList;
