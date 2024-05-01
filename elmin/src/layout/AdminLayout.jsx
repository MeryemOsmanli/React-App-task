import React from "react";
import AdminNavbar from "../pages/admin/AdminNavbar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
