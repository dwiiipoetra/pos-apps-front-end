import React from "react";

const AddProducts = () => {
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
            <form method="post" id="form" role="form" encType="multipart/form-data">
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-md">
                    <label className="font-weight-bold">Name Product</label>
                    <input autoComplete="off" type="text" name="name" required className="form-control" />
                    <label className="font-weight-bold">Price</label>
                    <input autoComplete="off" type="number" name="price" className="form-control" />
                    <label className="font-weight-bold">Stock</label>
                    <input autoComplete="off" type="number" name="stock" required className="form-control" />
                    <label for="formFileMultiple" class="form-label">
                      Upload Images
                    </label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                  </div>
                </div>
              </div>

              <div className="card-footer text-right">
                <button type="submit" className="btn btn-success">
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
  </>;
};
export default AddProducts;
