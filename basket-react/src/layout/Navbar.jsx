import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainProvider";

function Navbar() {
  const { basket } = useContext(MainContext);
  return (
    <nav style={{ backgroundColor: "red", padding: "20px" }}>
      <button>
        <Link to={"/"}>Home</Link>----{" "}
        <Link to={"/basket"}>Basket{basket.length} </Link>
        <Link to={"/wishlist"}>WishList</Link>
      </button>
    </nav>
  );
}

export default Navbar;
