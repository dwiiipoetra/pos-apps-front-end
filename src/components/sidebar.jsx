import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* <!-- Main Sidebar Container --> */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* <!-- Brand Logo --> */}
        <Link to="/" className="brand-link">
          <img
            src="/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">CAP - POS APP</span>
        </Link>

        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar user panel (optional) --> */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/* <img
                src="/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              /> */}
            </div>
            <div className="info">
              <Link to="/" className="d-block">
                John Doe
              </Link>
            </div>
          </div>

          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/products" className="nav-link">
                  <i className="nav-icon fas fa-tag"></i>
                  <p>Products</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/carts" className="nav-link">
                  <i className="nav-icon fas fa-shopping-cart"></i>
                  <p>Carts</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/orders" className="nav-link">
                  <i className="nav-icon fas fa-clipboard-list"></i>
                  <p>Orders</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/users" className="nav-link">
                  <i className="nav-icon fas fa-user"></i>
                  <p>Users</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    </>
  );
};

export default Sidebar;
