import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbarStyle.css";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      {/* navbar sectin start  */}
      <header>
        <nav>
          <div className="navbar container">
            <div>
              <h1>START BOOTSTRAP</h1>
            </div>
            <div>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="about">About</NavLink>
                </li>
                <li>
                  <NavLink to="contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="samplepost">SamplePost</NavLink>
                </li>
              </ul>
              <button className="navbtn">
                <div>Menu</div>
                <div>
                  <FaBarsStaggered />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar sectin end  */}
    </>
  );
}

export default Navbar;
