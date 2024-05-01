import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <Link to={"/admin/"}>admin</Link> */}
      <Link to={"/"}>home</Link>
      <Link to={"/admin/employees"}>Employees</Link>
      <Link to={"/admin/addemployees"}>Add Employess</Link>
    </div>
  );
}

export default Navbar;
