import React, { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";
import { showFormattedIDR } from "../../../helpers";

const CardAddtoCart = ({ item }) => {
  const { changeQuantity, removeItem } = useContext(CartContext);

  return (
    <div className="row mb-4 border-bottom" key={item.id}>
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        {/* <!-- Image --> */}
        <div
          className="bg-image hover-overlay hover-zoom ripple rounded"
          data-mdb-ripple-color="light"
        >
          <img src={item.image} className="w-100" alt={item.name} />
        </div>
        {/* <!-- Image --> */}
      </div>

      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        {/* <!-- Data --> */}
        <p>
          <strong>{item.name}</strong>
        </p>
        <p>{showFormattedIDR(item.price)}</p>
        <p>Stock ({item.stock})</p>
        {/* <!-- Data --> */}
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        {/* <!-- Quantity --> */}
        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
          <div className="input-group">
            <div className="col-xs-2">
              <input
                type="number"
                className="form-control input-sm"
                placeholder="Qty"
                defaultValue={item.qty}
                onChange={(e) => {
                  changeQuantity(e.target.value, item);
                }}
                min="1"
                max={item.stock}
                style={{ width: "70px" }}
              />
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-danger"
                data-mdb-toggle="tooltip"
                title="Remove item"
                onClick={() => removeItem(item.id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Quantity --> */}

        {/* <!-- Price --> */}
        <p>
          <strong>{showFormattedIDR(item.price * item.qty)}</strong>
        </p>
        {/* <!-- Price --> */}
      </div>
    </div>
  );
};

export default CardAddtoCart;
