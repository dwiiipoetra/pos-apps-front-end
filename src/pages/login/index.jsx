import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from "../../context/login";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const body = { email, password };

    try {
      const response = await loginUser(dispatch, body);
      console.log(response);
      if (!response) return;
      navigate("/home");
    } catch (error) {
      console.log("disiniiiiiiiiiiiiiiiii", error);
    }
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
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} className="form-control" placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <button type="submit" onClick={handleLogin} disabled={loading} className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* <p>
                    <a href="forgot-password.html">I forgot my password</a>
                  </p> */}
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
