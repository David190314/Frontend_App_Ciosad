import React, { useState } from "react";
import { loginUser } from "../actions/UserAction";
import login from "../Assets/Img/login.png";
import "../Style/Login.css";
import { routerReact } from "../Utils/methods";


const Login = ({setNav}) => {
  const [dataLogin, setDataLogin] = useState({
    id: "",
    password: ""
  });
  const handleInputLogin = (e) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value
    });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    await loginUser(dataLogin)
      .then((resp) => {
        const { data } = resp;
        // const userLogin = { ...data, session: true };
        // const { session, id, token, administrator, email, firstname } = userLogin;
        const sessionActive = JSON.stringify({
          ...data,
          autenticado: true
        });
        window.sessionStorage.setItem("User_login", sessionActive);
        const readDataUser = JSON.parse(window.sessionStorage.getItem("User_login"))
        JSON.parse(window.localStorage.getItem("IniciApp"));
        let userActive = {
          ...readDataUser
        };
        window.localStorage.setItem("IniciApp", JSON.stringify(userActive));
        if (userActive.autenticado && userActive.administrator) {
          window.location.href = routerReact.dashboard;
        } else {
          window.location.href = routerReact.menUser;
        }
      })
      .catch((error) => {
        return error;
      });
    setDataLogin({
      id: "",
      password: ""
    });
  };

  return (
    <div className="login">
      <div className="container-login">
        <div>
          <div className="container-icon-title">
            <img src={login} alt="Icono de Login"></img>
            <h1>Iniciar Sesión</h1>
          </div>
          <form
            autoComplete="off"
            className="form-login"
            onSubmit={handleSubmitForm}
          >
            <div>
              <label htmlFor="Cantidad">ID:</label>
              <input
                autoComplete="off"
                autoFocus
                className="input"
                id="Cantidad"
                name="id"
                onChange={handleInputLogin}
                placeholder="Ingrese su identificación"
                required
                type="text"
                value={dataLogin.id}
              />
              <label htmlFor="Tipo">Password:</label>
              <input
                autoComplete="off"
                className="input"
                name="password"
                onChange={handleInputLogin}
                placeholder="***********"
                type="password"
                required
                value={dataLogin.password}
              />
            </div>
            <input
              className="primary-button login-button-form"
              type="submit"
              value="Iniciar Sesión"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
