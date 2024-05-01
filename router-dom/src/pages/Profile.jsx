import React, { useEffect, useState } from "react";
import "../sass/_profile.scss";

function Profile() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    getAllInformation();
  }, []);

  async function getAllInformation() {
    const res = await fetch("https://northwind.vercel.app/api/products");
    const data = await res.json();
    setInformation(data);
  }
  return (
    <div>
      Profile
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
  );
}

export default Profile;
