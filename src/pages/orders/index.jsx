import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../helpers";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("https://630331acc6dda4f287c4e755.mockapi.io/api/v1/order")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchHandler = (searchValue) => {
    setSearch(searchValue);
    if (search === "") {
      setFilteredResults(orders);
    } else {
      const filteredOrders = orders.filter((order) => {
        return Object.values(order)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilteredResults(filteredOrders);
    }
  };

  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 mt-2 mb-3">
              <h1 className="m-0">
                <i className="nav-icon fas fa-clipboard-list"></i>&nbsp;List
                Orders
              </h1>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <Link to="/orders/add" className="btn btn-outline-info">
                <i className="fa fa-plus"></i>&nbsp;&nbsp;Add New
              </Link>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb float-sm-right">
                <div className="input-group rounded">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => searchHandler(e.target.value)}
                  />
                  <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
      {/* <!-- /.content-header --> */}

      {/* <!-- Main content --> */}
      <section className="content">
        <div className="container-fluid">
          {/* <!-- Small boxes (Stat box) --> */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Cashier</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Transaction Date</th>
                        <th>Payment</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {search.length > 1
                        ? filteredResults.map((o) => (
                            <tr key={o.order_id}>
                              <td>{o.order_id}</td>
                              <td>{o.username}</td>
                              <td>{o.customer_name}</td>
                              <td>{o.amount}</td>
                              <td>
                                <span className="tag tag-success">
                                  {showFormattedDate(o.created_at)}
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                              <td>
                                <Link
                                  to="/orders/view/id"
                                  className="btn btn-outline-primary mr-2"
                                >
                                  <i className="fa fa-eye"></i> View
                                </Link>
                                <Link
                                  to="/orders/edit/id"
                                  className="btn btn-outline-success"
                                >
                                  <i className="fa fa-edit"></i> Edit
                                </Link>
                              </td>
                            </tr>
                          ))
                        : orders.map((o) => (
                            <tr key={o.order_id}>
                              <td>{o.order_id}</td>
                              <td>{o.username}</td>
                              <td>{o.customer_name}</td>
                              <td>{o.amount}</td>
                              <td>
                                <span className="tag tag-success">
                                  {showFormattedDate(o.created_at)}
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                              <td>
                                <Link
                                  to={`/orders/${o.order_id}`}
                                  className="btn btn-outline-primary mr-2"
                                >
                                  <i className="fa fa-eye"></i> View
                                </Link>
                                {/* <Link
                                  to="/orders/edit/id"
                                  className="btn btn-outline-success"
                                >
                                  <i className="fa fa-edit"></i> Edit
                                </Link> */}
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
    </div>
  );
};

export default Orders;
