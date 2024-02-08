import { useEffect, useState } from "react";

function ListManufacturers() {
  const [manufacturers, setManufacturers] = useState([]);


  useEffect(() => {async function fetchManufactures() {
    const manufacturersUrl = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(manufacturersUrl);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  }
    fetchManufactures();
  }, []);


  return (
      <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Manufacturers</h1>
                        <table className="table table-striped">
                          <thead>
                            <tr className="table-success">
                              <th>Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {manufacturers.map((manufacturer) => {
                              return (
                                <tr key={manufacturer.id}>
                                  <td>{manufacturer.name}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                  </div>
              </div>
          </div>
      </>
  );
}

export default ListManufacturers;
