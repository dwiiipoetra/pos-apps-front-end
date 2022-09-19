import React from "react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log({ email, password });

  const handleApi = (e) => {
    e.preventDefault();
    console.log({ email, password });

    const data = {
      email,
      password,
    };

    const res = axios
      .post("https://6327f60f5731f3db99613806.mockapi.io/users", data)
      .then(function (response) {
        swal("login berhasil", "success");
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("ini data", data);
  };

  return (
    <div>
      <div className="login-box mx-auto mt-5">
        <div className="login-logo">
          <a href="#">
            <b>POS</b>App
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body rounded-lg">
            <p className="login-box-msg font-weight-bolder">Login</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required="required" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required="required" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <button type="submit" onClick={handleApi} className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    <a href="forgot-password.html">I forgot my password</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Login;
