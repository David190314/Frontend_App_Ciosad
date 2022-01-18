import React from "react";
import { routerReact } from "../../../Utils/methods";
import "./NavBar.css";
const NavBarDashboard = ({ sidebarOpen, openSidebar, userApp, ...rest }) => {

    const logout = () =>{
        window.location.href = routerReact.login;
        window.sessionStorage.clear()
        window.localStorage.clear()
    }
  return (
    <div className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <button onClick={logout}>Logout</button>
        <div className="navbar__left__name_user">
          <h3>{userApp.firstname}</h3>
          <h3> {userApp.surname}</h3>
        </div>
        
      </div>
    </div>
  );
};

export default NavBarDashboard;
