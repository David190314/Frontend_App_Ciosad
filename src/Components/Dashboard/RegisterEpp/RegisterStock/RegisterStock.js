import React, {useState} from "react";
import { registerEpp } from "../../../../actions/UserAction";
import './RegisterStock.css'
import alertStatus from "../../../../Utils/alert";
import { formDate } from "../../../../Utils/sendDate";

const RegisterStock = () => {
  const types = [
    {
      value: "Selecet",
      name: "Select Type..."
    },
    {
      value: "N95",
      name: "N95"
    },

    {
      value: "TERMOSELLADO",
      name: "TERMOSELLADO"
    },
  ];

  const [amount, setAmoaunt] = useState("");
  const [type, setType] = useState(types);
  const date = new Date();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dateBd = formDate(date);

    const register = {
      stock: amount,
      available: amount,
      type: type,
      created_at: dateBd
    };

    console.log(register)
      await registerEpp(register)
      .then(async (resp) => {
        const {data} = resp
        if (data === "Sucessfull") {
          const message = "Registro Creado Satisfactoriamente";
          await alertStatus.succesfully(message);
        } else {
          await alertStatus.errorCreateUser(data);
        }
      })
      .catch((e) => {
        return e;
      });
    setAmoaunt("");
  };

  const handleInputAmount = (e) => {
    setAmoaunt(e.target.value);
  };

  const handleSelectOption = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="register-stock">
      <div className="form-cantainer-stock">
        <div className="form-container-card">
          <h1>Register EPP</h1>
          <form autoComplete="off" className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Cantidad">Amount:</label>
              <input
                autoComplete="off"
                autoFocus
                className="input"
                id="Cantidad"
                value={amount}
                onChange={handleInputAmount}
                placeholder="600"
                required
                type="text"
              />
              <label htmlFor="Tipo" className="select-option">
                Type:
              </label>
              <select
                className="input"
                value={type.value}
                onChange={handleSelectOption}
              >
                {types.map((e) => {
                  return (
                    <option key={e.value} value={e.value}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              className="primary-button login-button"
              type="submit"
              value="Create"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterStock;
