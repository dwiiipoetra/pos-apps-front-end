import React, { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";

const CardAddOrders = (props) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const { id, name, price, stock, image, quantity } = props;

  return (
    <div className="col mb-4" key={id}>
      <div className="card h-100 text-center">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Stock ({stock})</p>
          <div className="input-group">
            <div className="input-group-append">
              <button
                className="btn btn-outline-info"
                data-mdb-toggle="tooltip"
                title="Add to cart"
                onClick={() => {
                  const foundCart = cartItems.find(
                    (cartItem) => cartItem.id === id
                  );
                  if (!foundCart) {
                    addToCart(props);
                    toastr.success("Added to cart");
                  } else {
                    toastr.info("Products already exists in cart");
                  }
                }}
              >
                <i className="fa fa-shopping-cart"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddOrders;
