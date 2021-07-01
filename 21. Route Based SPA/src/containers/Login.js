import {Link } from 'react-router-dom';
function SignIn() {
  return (
    <div className="container p-4">
      <div className="mb-3 text-center">
        <h3 className="form-label font-weight-bold">
          SignIn
        </h3>
      </div>
      <div className="mb-3">
        <label for="exampleInputUser2" className="form-label font-weight-bold">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUser2"
          placeholder="Enter Username"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword2" className="form-label font-weight-bold">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          id="exampleInputPassword2"
        />
      </div>
      <div className="text-center">
        <Link to="/signin/success" type="submit" className="btn btn-primary">
          Sign In
        </Link>
      </div>
      <div className="text-left">
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
