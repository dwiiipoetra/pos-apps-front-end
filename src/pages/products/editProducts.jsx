import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProduct = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const { product_id } = useParams;

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const res = await axios.get(`https://6305cec7dde73c0f844bca85.mockapi.io/products/${product_id}`);
    setImg(res.data.img);
    setName(res.data.name);
    setPrice(res.data.price);
    setStock(res.data.stock);
  };

  const handleImg = (e) => {
    setImg(e.target.files[0]);
    console.log("ini gambar", setImg);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.appand("img", img);
    formData.appand("name", name);
    formData.appand("price", price);
    formData.appand("stock", stock);
    try {
      await axios.put(`https://6305cec7dde73c0f844bca85.mockapi.io/products/${product_id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log("tes", formData);
      navigate("/products");
    } catch (error) {
      console.log("ini error", error);
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
                  <button type="submit" onClick={updateProduct} className="btn btn-success">
                    <i className="fa fa-save"></i> Save
                  </button>
                  <button type="reset" className="btn btn-info">
                    <i className="fa fa-sync-alt"></i> Reset
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
export default EditProduct;
