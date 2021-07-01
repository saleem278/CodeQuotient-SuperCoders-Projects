import '../App.css';
import {Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid" style={{fontSize:"24px",color:"white"}}>
          <Link to="/"><p className="banner navbar-brand">
            React Login
          </p></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/"><p className="nav-link">
                  Home
                </p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/signin"><p className="nav-link">
                  SignIn
                </p>
              </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup"><p className="nav-link">
                  SignUp
                </p></Link>
              </li>
            </ul>
            <span style={{fontSize:"30px",color:"white"}}>Have Fun😍😍</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
