import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="container p-4">
      <div className="mb-3 text-center">
        <h3 className="form-label font-weight-bold">SignUp</h3>
      </div>
      <div className="mb-3">
        <label for="exampleInputUser1" className="form-label font-weight-bold">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUser1"
          aria-describedby="emailHelp"
          placeholder="Enter Username"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label font-weight-bold">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleInputPassword1"
          className="form-label font-weight-bold"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Username"
        />
      </div>
      <div className="text-center">
        <Link to="/signup/success">
          <button className="btn btn-primary">
            Signup
          </button>
        </Link>
      </div>
      <div className="text-left">
          Sign In
        <Link to="/signin" className="nav-link">
        </Link>
      </div>
    </div>
  );
}

export default Signup;
