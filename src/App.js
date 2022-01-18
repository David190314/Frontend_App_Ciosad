import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routerReact } from "./Utils/methods";
import NavBar from "./Components/Header";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import UpdateUser from "./Components/updateUser";
import PrivateRoute from "./Components/PrivateRoute";
import Endowment from "./Components/endowment";
import MenUser from "./Components/UserStandar";
import Dashboard from "./Components/Dashboard";
import RegisterStock from "./Components/Dashboard/RegisterEpp/RegisterStock/RegisterStock";

function App() {
  const componentesFuncionales = {
    RegisterStock,
    UpdateUser,
    Endowment,
    MenUser,
    Dashboard
  };

  let userApp = {};

  const sesionActive = window.sessionStorage.getItem("User_login");
  if (sesionActive === null) {
    window.localStorage.setItem("IniciApp", JSON.stringify(userApp));
  } else {
    const dataLogin = JSON.parse(sesionActive);
    userApp = {
      ...dataLogin,
    };
  }
  return (
    <BrowserRouter>
      {userApp.autenticado !== true ? <NavBar /> : false}
      <Switch>
        <Route path={routerReact.home} exact component={Home} />
        <Route path={routerReact.login} component={Login}/>
        <Route path={routerReact.register} component={Register} />
        <PrivateRoute
          path={routerReact}
          component={componentesFuncionales}
          userApp={userApp}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
