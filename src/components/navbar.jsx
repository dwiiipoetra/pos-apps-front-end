import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/cartContext";

const Navbar = () => {
  const cartItems = useContext(CartContext);
  return (
    <>
      {/* <!-- Preloader --> */}
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>

      {/* <!-- Navbar --> */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
              {/* <p>Test{cartItems.length}</p> */}
            </Link>
          </li>
        </ul>
      </nav>
      {/* <!-- /.navbar --> */}
    </>
  );
};

export default Navbar;
