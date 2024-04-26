import React from "react";
import { useState } from "react";
import "./modeStyle.css";

function ModeChange() {
  const [myInp, setMyInp] = useState("");
  const [myTodos, setMyTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <input
        type="text"
        value={myInp}
        onChange={(e) => setMyInp(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div>
        {myTodos.map((todo, index) => (
          <div
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {edit === index ? (
              <input
                type="text"
                value={myInp}
                onChange={(e) => setMyInp(e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
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

export default ModeChange;
