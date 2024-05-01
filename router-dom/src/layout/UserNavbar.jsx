import React from "react";
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div>
      <Link to={"/admin"}>admin</Link>
      <Link to={"/profile"}>Employess</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
}

export default UserNavbar;
