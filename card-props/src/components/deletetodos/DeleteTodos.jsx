import React from "react";
import { useState } from "react";
function DeleteTodos() {
  const [myInp, setMyInp] = useState("");
  const [myTodos, setMyTodos] = useState([]);

  const handleAddTodo = () => {
    if (myInp.trim() !== "") {
      setMyTodos([...myTodos, myInp]);
      setMyInp("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [];
    for (let i = 0; i < myTodos.length; i++) {
      if (i !== index) {
        updatedTodos.push(myTodos[i]);
      }
    }
    console.log(updatedTodos);
    setMyTodos(updatedTodos);
  };
  
  return (
    <div>
      <input
        type="text"
        value={myInp}
        onChange={(e) => setMyInp(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {myTodos.map((todo, index) => (
          <div key={index}>
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteTodos;
