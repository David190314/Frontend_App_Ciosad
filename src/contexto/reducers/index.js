import sessionUsuarioReducer from "./sessionUsuarioReduce";

export const mainReducer = ({sessionUsuario}, action)=>{
    return {
        sessionUsuario : sessionUsuarioReducer(sessionUsuario, action),
    }
}