import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/admin/employees">employees</Link>
      <Link to="/admin/addemployees">Addemployees</Link>
    </div>
  );
}

export default AdminNavbar;
