import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import AdminLayout from "./components/Admin/pages/AdminLayout";
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import Login from "./components/Admin/pages/Login";
import Dashboard from "./components/Admin/pages/Dashboard";
import Category from "./components/Admin/pages/Category";
import Subcategory from "./components/Admin/pages/Subcategory";
import AddProduct from "./components/Admin/pages/AddProduct";
import { useSelector } from "react-redux";
import SideNavbar from "./components/pure-frontend/Navbar/SideNavbar";
import SingleCategory from "./pages/SingleCategory";
import SubCategorySingle from "./pages/SubCategorySingle";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./components/Admin/pages/AllProducts";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Register from "./components/Admin/pages/Register";
import Orders from "./components/Admin/pages/Orders";
import MyOrder from "./components/Admin/pages/MyOrder";
import GetSubscription from "./components/Admin/pages/GetSubscription";
import Cart from "./pages/Cart";

const App = () => {
  const { isMenuOpen } = useSelector((state) => state.news);
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<Product />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/subcategory" element={<Subcategory />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/allProduct" element={<AllProducts />} />
          <Route path="/admin/order" element={<Orders />} />
          <Route path="/admin/subscription" element={<GetSubscription />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<MyOrder />} />

        {/* Category and Subcategory Routes */}
        <Route path="/category/:id" element={<SingleCategory />} />
        <Route path="/subcategory/:id" element={<SubCategorySingle />} />
          <Route path="/cart" element={<Cart />} />

        {/* Conditional Route for Product Details */}
        <Route
          path="/products/:id"
          element={token ? <ProductDetails /> : <Navigate to="/login" />}
        />
      </Routes>

      {/* Conditional Sidebar */}
      {isMenuOpen && <SideNavbar />}
    </>
  );
};

export default App;
