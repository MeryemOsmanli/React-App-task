import React from "react";
import "./navbarStyle.css";
import "./NavbarScript";

function Navbar() {
  return (
    <div>
      {/* navbar section start  */}
      <header>
        <nav>
          <div class="navbar container">
            <div>
              <h1>Financier</h1>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" className="home-li">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Solution</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="nav_phone">123-489-9381</p>
            </div>
            <button class="navbtn">
              <div>Menu</div>
            </button>
          </div>
        </nav>
      </header>
      {/* navbar section start  */}
    </div>
  );
}

export default Navbar;
