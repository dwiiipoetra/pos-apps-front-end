import React from "react";
import { Link } from "react-router-dom";

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const Orders = () => {
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 mt-2 mb-3">
              <h1 className="m-0">
                <i class="nav-icon fas fa-clipboard-list"></i>&nbsp;List Orders
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
                      <tr>
                        <td>AE-183-8748</td>
                        <td>John Doe</td>
                        <td>Dwi Putra</td>
                        <td>Rp 450.000,00</td>
                        <td>
                          <span className="tag tag-success">
                            {showFormattedDate(Date())}
                          </span>
                        </td>
                        <td>
                          <span class="badge bg-success">Success</span>
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
