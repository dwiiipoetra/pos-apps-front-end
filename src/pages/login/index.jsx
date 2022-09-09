import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>POS</b>App
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body rounded-lg">
            <p className="login-box-msg font-weight-bolder">Login</p>

            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember"> Remember Me </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
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
