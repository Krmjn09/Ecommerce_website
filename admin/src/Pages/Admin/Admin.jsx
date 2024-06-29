import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
const Admin = () => {
  return (
    <div className="admin">
        <Sidebar    />
        <Routes>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
    </div>
  )
}

export default Admin