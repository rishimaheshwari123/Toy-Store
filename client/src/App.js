import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import AdminLayout from './components/Admin/pages/AdminLayout';
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import Login from "./components/Admin/pages/Login"
import Dashboard from "./components/Admin/pages/Dashboard"
import Category from './components/Admin/pages/Category';
import Subcategory from './components/Admin/pages/Subcategory';
import AddProduct from './components/Admin/pages/AddProduct';
import { useSelector } from 'react-redux';
import SideNavbar from './components/pure-frontend/Navbar/SideNavbar';
import SingleCategory from './pages/SingleCategory';
import SubCategorySingle from './pages/SubCategorySingle';
import ProductDetails from './pages/ProductDetails';
import AllProducts from './components/Admin/pages/AllProducts';
const App = () => {

  const { isMenuOpen } = useSelector((state) => state.news);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="admin/subcategory" element={<Subcategory />} />
          <Route path="admin/addProduct" element={<AddProduct />} />
          <Route path="admin/allProduct" element={<AllProducts />} />

        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/category/:id' element={<SingleCategory />} />
        <Route path="/subcategory/:id" element={<SubCategorySingle />} />
        <Route path="/:id" element={<ProductDetails />} />



      </Routes>

      {isMenuOpen && <SideNavbar />}
    </>
  )
}

export default App;