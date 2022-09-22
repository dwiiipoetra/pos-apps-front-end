import axios from "axios";
import { showFormattedDate, showFormattedIDR } from "../../helpers";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailOrders = () => {
  const [detailOrders, setDetailOrders] = useState([]);
  const { order_id } = useParams();

  // console.log("response:", res.data);
  //   console.log("state:", detailOrders.products[1].product_name);
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "https://630331acc6dda4f287c4e755.mockapi.io/api/v1/order_detail/" +
          order_id
      );
      setDetailOrders(await response.data);
    } catch (err) {
      throw new Error("unable to fetch data");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 mt-2 mb-3">
              <h1 className="m-0">
                <i className="fas fas fa-clipboard-list"></i>&nbsp;Detail Orders
              </h1>
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}
          <div className="row mb-2">
            <div className="d-flex justify-content-center col-12">
              <div className="card col-12">
                <div className="card-header bg-white">
                  <div className="media flex-sm-row flex-column-reverse justify-content-between  ">
                    <div className="col my-auto">
                      <h4 className="mb-0">
                        Thanks for your Order,&nbsp;
                        <span className="change-color">
                          <strong>{detailOrders.customer_name}</strong>
                        </span>
                      </h4>
                    </div>
                    <div className="col-auto text-center  my-auto pl-0 pt-sm-4">
                      <img
                        src="/img/AdminLTELogo.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        width="115"
                        height="115"
                      ></img>
                      <p className="mb-4 mt-2 pt-0">CAP - POS App</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row justify-content-between mb-3">
                    <div className="col-auto">
                      <h6 className="color-1 mb-0 change-color">Receipt</h6>
                    </div>
                    <div className="col-auto  ">
                      <small>Receipt Voucher : 1KAU9-84UIL</small>
                    </div>
                  </div>
                  {detailOrders.products?.map((p) => (
                    <div className="row mb-4" key={p.product_id}>
                      <div className="col">
                        <div className="card card-2">
                          <div className="card-body">
                            <div className="media">
                              <div className="sq align-self-center ">
                                <img
                                  className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                  src="https://i.imgur.com/fUWWpRS.jpg"
                                  width="135"
                                  height="135"
                                />
                              </div>
                              <div className="media-body my-auto text-right">
                                <div className="row  my-auto flex-column flex-md-row">
                                  <div className="col-auto my-auto ">
                                    <h6 className="mb-0">{p.product_name}</h6>
                                  </div>
                                  <div className="col my-auto">
                                    <small>Qty : {p.quantity}</small>
                                  </div>
                                  <div className="col my-auto">
                                    <small>
                                      Price : {showFormattedIDR(p.price)}
                                    </small>
                                  </div>
                                  <div className="col my-auto">
                                    <h6 className="mb-0">
                                      {showFormattedIDR(p.quantity * p.price)}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="row ">
                              <div className="col-md-3 mb-3">
                                <small>
                                  Track Order
                                  <span>
                                    <i
                                      className=" ml-2 fa fa-refresh"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </small>
                              </div>
                              <div className="col mt-auto">
                                <div className="progress">
                                  <div
                                    className="progress-bar progress-bar  rounded"
                                    style={{ width: "18%" }}
                                    role="progressbar"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <div className="media row justify-content-between ">
                                  <div className="col-auto text-right">
                                    <span>
                                      <small className="text-right mr-sm-2"></small>
                                      <i className="fa fa-circle active"></i>
                                    </span>
                                  </div>
                                  <div className="flex-col">
                                    <span>
                                      <small className="text-right mr-sm-2">
                                        Out for delivery
                                      </small>
                                      <i className="fa fa-circle"></i>
                                    </span>
                                  </div>
                                  <div className="col-auto flex-col-auto">
                                    <small className="text-right mr-sm-2">
                                      Delivered
                                    </small>
                                    <span>
                                      <i className="fa fa-circle"></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="row mt-4">
                    <div className="col">
                      <div className="row justify-content-between">
                        <div className="col-auto">
                          <p className="mb-1 text-dark">
                            <b>Order Details</b>
                          </p>
                        </div>
                        <div className="flex-sm-col text-right col">
                          <p className="mb-1">
                            <b>Total</b>
                          </p>
                        </div>
                        <div className="flex-sm-col col-auto">
                          <p className="mb-1">
                            {showFormattedIDR(detailOrders.amount)}
                          </p>
                        </div>
                      </div>
                      <div className="row justify-content-between">
                        <div className="flex-sm-col text-right col">
                          <p className="mb-1">
                            <b>Delivery Charges</b>
                          </p>
                        </div>
                        <div className="flex-sm-col col-auto">
                          <p className="mb-1">Free</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row invoice ">
                    <div className="col">
                      <p className="mb-1"> Invoice Number : 788152</p>
                      <p className="mb-1">
                        Invoice Date :
                        {showFormattedDate(detailOrders.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="jumbotron-fluid">
                    <div className="row justify-content-between ">
                      <div className="col-sm-auto col-auto my-auto">
                        <img
                          className="img-fluid my-auto align-self-center "
                          src="https://i.imgur.com/7q7gIzR.png"
                          width="115"
                          height="115"
                        />
                      </div>
                      <div className="col-auto my-auto ">
                        <h2 className="mb-0 font-weight-bold">TOTAL PAID</h2>
                      </div>
                      <div className="col-auto my-auto ml-auto">
                        <h1 className="display-3 ">
                          {showFormattedIDR(detailOrders.amount)}
                        </h1>
                      </div>
                    </div>
                    <div className="row mb-3 mt-3 mt-md-0">
                      <div className="col-auto border-line">
                        <small className="text-white">PAN:AA02hDW7E</small>
                      </div>
                      <div className="col-auto border-line">
                        <small className="text-white">CIN:UMMC20PTC </small>
                      </div>
                      <div className="col-auto ">
                        <small className="text-white">GSTN:268FD07EXX </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
    </div>
  );
};

export default DetailOrders;
