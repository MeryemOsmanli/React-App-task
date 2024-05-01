import React from "react";
import UserNavbar from "../pages/main/UserNavbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <UserNavbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
