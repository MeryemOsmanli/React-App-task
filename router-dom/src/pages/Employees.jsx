import React, { useEffect, useState } from "react";

function Employees() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    getAllInformation();
  }, []);
  // butun datanin fetch edilmesi
  async function getAllInformation() {
    const res = await fetch("https://northwind.vercel.app/api/products");
    const data = await res.json();
    setInformation(data);
  }
  async function handleDelete(id) {
    const res = await fetch("https://northwind.vercel.app/api/products/" + id, {
      method: "delete",
    });
    const data = await res.json();
    await getAllInformation();
  }
  return (
    <>
      Employees
      <table style={{ border: "1px solid black" }}>
        <tbody>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
          {information.map((x) => (
            <tr key={x.id} style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>{x.name}</td>
              <td style={{ border: "1px solid black" }}>{x.unitPrice}</td>
              <td>
                <button onClick={() => handleDelete(x.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Employees;
