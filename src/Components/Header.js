import React from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css";


export let refNavBar; 

const NavBar = () => {
  return (
    <nav className="header" >
      <div className="logo">
        <Link to={"/"}>
          <i className="fa fa-hospital-o" id="header__logo-icon"></i>
        </Link>
      </div>
      <div className="menuNav">
        <Link to={"Login"}>
          <h3> Login </h3>
        </Link>
        <Link to={"Register"}>
          <h3> Register </h3>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
