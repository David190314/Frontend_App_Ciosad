import { requestGenerico } from "../Utils/http";
import { RESOURCE } from "../Utils/methods";

export const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    requestGenerico.post(`${RESOURCE.register}`, user).then((response) => {
      resolve(response);
    });
  });
};

export const registerEpp = (stockEpp) => {
  return new Promise((resolve, reject) => {
    requestGenerico
      .post(`${RESOURCE.register}/${RESOURCE.stock}`, stockEpp)
      .then((response) => {
        resolve(response);
      });
  });
};

export const loginUser = async (obj) => {
  return new Promise((resolve, reject) => {
    requestGenerico
      .post(`${RESOURCE.login}`, obj)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const userById = async (userId, dispatch) => {
  return new Promise((resolve, reject) => {
    requestGenerico.get(`${RESOURCE.userByid}/${userId}`).then((response) => {
      dispatch({
        type: "INICIAR_SESSION",
        sesion: response.data,
        autenticado: true
      });
      resolve(response);
    });
  });
};

export const updateUserById = async (id, obj) => {
  return new Promise((resolve, reject) => {
    requestGenerico.put(`${RESOURCE.userByid}/${id}`, obj).then((response) => {
      resolve(response);
    });
  });
};

export const acceptEndowment = async (obj) => {
  return new Promise((resolve, reject) => {
    requestGenerico
      .post(`${RESOURCE.endowment}/accept`, obj)
      .then((response) => {
        resolve(response);
      });
  });
};
