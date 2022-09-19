import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

function Parent({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
}

export default Parent;
