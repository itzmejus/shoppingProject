import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNavbar from "../Pages/AdminNavbar";
import add from "../Routes/add";

function AdminRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin/home" element={<AdminNavbar />} />
          <Route path="/addproduct" element={<add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AdminRoute;
