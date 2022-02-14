import React from 'react';
import '../AdminStyles/AdminNavbar.css';
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className='admin'>
        <div className='sidebar' >
            <Link to='/admin/home'>Home</Link>
            <Link to='/admin/addproduct'>Add Product</Link>
            <Link to='/admin/editproduct'>Edit Product</Link>
            <Link to='/admin/loggedusers'>Users</Link>
            <Link to='/admin/logout'>Logout</Link>
        </div>

    </div>
  )
}

export default AdminNavbar