import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import CardAddtoCart from "./components/cardAddtoCart";
import { formatRupiah } from "../../helpers";

const Carts = () => {
  const { cartItems } = useContext(CartContext);
  const totalAmount = formatRupiah(
    cartItems.reduce(
      (amount, cartItem) => cartItem.price * cartItem.qty + amount,
      0
    )
  );

  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 mt-2 mb-3">
              <h1 className="m-0">
                <i className="fas fa-shopping-cart"></i>&nbsp;Carts
              </h1>
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <section className="h-100 gradient-custom">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Total ({cartItems.length} items)</h5>
                    </div>
                    <div className="card-body">
                      {cartItems.length ? (
                        cartItems.map((cartItem) => (
                          <CardAddtoCart key={cartItem.id} item={cartItem} />
                        ))
                      ) : (
                        <span>No items</span>
                      )}
                    </div>
                  </div>
                  <div className="card mb-4 mb-lg-0">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Payment Method</h5>
                    </div>
                    <div className="card-body">
                      <img
                        className="mr-2"
                        width="45px"
                        src="
                        https://cdn.iconscout.com/icon/free/png-256/bca-225544.png"
                        alt="Bca"
                      />
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://cms.rctiads.com/uploads/template/qris.png"
                        alt="Qris"
                      />
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa"
                      />
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express"
                      />
                      <img
                        className="mr-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products
                          <span>{totalAmount}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          Shipping
                          <span>Free</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total Amount</strong>
                            <strong>
                              <p className="mb-0">(Include PPN 10%)</p>
                            </strong>
                          </div>
                          <span>
                            <strong>{totalAmount}</strong>
                          </span>
                        </li>
                      </ul>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-lg btn-block"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
    </div>
  );
};

export default Carts;
