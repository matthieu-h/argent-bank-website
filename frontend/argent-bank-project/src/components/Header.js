import React from "react";
import { NavLink } from "react-router-dom";
import { home } from "../routes";

const Header = ({
  connexion,
  onclick,
  navlinkTo,
  userName,
  logoSign,
  logoUser,
}) => {
  return (
    <div>
      <nav className="main-nav">
        <NavLink to={home} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="/img/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div className="main-nav-user-sign">
          <div className="main-nav-user">
            <i className={logoUser}></i>
            {userName}
          </div>
          <div>
            <NavLink to={navlinkTo} className="main-nav-item" onClick={onclick}>
              <i className={logoSign}></i>
              {connexion}
            </NavLink>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
