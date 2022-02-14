import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNavbar from "../Pages/AdminNavbar";

function AdminRoute() {
  return (
    <div>
      <Router>
        <Routes>
               <Route path='/admin' element={<AdminNavbar/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default AdminRoute;
