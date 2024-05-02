import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployees() {
  const [nameInp, setnameInp] = useState("");
  const [priceInp, setpriceInp] = useState("");

  const navigate = useNavigate();

  async function handleAdd(obj) {
    const res = await fetch("https://northwind.vercel.app/api/products/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const data = await res.json();

    navigate("/admin/employees");
    // await getAllInformation();
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newObj = {
      name: nameInp,
      unitPrice: priceInp,
    };
    // setnameInp("");
    handleAdd(newObj);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameInp}
          onChange={(e) => setnameInp(e.target.value)}
        />
        <input
          type="text"
          value={priceInp}
          onChange={(e) => setpriceInp(e.target.value)}
        />
        <br />
        <button>Add</button>
      </form>
      {/* {information.map((x) => (
        <div key={x.id}>
          <h3>{x.name}</h3>
          <button>delete</button>
        </div>
      ))} */}
    </div>
  );
}

export default AddEmployees;
