import { useEffect, useState } from 'react';

function ListModels() {
    const [models, setModels] = useState([]);

    useEffect(()=>{const getData = async () => {
        const response = await fetch('http://localhost:8100/api/models/');

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }
        getData()
    }, [])

    return (
        <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {models.map(model => {
              return (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.manufacturer.name}</td>
                  <td><img style={{ width: 250, height: 200 }} src={model.picture_url} alt={model.name}/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </>
      );
    }

    export default ListModels;
