import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../Images/Logo.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={Logo} alt="nasa_logo" className="surreal-logo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="/add-property">
          Add Properties
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
