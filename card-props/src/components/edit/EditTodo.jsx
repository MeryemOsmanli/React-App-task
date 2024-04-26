import React from "react";
import { useState } from "react";

function EditTodo() {
  const [myInp, setMyInp] = useState("");
  const [myTodos, setMyTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleAddTodo = () => {
    if (myInp.trim() !== "") {
      setMyTodos([...myTodos, { text: myInp, completed: false }]);
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

  const handleCompleteTodo = (index) => {
    const updatedTodos = myTodos.map((x, i) => {
      if (i === index) {
        return { ...x, completed: !x.completed };
      } else {
        return x;
      }
    });
    setMyTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEdit(index);
    setMyInp(myTodos[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = [...myTodos];
    updatedTodos[index].text = myInp;
    setMyTodos(updatedTodos);
    setEdit(null);
    setMyInp("");
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
        {myTodos.map((x, index) => (
          <div
            key={index}
            style={{ textDecoration: x.completed ? "line-through" : "none" }}
          >
            {edit === index ? (
              <input
                type="text"
                value={myInp}
                onChange={(e) => setMyInp(e.target.value)}
              />
            ) : (
              <span>{x.text}</span>
            )}
            <button onClick={() => handleDeleteTodo(index)}>x</button>

            {edit === index ? (
              <button onClick={() => handleSaveEdit(index)}>Save</button>
            ) : (
              <button onClick={() => handleEditTodo(index)}>Edit</button>
            )}

            <button onClick={() => handleCompleteTodo(index)}>Complete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditTodo;
