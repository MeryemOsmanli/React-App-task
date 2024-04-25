import React from "react";
import { useState } from "react";

function Todos() {
  const [myInp, setmyInp] = useState("");
  const [myTodos, setmyTodos] = useState([]);

  function handleBtn() {
    setmyTodos([...myTodos, myInp]);
    setmyInp("");
    console.log(myInp);
  }
  return (
    <div>
      <input
        type="text"
        value={myInp}
        onChange={(e) => setmyInp(e.target.value)}
      />
      <button onClick={() => handleBtn()}>add</button>
      <div>
        {myTodos.map((x, i) => (
          <h2 key={i}>{x}</h2>
        ))}
      </div>
    </div>
  );
}

export default Todos;
