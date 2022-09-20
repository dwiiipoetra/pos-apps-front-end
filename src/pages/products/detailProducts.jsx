import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const DetailProducts = () => {
  const { product_id } = useParams();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setImg("img", img);
    setName("name", name);
    setPrice("price", price);
    setStock("stock", stock);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6305cec7dde73c0f844bca85.mockapi.io/products/${product_id}`, {
        img,
        name,
        price,
        stock,
      })
      .then(() => {
        swal("data berhasil di ubah", "success");
        navigate("/products");
      });
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
                  <i className="fas fa-fw fa-user"></i>&nbsp;Edit Products
                </h1>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}

            <div className="card shadow mb-4">
              <form onSubmit={handleUpdate}>
                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md">
                      <label className="font-weight-bold">Name Product</label>
                      <input autoComplete="off" type="text" onChange={(e) => setName(e.target.value)} required className="form-control" name="name" />
                      <label className="font-weight-bold">Price</label>
                      <input autoComplete="off" type="number" onChange={(e) => setPrice(e.target.value)} name="price" className="form-control" />
                      <label className="font-weight-bold">Stock</label>
                      <input autoComplete="off" type="number" onChange={(e) => setStock(e.target.value)} name="stock" required className="form-control" />
                      <label htmlFor="formFileMultiple" className="form-label">
                        Upload Images
                      </label>
                      <input className="form-control" type="file" id="formFileMultiple" multiple />
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <Link to="/products" type="reset" className="btn btn-outline-secondary mr-2">
                    <i className="fa fa-long-arrow-alt-left"></i> Back
                  </Link>
                  <button type="submit" className="btn btn-outline-success">
                    <i className="fa fa-save"></i> Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
      </div>
    </>
  );
};
export default DetailProducts;
