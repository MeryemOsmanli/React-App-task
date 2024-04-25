import React from "react";
import "./inputStyle.css";
import { useState } from "react";

function Input() {
  const [myInp, setmyInp] = useState("");

  function handleButton() {
    alert(myInp);
  }

  //   function handleInp(e, setState) {
  //     setState(e.target.value);
  //   }
  return (
    <div>
      <input
        type="text"
        value={myInp}
        // onChange={(e) => handleInp(e, setmyInp)}
        onChange={(e) => setmyInp(e.target.value)}
      />
      <button onClick={() => handleButton()}>show</button>
    </div>
  );
}

export default Input;
