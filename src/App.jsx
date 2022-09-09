import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import components
import Navbar from "../src/components/navbar";
import Sidebar from "../src/components/sidebar";
import Footer from "../src/components/footer";
// import pages
import Users from "./pages/users/index";
import AddUsers from "./pages/users/addUsers";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/add-users" element={<AddUsers />} />
      </Routes>
      <Users />
      <Footer />
    </div>
  );
}

export default App;
