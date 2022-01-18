/* eslint-disable default-case */
export const initialState = {
  usuario: {
    id: "",
    firstname: "",
    secondname: "",
    surname: "",
    secondsurname: "",
    email: "",
    administrator : ""
  },
  autenticado: false
};

const sessionUsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INICIAR_SESSION":
      return {
        ...state,
        usuario: action.sesion,
        autenticado: action.autenticado,
      };
    case "CERRAR_ SESSION":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado
      };
    case "ACTUALIZAR_USUARIO":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado
      };
    default:
      return state;
  }
};

export default sessionUsuarioReducer;
