
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todos() {
  const [myInp, setmyInp] = useState("");
  const [myTodos, setmyTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault()
    
  }

  function handleBtn() {
    setmyTodos([...myTodos, myInp]);
    setmyInp("");
    console.log(myInp);
  }
  // const[myTodos,setmyTodos]= useState("")
  // const[myInp,setmyInp]= useState([])
  
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   setmyTodos(...myTodos,{name:myInp,id:uuidv4()})
  //   setmyInp("")
  // }
  // function handleChange(e) {
  //   const[myInp,setmyInp]= useState([])
  //   (e.target.value)
    
  // }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={myInp}
        onChange={(e) => setmyInp(e.target.value)}
      />
      <button onClick={() => handleBtn()}>add</button>
      <div>
        {myTodos.map((x, i) => (
          <h2 key={x.id}>{x}</h2>
        ))}
      </div>
      </form>
      {/* <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" onChange={handleChange} value={myInp} />
        <button>add</button>
      </form>
      <ol>
        {myTodos.map((x)=>(
          <li key={x.id}>{x.name}</li>
        ))}
      </ol> */}
      
    </div>
  );
}

export default Todos;
