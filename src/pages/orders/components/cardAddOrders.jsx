import React, { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";

const CardAddOrders = (props) => {
  const { addToCart } = useContext(CartContext);
  const { id, name, image, stock } = props;

  return (
    <div className="col mb-4" key={id}>
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Stock ({props.stock})</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-outline-info"
            onClick={() => addToCart(props)}
          >
            <i className="fa fa-shopping-cart"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAddOrders;
