import React from "react";
import "./navbarStyle.css";
import { useState } from "react";

function Navbar() {
  const [navbarBox, setnavbarBox] = useState(false);
  function shownavbarBox() {
    setnavbarBox(!navbarBox);
  }
  function show(params) {}
  return (
    <div>
      <div className={`navbar ${navbarBox && "active"}`}>
        <h2>navbar</h2>
        <button className="opennav" onClick={() => shownavbarBox()}>
          {navbarBox ? <span>=</span> : <span>x</span>}
        </button>
      </div>
      <div className={`hamburger  ${navbarBox && "active"}`}>
        <h2>hamburger</h2>
      </div>
    </div>
  );
}

export default Navbar;
