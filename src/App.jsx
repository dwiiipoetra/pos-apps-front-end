import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components
import Navbar from "../src/components/navbar";
import Sidebar from "../src/components/sidebar";
import Footer from "../src/components/footer";
// import pages
import Users from "./pages/users/index";
import AddUsers from "./pages/users/addUsers";
import EditUsers from "./pages/users/editUsers";
import Home from "./pages/dashboard";
import Orders from "./pages/orders";
import AddOrders from "./pages/orders/addOrders";
import Products from "./pages/products";
import Carts from "./pages/carts";
import AddProducts from "./pages/products/addProducts";
import Login from "./pages/login";
import axios from "axios";
import DetailProducts from "./pages/products/detailProducts";

function App() {
  let user;
  // const getUser = async () => {
  //   user = await axios.get("https://631862c8ece2736550c85c60.mockapi.io/users");
  //   console.log("user", user);
  //   return user;
  // };
  // getUser();
  console.log("user2", user);
  return (
    <div className="wrapper">
      <BrowserRouter>
        {/* {user === undefined ? (
          <></>
        ) : (
          <> */}
        <Navbar />
        <Sidebar />

        {/* </>
        )} */}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/users/add" element={<AddUsers />} />
          <Route exact path="/users/edit/:id" element={<EditUsers />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/orders/add" element={<AddOrders />} />
          <Route exact path="/carts" element={<Carts />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/add" element={<AddProducts />} />
          <Route exact path="/products/:product_id" element={<DetailProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
