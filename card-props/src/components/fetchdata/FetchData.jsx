import React, { useState } from "react";
import { useEffect } from "react";
import "../fetchdata/fetchStyle.css";
function FetchData() {
  const [information, setInformation] = useState([]);
  const [nameInp, setNameInp] = useState("");
  const [priceInp, setPriceInp] = useState("");

  useEffect(() => {
    getAllInformation();
  }, []);

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

  async function handleAdd(obj) {
    const res = await fetch("https://northwind.vercel.app/api/products/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    await getAllInformation();
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newObj = {
      name: nameInp,
      unitPrice: priceInp,
    };
    handleAdd(newObj);
  }

  return (
    <div>
      <h1>Data</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nameInp}
            onChange={(e) => setNameInp(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={priceInp}
            onChange={(e) => setPriceInp(e.target.value)}
          />
          <br />
          <button>Add</button>
        </form>
        {information.map((x) => (
          <div
            className="card_box"
            key={x.id}
            style={{ color: x.discontinued ? "green" : "red" }}
          >
            <h3>{x.name}</h3>
            <p>{`${x.unitPrice} $`}</p>
            <button onClick={() => handleDelete(x.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchData;
