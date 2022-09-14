import { useProducts } from "../../hooks/useProducts";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, getAllProducts] = useProducts();

  useEffect(() => {
    if (data.length < 1) {
      getAllProducts(1, 12, "", "");
    }
  }, [data.length, getAllProducts]);

  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 mt-2 mb-3">
              <h1 className="m-0">
                <i className="nav-icon fas fa-user"></i>&nbsp;Product
              </h1>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <Link to="/add-products" className="btn btn-outline-success">
                <i className="fa fa-plus"></i>&nbsp;&nbsp;Add products
              </Link>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb float-sm-right">
                <div className="input-group rounded">
                  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
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
                        <th>Image</th>
                        <th>Name Product</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((items, index) => (
                        <tr key={index}>
                          <td>
                            <img src="/img/hz.jpg" alt="huzelnut" width="50px" />
                          </td>
                          <td>{items.name}</td>
                          <td>{items.price}</td>
                          <td>
                            <input type="number"></input>
                          </td>
                          <td>
                            <div>
                              <Link to="/detail-products" className="btn btn-outline-success mr-2">
                                <i className="fa fa-edit"></i> Edit
                              </Link>
                              <button type="button" class="btn btn-outline-danger">
                                <i className="fa fa-trash-alt"></i> Delete
                              </button>
                            </div>
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
      {/* <!-- /.content --> */}
    </div>
  );
};

export default Products;
