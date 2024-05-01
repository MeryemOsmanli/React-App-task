import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/main/AdminPanel";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/main/Home";
import Contact from "./pages/main/Contact";
import AdminLayout from "./layout/AdminLayout";
import Employees from "./pages/admin/Employees";
import AddEmployees from "./pages/admin/AddEmployees";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adminpanel  " element={<AdminPanel />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/employees" element={<Employees />} />
            <Route path="/admin/addemployees" element={<AddEmployees />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
