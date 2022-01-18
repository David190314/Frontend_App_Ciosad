import alertStatus from "./alert";

export async function validaLength(props) {
  const { setUserUpdate, setUsers, setUserConfirmPassword } = props;
  let response = false;
  if (props.inputCompare.length > 8) {
    response = true;
  } else {
    if (setUsers !== undefined) {
      setUserConfirmPassword("");
      setUsers((data) => ({
        ...data,
        password: ""
      }));
    } else if (setUserUpdate !== undefined) {
      setUserUpdate({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      });
    }
    const message = "Las clave ingresada debe de tener más de 8 caracteres";
    await alertStatus.warning(message);
    response = false;
  }
  return response;
}

export async function comparePassword(props) {
  const { setUserUpdate, setUsers, setUserConfirmPassword } = props;
  let response = false;
  if (props.inputReferent === props.inputCompare) {
    response = true;
  } else {
    if (setUsers !== undefined) {
      setUserConfirmPassword("");
      setUsers((data) => ({
        ...data,
        password: ""
      }));
    } else if (setUserUpdate !== null) {
      setUserUpdate({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      });
    }
    const message = "Las claves ingresadas no son iguales";
    await alertStatus.warning(message);
    response = false;
  }
  return response;
}
