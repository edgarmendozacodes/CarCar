import React, { useEffect, useState } from "react";

function ListManufacturers() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {async function fetchManufactures() {
    const manufacturersUrl = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(manufacturersUrl);

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    } else {
      alert("Error fetching manufacturer data");
    }
  }
    fetchManufactures();
  }, []);

  return (
    <>
      <h1>Manufacturers</h1>
      <table className="table table-striped">
        <thead>
          <tr>
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
    </>
  );
}

export default ListManufacturers;
