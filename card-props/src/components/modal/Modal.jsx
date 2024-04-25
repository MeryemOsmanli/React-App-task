import React from "react";
import { useState } from "react";
import "./modalStyle.css";

function Modal() {
  const [modal, setmodal] = useState(false);
  function showModal(state) {
    setmodal(state);
  }
  return (
    <div>
      <div className={`box_modal ${modal && "active"}`}>
        <button onClick={() => showModal(false)}>x</button>
        <h1>Men modalam</h1>
        <p>sen modalsan</p>
      </div>
      <button onClick={() => showModal(true)}>Show</button>
    </div>
  );
}

export default Modal;
