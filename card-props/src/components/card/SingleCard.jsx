import React from "react";
import "./cardStyle.scss";
import PropTypes, { object } from "prop-types";

import { useState } from "react";
import Navbar from "../navbar/Navbar";
// import Modal from "../modal/Modal";

function SingleCard({ element }) {
  //   console.log(element);
  const [count, setCount] = useState(0);

  function handleClick(num) {
    setCount(count + num);
  }
  function resetFunc() {
    setCount(0);
  }
  return (
    // <section>
    <div className="box_container">
      <div className="card_box">
        <p>{element.id}</p>
        <h1>{element.name}</h1>
        <p>{element.description}</p>
        <p>{count}</p>

        <button onClick={() => handleClick(1)}>+ 1 </button>
        <button onClick={() => handleClick(2)}>+ 2</button>
        <button onClick={() => handleClick(5)}>+5 </button>
        <button onClick={resetFunc}>reset </button>
      </div>
    </div>

    // </section>
  );
}

export default SingleCard;

SingleCard.propTypes = {
  element: PropTypes.object,
};
