import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid"; //for map the data

const Users = () => {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 mt-2 mb-3">
              <h1 className="m-0">
                <i className="nav-icon fas fa-user"></i>&nbsp;List Users
              </h1>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <Link to="/users/add" className="btn btn-success">
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
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {json.map((userData, i) => ( */}
                      <tr>
                        {/* <td>{userData[i].id}</td> */}
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                        <td>Cashier</td>
                        <td>
                          <div className="btn-group">
                            <Link to="/users/edit" className="btn btn-primary">
                              Edit
                            </Link>
                            <Link
                              to="/users/delete"
                              className="btn btn-danger"
                              onClick={(e) => e.preventDefault()}
                            >
                              Delete
                            </Link>
                          </div>
                        </td>
                      </tr>
                      {/* ))} */}
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

export default Users;
