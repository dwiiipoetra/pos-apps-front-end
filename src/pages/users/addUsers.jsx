import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const AddUsers = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 mt-2 mb-3">
                <h1 className="m-0">
                  <i className="fas fa-fw fa-user"></i>&nbsp;Add User
                </h1>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}

            <div className="card shadow mb-4">
              <form
                method="post"
                id="form"
                role="form"
                encType="multipart/form-data"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md">
                      <label className="font-weight-bold">Name</label>
                      <input
                        autoComplete="off"
                        type="text"
                        name="nama"
                        required
                        className="form-control"
                      />
                      <label className="font-weight-bold">Role</label>
                      <select name="role" className="form-control" required>
                        <option value="">Choose Role</option>
                        <option value="kasir">Cashier</option>
                        <option value="gudang">Warehouse</option>
                      </select>
                      <label className="font-weight-bold">Email</label>
                      <input
                        autoComplete="off"
                        type="email"
                        name="nama"
                        required
                        className="form-control"
                      />
                      <label className="font-weight-bold">Password</label>
                      <input
                        autoComplete="off"
                        type="password"
                        name="nama"
                        required
                        className="form-control"
                      />
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
      {/* <!-- /.content-header --> */}

      {/* <!-- Main content --> */}
      <section className="content">
        <div className="container-fluid"></div>
        {/* <!-- /.row --> */}

        {/* <!-- Control Sidebar --> */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>
        {/* <!-- /.control-sidebar --> */}
      </section>
      {/* <!-- ./wrapper --> */}
    </div>
  );
};
export default AddUsers;
