import React from "react";
import { componetRender } from "../../../Utils/listMenuSidebar";
import mascara from "../../../Assets/Img/mascara.png";
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar, setRenderComponent }) => {
  const handleValueInput = (e) => {
    componetRender.filter((element) => {
      return element.name === e.target.value
        ? setRenderComponent(element)
        : false
    });
  };

  
  return (
    <div className={sidebarOpen ? "sidebar-response" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={mascara} alt="mascara" />
          <h1>Dashboard</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className="sidebar__nenu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home home__sidebar-dashboard"></i>
          <a href="/#">Home</a>
        </div>
        <h2>Management</h2>

        {componetRender.map((e, i) => {
          return (
            <div className="sidebar__link" key={i}>
              <i className={e.icon}></i>
              <input type='submit' value={e.name} onClick={(e) => handleValueInput(e)} />
            </div>
          );
        })}
          
        <div className="sidebar__link sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="/#">Log Out</a>
        </div>
        <div className="name-user-login">
          <h3>Angel</h3>
          <h3>Alvarado</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
