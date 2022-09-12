import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components
import Navbar from "../src/components/navbar";
import Sidebar from "../src/components/sidebar";
import Footer from "../src/components/footer";
// import pages
import Users from "./pages/users/index";
import AddUsers from "./pages/users/addUsers";
import Home from "./pages/dashboard";
import Orders from "./pages/orders";
import AddOrders from "./pages/orders/addOrders";
import Products from "./pages/products";
import AddProducts from "./pages/products/addProducts";
import Login from "./pages/login";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/users/add-users" element={<AddUsers />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/orders/add-orders" element={<AddOrders />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/add-products" element={<AddProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
