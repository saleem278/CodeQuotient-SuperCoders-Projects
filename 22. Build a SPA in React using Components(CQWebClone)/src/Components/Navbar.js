import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="container-fluid header-section">
      <nav className="navbar navbar-expand-lg mynav_grid">
        <div>
          <Link
            to="/"
            className="navbar-brand logo_link"
            style={{ color: "#DE6834", textDecoration: "none" }}
          >
            <span className="logo_text_1">Code</span>
            <span className="logo_text_2">quotient</span>
          </Link>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navigation">
          {/* mobile view */}
          <div className="d-lg-none mb-3 navigation_ul_mobile">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact="true" className="nav-link nav_link" to="/">
                  <span>Learners</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link" to="/hire-developers">
                  <span>Hire Developers</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link" to="/blog">
                  <span>Blog</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link" to="/login">
                  <span>Login</span>
                </NavLink>
              </li>
            </ul>
          </div>
          {/* desktop */}
          <div className="d-none d-lg-block mr-auto nav_ul_grid">
            <ul className="navbar-nav">
              <li className="nav-item mr-3">
                <NavLink to="/" exact={true} className="nav_link nav-link">
                  <span>Learners</span>
                </NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink to="/hire-developers" className="nav_link nav-link">
                  <span>Hire Developers</span>
                </NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink to="/blog" className="nav_link nav-link">
                  <span>Blog</span>
                </NavLink>
              </li>
              <li className="nav-item mr-3 vertical_divider">
                <hr />
              </li>
              <li className="nav-item login_link">
                <NavLink to="/login" className="nav_link nav-link">
                  <span>Login</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
