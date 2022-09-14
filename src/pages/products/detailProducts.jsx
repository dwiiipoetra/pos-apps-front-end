import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { detailProduct } from "../../hooks/useProducts";
const DetailProducts = () => {
  const { product_id } = useParams();
  const [data, getProductDetails] = detailProduct();

  useEffect(() => {
    if (data.length < 1) {
      getProductDetails(product_id);
    }
  }, [data]);

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
              <form method="post" id="form" role="form" encType="multipart/form-data">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <img src="/img/hz.jpg" alt="..." width="250px" />
                    </div>
                    <div className="form-group col-md">
                      <label className="font-weight-bold">Name Product</label>
                      <input autoComplete="off" type="text" value={data?.name} name="nama" required className="form-control" />
                      <label className="font-weight-bold">Price</label>
                      <input autoComplete="off" type="number" value={data?.price} name="nama" required className="form-control" />
                      <label className="font-weight-bold">Stock</label>
                      <input autoComplete="off" type="number" value={data?.stock} name="nama" required className="form-control" />
                      <label class="form-label" for="customFile">
                        Edit Image
                      </label>
                      <input type="file" class="form-control" id="customFile" />
                    </div>
                  </div>
                </div>

                <div className="card-footer text-right">
                  <Link to="/products" type="reset" className="btn btn-outline-secondary mr-2">
                    <i className="fa fa-long-arrow-alt-left"></i> Back
                  </Link>
                  <button type="submit" className="btn btn-outline-success">
                    <i className="fa fa-edit"></i> Edit
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
