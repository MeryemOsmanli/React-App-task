import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Task2() {
  const [myInp, setmyInp] = useState("");
  // const [todo, setTodo] = useState([]);
  // const [myInp, setmyInp] = useLocalStorage("myInp", "");
  const [todo, setTodo] = useLocalStorage("todoList", []);
  // todo nun add edilmesi
  function handleAdd() {
    setTodo([...todo, myInp]);
    setmyInp("");
  }
  // todo n un delete olunmasi
  function handleDelete(index) {
    setTodo(todo.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={myInp}
        onChange={(e) => setmyInp(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>
      {/* todolarin ekranda gorunmesi  */}
      <div>
        {todo.map((x, index) => (
          <div key={index}>
            <h2 key={x.id}>{x}</h2>
            <button onClick={() => handleDelete(index)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task2;
