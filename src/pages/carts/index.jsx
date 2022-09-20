import React, { useContext } from "react";
import CartContext from "../../context/cart/cartContext";

const Carts = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  // return <div>{cartItems.length > 0 && cartItems.length}</div>;
  return <div>{cartItems.length}</div>;
};

export default Carts;
