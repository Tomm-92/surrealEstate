import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../styles/navbar.css";
import Logo from "../Images/Logo.png";

const NavBar = ({ onLogin, userID, onLogout }) => {
  return (
    <div className="navBar">
      <img src={Logo} alt="website_logo" className="surreal-logo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="/add-property">
          Add Properties
        </Link>
      </ul>
      <div className="facebook-log-in">
        {userID ? (
          <button type="submit" className="button-sign-out" onClick={onLogout}>
            Log Out
          </button>
        ) : (
          <FacebookLogin
            appId="242623234992144"
            callback={onLogin}
            fields="name,email,picture"
            icon="fa-facebook"
            textButton="Login"
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
