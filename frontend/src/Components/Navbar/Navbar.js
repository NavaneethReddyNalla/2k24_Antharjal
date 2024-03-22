import React from "react";
import { NavLink} from "react-router-dom";
import "./Navbar.css";
import Logo from '../../images/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <div className="container-fluid">
        <NavLink className="ms-1 navbar-brand" href="#">
          <img
            src={Logo}
            alt="Logo"
            className="d-inline-block align-text-top"
          />
        </NavLink>
        <ul className="nav d-flex ms-auto">
          <li className="nav-item me-3">
            <NavLink className="nav-link fs-5" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link fs-5" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-5" to="/donate">
              Donate
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;