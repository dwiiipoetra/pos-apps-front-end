import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AddProducts = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("img", img);
    // formData.append("name", name);
    // formData.append("price", price);
    // formData.append("stock", stock);

    const data = {
      img,
      name,
      price,
      stock,
    };

    const res = axios
      .post("https://6305cec7dde73c0f844bca85.mockapi.io/products", data, {
        "Content-Type": "multipart/form-data",
      })
      .then(function (response) {
        swal("product telah ditambahkan", "success");
        navigate("/products");
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("ini data", data);
  };

  const handleImg = (e) => {
    setImg(e.target.files[0]);
    console.log("ini gambar", setImg);
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
                  <i className="fas fa-fw fa-user"></i>&nbsp;Add Products
                </h1>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}

            <div className="card shadow mb-4">
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md">
                      <label className="font-weight-bold">Name Product</label>
                      <input autoComplete="off" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" name="name" />
                      <label className="font-weight-bold">Price</label>
                      <input autoComplete="off" type="number" value={price} onChange={(e) => setPrice(e.target.value)} name="price" className="form-control" />
                      <label className="font-weight-bold">Stock</label>
                      <input autoComplete="off" type="number" value={stock} onChange={(e) => setStock(e.target.value)} name="stock" required className="form-control" />
                      <label htmlFor="formFileMultiple" class="form-label">
                        Upload Images
                      </label>
                      <input class="form-control" type="file" onChange={handleImg} id="formFileMultiple" multiple />
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <Link to="/products" type="reset" className="btn btn-outline-secondary mr-2">
                    <i className="fa fa-long-arrow-alt-left"></i> Back
                  </Link>
                  <button type="submit" onClick={handleSubmit} className="btn btn-outline-success">
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
export default AddProducts;
