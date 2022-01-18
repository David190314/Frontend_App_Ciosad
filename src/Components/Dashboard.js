import React, { useState } from "react";
import "../Style/Dashboard.css";
import Main from "./Dashboard/main/Main";
import NavBarDashboard from "./Dashboard/navbar/NavBar";
import Sidebar from "./Dashboard/sidebar/Sidebar";
import HomeDashboard from "./Dashboard/HomeDashboard/viewHomeDashboard";

const Dashboard = ({ userApp, component , ...rest }) => {
  const [renderComponent, setRenderComponent] = useState({
    name: "Home Dashboard",
    value: "viewDashboard",
    icon: '',
    component : HomeDashboard
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="container">
      <NavBarDashboard userApp={userApp} openSidebar={openSidebar} sidebarOpen={sidebarOpen}/>
      <Main renderComponent={renderComponent} component={component}/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} setRenderComponent={setRenderComponent}/>
    </div>
  );
};

export default Dashboard;
