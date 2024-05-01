import "./App.css";
import "../css/core.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
// import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MainLayout from "./layout/MainLayout";
import Employees from "./pages/Employees";
import AddEmployees from "./pages/AddEmployees";
import AdminLayout from "./layout/AdminLayout";
import AdminHome from "./pages/AdminHome";
// import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/" element={<AdminHome />} />
            <Route path="/admin/employees" element={<Employees />} />
            <Route path="/admin/addemployees" element={<AddEmployees />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
