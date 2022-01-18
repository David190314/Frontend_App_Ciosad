import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component, userApp, path, ...rest }) => {
  const { RegisterStock, UpdateUser, Endowment, MenUser, Dashboard } = component;
  const componentesDashborad = {
    RegisterStock
  }
  return (
    <>
      {/* <Route path={`${path.dashboard}${path.stock}`}>
        {userApp.autenticado && userApp.administrator ? (
          <Registersotck />
        ) : (
          <Redirect to={"Login"} />
        )}
      </Route> */}
      <Route path={path.update}>
        {userApp.autenticado ? (
          <UpdateUser userApp={userApp} />
        ) : (
          <Redirect to={"Login"} />
        )}
      </Route>
      <Route path={path.endowment}>
        {userApp.autenticado ? (
          <Endowment userApp={userApp} />
        ) : (
          <Redirect to={"Login"} />
        )}
      </Route>
      <Route path={path.menUser}>
        {userApp.autenticado && userApp.administrator !== true ? (
          <MenUser userApp={userApp} />
        ) : (
          <Redirect to={"Login"} />
        )}
      </Route>
      <Route path={path.dashboard}>
        {userApp.autenticado && userApp.administrator ? (
          <Dashboard userApp={userApp} component={componentesDashborad}/>
        ) : (
          <Redirect to={"Login"} />
        )}
      </Route>
    </>
  );
};

export default PrivateRoute;
