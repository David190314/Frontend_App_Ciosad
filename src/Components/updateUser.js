import React, { useState } from "react";
import { validaLength, comparePassword } from "../Utils/message";
import { updateUserById } from "../actions/UserAction";
import alertStatus from "../Utils/alert";

const UpdateUser = ({ ...rest }) => {

  const [userData, setUserData] = useState({
    administrator: "",
    email: rest.userApp.email,
    id: ""
  });

  const [userUpdate, setUserUpdate] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });
  const handleInputUpdate = (e) => {
    const { name, value } = e.target;
    setUserUpdate({
      ...userUpdate,
      [name]: value
    });
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmitUpdate = async (event) => {
    event.preventDefault();
    const arrayValidate = {
      inputReferent: userUpdate.newPassword,
      inputCompare: userUpdate.confirmNewPassword,
      setUserUpdate
    } 

    const responseLength = await validaLength(
      arrayValidate
    );
    const responseCompare = await comparePassword(
      arrayValidate
    );
    if (responseLength && responseCompare === true) {
      const obj = {
        currentPassword: userUpdate.currentPassword,
        newPassword: userUpdate.newPassword,
        email: userUpdate.email
      };
      await updateUserById(rest.userApp.id, obj)
        .then(async (resp) => {
          const { data } = resp;
          if(data === "update user"){
            const message = 'Usuario Actualizado'
            await alertStatus.succesfully(message);
          }else{
            await alertStatus.error(data);
          }
        })
        .catch((e) => {
          return e;
        });
        setUserUpdate({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      });
    }
  };

  return (
    <div className="login">
      <div className="container-login">
        <div>
          <h1>Actualizar Usuario</h1>
          <form
            autoComplete="off"
            className="form-login"
            onSubmit={handleSubmitUpdate}
          >
            <div>
              <label htmlFor="Cantidad">Email:</label>
              <input
                autoComplete="off"
                autoFocus
                className="input"
                id="Cantidad"
                name="email"
                onChange={handleInputUpdate}
                required
                type="email"
                value={userData.email}
              />
              <label htmlFor="CurrentPassword">Contraseña Actual:</label>
              <input
                autoComplete="off"
                className="input"
                id="CurrentPassword"
                name="currentPassword"
                onChange={handleInputUpdate}
                placeholder="***********"
                type="password"
                required
                value={userUpdate.currentPassword}
              />
              <label htmlFor="newPassword">Contraseña Nueva:</label>
              <input
                autoComplete="off"
                className="input"
                id="newPassword"
                name="newPassword"
                onChange={handleInputUpdate}
                placeholder="***********"
                type="password"
                required
                value={userUpdate.newPassword}
              />
              <label htmlFor="confirm">Confirmar Contraseña:</label>
              <input
                autoComplete="off"
                className="input"
                id="confirm"
                name="confirmNewPassword"
                onChange={handleInputUpdate}
                placeholder="***********"
                type="password"
                required
                value={userUpdate.confirmNewPassword}
              />
            </div>
            <input
              className="primary-button login-button-form"
              type="submit"
              value="Actualizar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
