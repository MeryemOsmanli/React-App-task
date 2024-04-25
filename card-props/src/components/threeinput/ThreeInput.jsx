import React from "react";
import { useState } from "react";

function ThreeInput() {
  //   const [myInp, setmyInp] = useState("");

  //   const [myTodos, setmyTodos] = useState([]);

  //   function handleBtn() {
  //     setmyTodos([...myTodos, myInp]);
  //     setmyInp("");
  //     console.log(myInp);
  //   }
  const [myinp1, setmyinp1] = useState("");
  const [myinp2, setmyinp2] = useState("");
  const [myinp3, setmyinp3] = useState("");
  const [todos, settodos] = useState([]);
  function handleBtn() {
    settodos([
      ...todos,
      {
        myinp1,
        myinp2,
        myinp3,
      },
    ]);
    //     setmyInp("");
  }
  console.log(todos);
  return (
    <div>
      <input type="text" onChange={(e) => setmyinp1(e.target.value)} />
      <br />
      <input type="text" onChange={(e) => setmyinp2(e.target.value)} />
      <br />
      <input type="text" onChange={(e) => setmyinp3(e.target.value)} />
      <br />
      <button onClick={() => handleBtn()}>add</button>
      <div>
        {todos.map((x, i) => (
          <>
            <h2 key={i}>{x.myinp1}</h2>
            <h6 key={i}>{x.myinp2}</h6>
            <img src={x.myinp3} alt="" />
          </>
        ))}
      </div>
    </div>
  );
}

export default ThreeInput;
