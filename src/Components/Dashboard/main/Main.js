import React from "react";
import "./Main.css";

const Main = ({ renderComponent, ...rest }) => {
  return (
    <div className="container-main">
      {<renderComponent.component />}
    </div>
  );
};

export default Main;
