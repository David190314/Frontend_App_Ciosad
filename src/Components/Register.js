import React, { useState } from "react";
import alertStatus from "../Utils/alert";
import { registerUser } from "../actions/UserAction";
import { validaLength, comparePassword } from "../Utils/message";
import "../Style/Register.css";

const Register = () => {
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [users, setUsers] = useState({
    id: "",
    firstname: "",
    secondname: "",
    surname: "",
    secondsurname: "",
    email: "",
    password: "",
    costcenter: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value
    });
  };

  const handleInputConfirmPassword = (e) => {
    setUserConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const arrayValidate = {
      inputReferent: users.password,
      inputCompare: userConfirmPassword,
      setUserConfirmPassword,
      setUsers
    }
    const responseLength = await validaLength(
      arrayValidate
    );
    const responseCompare = await comparePassword(
      arrayValidate
    );

    if (responseLength && responseCompare === true) {
      await registerUser(users)
        .then(async (resp) => {
          const { data } = resp;
          if (data === "Sucessfull") {
            const message = "Usuario Creado Satisfactoriamente";
            await alertStatus.succesfully(message);
          } else {
            await alertStatus.error(data);
          }
          setUsers({
            id: "",
            firstname: "",
            secondname: "",
            surname: "",
            secondsurname: "",
            email: "",
            password: "",
            costcenter: ""
          });
          setUserConfirmPassword("");
        })
        .catch((e) => {
          return e;
        });
    }
  };

  return (
    <div className="register">
      <div className="form-container-register">
        <div className="form-container-register-card">
          <h2>My Account</h2>
          <form
            autoComplete="off"
            className="form-register"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="id">ID:</label>
              <input
                autoComplete="off"
                autoFocus
                className="input-register"
                id="id"
                name="id"
                onChange={handleInput}
                placeholder="10734343"
                required
                type="text"
                value={users.id}
              />

              <label htmlFor="firstname">Nombres:</label>
              <input
                autoComplete="off"
                className="input-register"
                id="firstname"
                name="firstname"
                onChange={handleInput}
                placeholder=" Jeims Josember "
                required
                type="text"
                value={users.firstname}
              />

              <label htmlFor="surname">Apellidos:</label>
              <input
                autoComplete="off"
                className="input-register"
                id="surname"
                name="surname"
                onChange={handleInput}
                placeholder=" Torres Alvarez "
                required
                type="text"
                value={users.surname}
              />

              <label htmlFor="email">Correo:</label>
              <input
                autoComplete="off"
                className="input-register"
                id="email"
                name="email"
                placeholder="Josember.50@gmail.com"
                onChange={handleInput}
                required
                type="email"
                value={users.email}
              />

              <label htmlFor="password">Contraseña:</label>
              <input
                autoComplete="off"
                className="input-register"
                id="password"
                name="password"
                onChange={handleInput}
                placeholder="**************"
                required
                type="password"
                value={users.password}
              />

              <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
              <input
                autoComplete="off"
                className="input-register"
                id="confirmPassword"
                onChange={handleInputConfirmPassword}
                placeholder="**************"
                required
                type="password"
                value={userConfirmPassword}
              />

              <label htmlFor="costcenter">Centro de Costos:</label>
              <input
                autoComplete="off"
                className="input-register"
                id="costcenter"
                name="costcenter"
                onChange={handleInput}
                placeholder="Sistemas"
                required
                type="text"
                value={users.costcenter}
              />
            </div>
            <input
              className="primary-button-register button-register"
              type="submit"
              value="Registrar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
