import React, { useEffect, useState } from "react";

function Task1() {
  const [search, setSearch] = useState("");
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
// artmaya gore sort olunmasi 
  function sortInc(property) {
    setInformation(
      information.toSorted((a, b) =>
        a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
      )
    );
  }
  // azalmaya gore sort olunmasi 
  function sortDec(property) {
    setInformation(
      information.toSorted((a, b) =>
        a[property] < b[property] ? 1 : b[property] < a[property] ? -1 : 0
      )
    );
  }
  return (
    <div>
      <h1>Filter and Sort</h1>
      <button onClick={() => sortInc("unitPrice")}>increase</button>
      <button onClick={() => sortDec("unitPrice")}>decrease</button>
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <br />
      {/* fetch edilib gelen datanin ekranda gorunmesi  */}
      <div>
        {information
          .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <div key={x.id}>
              <h2>{x.name}</h2>
              <p>{x.unitPrice}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Task1;
