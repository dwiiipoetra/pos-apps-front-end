import axios from "axios";
import React, { useState, useEffect } from "react";

const AddOrders = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://630331acc6dda4f287c4e755.mockapi.io/api/v1/products"
    );
    setProducts(await response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchHandler = (searchValue) => {
    setSearch(searchValue);
    if (search === "") {
      setFilteredResults(products);
    } else {
      const filteredProducts = products.filter((product) => {
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilteredResults(filteredProducts);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 mt-2 mb-3">
                <h1 className="m-0">
                  <i className="nav-icon fas fa-clipboard-list"></i>&nbsp;Add
                  Orders
                </h1>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
            <div className="row mb-2">
              <div className="col-md-6"></div>
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
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </ol>
              </div>
            </div>

            {loading ? (
              <div className="row">
                <div className="col-12 text-center mt-4 mb-4">
                  <h5>Loading data...</h5>
                  <span className="spinner-grow text-info mr-2"></span>
                  <span className="spinner-grow text-info mr-2"></span>
                  <span className="spinner-grow text-info"></span>
                </div>
              </div>
            ) : (
              <div className="row row-cols-2 row-cols-md-6 mb-4 mt-4">
                {search.length > 1
                  ? filteredResults.map((p) => (
                      <div className="col mb-4" key={p.id}>
                        <div className="card h-100">
                          <img
                            src={p.image}
                            className="card-img-top"
                            alt={p.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="card-text">Stock ({p.stock})</p>
                          </div>
                        </div>
                      </div>
                    ))
                  : products.map((p) => (
                      <div className="col mb-4" key={p.id}>
                        <div className="card h-100">
                          <img
                            src={p.image}
                            className="card-img-top"
                            alt={p.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="card-text">Stock ({p.stock})</p>
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-outline-info">
                              <i className="fas fa-cart-plus"></i> Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            )}
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
      </div>
    </>
  );
};
export default AddOrders;
