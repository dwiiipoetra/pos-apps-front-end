import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormUsers = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: Math.floor(Math.random() * 101),
    name: "",
    role: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      // "https://dummy-react-pos-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(() => navigate("/users"));
  }
  return (
    <div className="card shadow mb-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="card-body">
          <div className="row">
            <div className="form-group col-md">
              <label className="font-weight-bold">Name</label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                required
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <label className="font-weight-bold">Role</label>
              <select
                className="form-control"
                required
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="">Choose Role</option>
                <option value="cashier">Cashier</option>
                <option value="warehouse">Warehouse</option>
              </select>
              <label className="font-weight-bold">Email</label>
              <input
                autoComplete="off"
                type="email"
                className="form-control"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label className="font-weight-bold">Password</label>
              <input
                autoComplete="off"
                type="password"
                className="form-control"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="card-footer text-right">
          <button type="submit" className="btn btn-success mr-2">
            <i className="fa fa-save"></i> Save
          </button>
          <button type="reset" className="btn btn-info">
            <i className="fa fa-sync-alt"></i> Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUsers;
