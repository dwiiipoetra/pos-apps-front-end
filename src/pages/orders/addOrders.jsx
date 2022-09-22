import axios from "axios";
import React, { useState, useEffect } from "react";
import CardAddOrders from "./components/cardAddOrders";

const AddOrders = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://630331acc6dda4f287c4e755.mockapi.io/api/v1/products"
      );
      setProducts(await response.data);
      setLoading(false);
    } catch (err) {
      throw new Error("unable to fetch data");
    }
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
                  ? filteredResults.map((p, i) => (
                      <CardAddOrders
                        key={i}
                        id={i}
                        name={p.name}
                        price={p.price}
                        stock={p.stock}
                        image={p.image}
                        qty={1}
                      />
                    ))
                  : products.map((p, i) => (
                      <CardAddOrders
                        key={i}
                        id={i}
                        name={p.name}
                        price={p.price}
                        stock={p.stock}
                        image={p.image}
                        qty={1}
                      />
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
