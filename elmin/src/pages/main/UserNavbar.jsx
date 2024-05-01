import React from "react";
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div>
      <Link to="/">UserHome</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default UserNavbar;
