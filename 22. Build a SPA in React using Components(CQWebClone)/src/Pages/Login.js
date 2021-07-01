import React,{useEffect} from "react";
import { Link} from "react-router-dom";
export default function Login() {
  useEffect(() => {
    document.title = "Login | CodeQuotient"
 }, []);
  return (
    <>
      <div className="wrapper login-wrapper">
        <div className="container-fluid main-container-header top-bar-pre-login">
          <div className="col-md-12 top-header pre-login-menubar">
            <div style={{ display: "table", margin: "auto" }}>
              <Link to="/"
                className="navbar-brand logo_link"
                style={{ color: "rgb(222, 104, 52)", textDecoration: "none" }}
              >
                <span className="logo_text_1">Code</span>
                <span className="logo_text_2">quotient</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid login_popup_div">
          <div className="col-md-6 col-md-push-3 create_popup_div">
            <div className="create_login_form">
              <h3 className="login_heading">Log Into Your Account</h3>
              <div className="col-sm-10 col-sm-push-1 generate_fields">
                <form
                  className="CodeQ_login_form"
                >
                  <div className="form-group login_fields">
                    <input
                      type="email"
                      placeholder="Email Address*"
                      autoFocus=""
                      className="form-control login_form_fields"
                      required=""
                    />
                  </div>
                  <div className="form-group login_fields">
                    <input
                      type="password"
                      minLength="8"
                      maxLength="32"
                      placeholder="Password*"
                      className="form-control login_form_fields"
                      required=""
                    />
                  </div>
                  <div className="form-group login_submit_fields text-center">
                    <button
                      type="submit"
                      className="btn btn_custom"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div
                    className="forget_pwd_div text-center"
                    style={{ margin: "15px 0px" }}
                  >
                    <Link
                      to="/forgot"
                      style={{ fontSize: "13px", color: "#DE6834" }}
                    >
                      Forgot Your Password?
                    </Link>
                  </div>
                  <div
                    className="forget_pwd_div text-center"
                    style={{ margin: "15px 0px" }}
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}