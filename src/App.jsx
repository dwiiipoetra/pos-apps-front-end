import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Parent from "./components/parent";
import DetailProducts from "./pages/products/detailProducts";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route
            exact
            path="/home"
            element={
              <Parent>
                <Home />
              </Parent>
            }
          />
          <Route
            exact
            path="/users"
            element={
              <Parent>
                <Users />
              </Parent>
            }
          />
          <Route
            exact
            path="/users/add"
            element={
              <Parent>
                <AddUsers />
              </Parent>
            }
          />
          <Route
            exact
            path="/users/edit/:id"
            element={
              <Parent>
                <EditUsers />
              </Parent>
            }
          />
          <Route
            exact
            path="/orders"
            element={
              <Parent>
                <Orders />
              </Parent>
            }
          />
          <Route
            exact
            path="/orders/add"
            element={
              <Parent>
                <AddOrders />
              </Parent>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <Parent>
                <Products />
              </Parent>
            }
          />
          <Route
            exact
            path="/products/add"
            element={
              <Parent>
                <AddProducts />
              </Parent>
            }
          />
          <Route
            exact
            path="/products/:product_id"
            element={
              <Parent>
                <DetailProducts />
              </Parent>
            }
          />
          <Route
            exact
            path="/carts"
            element={
              <Parent>
                <Carts />
              </Parent>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
