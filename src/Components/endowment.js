import React, { useState } from "react";
import { acceptEndowment } from "../actions/UserAction";
import alertStatus from "../Utils/alert";
import "../Style/Endowment.css";
import mascara from "../Assets/Img/mascara.png";
const Endowment = ({ ...rest }) => {
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
    }
  ];

  const [type, setType] = useState(types);

  const [endowmentEpp, setEndowmnetEpp] = useState({
    user_id: rest.userApp.id,
    dateRegister: "",
    amount: ""
  });

  const obj = {
    ...endowmentEpp,
    type: type
  };
  const handleInputFormEndowment = (e) => {
    const { name, value } = e.target;
    setEndowmnetEpp({
      ...endowmentEpp,
      [name]: value
    });
  };
  const handleSelectOption = (e) => {
    setType(e.target.value);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (endowmentEpp.amount !== "0") {
      await acceptEndowment(obj)
        .then(async (response) => {
          const { data } = response;
          if (data === "Sucessfull") {
            const message = "Registro Creado Satisfactoriamente";
            await alertStatus.succesfully(message);
            setEndowmnetEpp({
              ...endowmentEpp,
              amount: ""
            });
          } else {
            await alertStatus.error(data);
          }
        })
        .catch((e) => {
          return e;
        });
    } else {
      const message = "La cantidad de insumos debe de ser mayor a 0";
      await alertStatus.error(message);
      setEndowmnetEpp({
        ...endowmentEpp,
        amount: ""
      });
    }
  };

  return (
    <div className="endowment">
      <div className="container-endowment">
        <div>
          <div className="container-icom-title-endowment">
            <img src={mascara} alt="Icono de Tapabocas"></img>
            <h1>Registro EPP</h1>
          </div>
          <form
            autoComplete="off"
            className="form-register-epp"
            onSubmit={handleSubmitForm}
          >
            <div>
              <label htmlFor="user_id">ID:</label>
              <input
                autoComplete="off"
                autoFocus
                className="input-register-epp"
                id="user_id"
                name="user_id"
                required
                type="text"
                value={rest.userApp.id}
              />
              <label htmlFor="type">Tipo:</label>
              <select
                className="input-register-epp"
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
              <label htmlFor="dateRegister">Fecha Notificación:</label>
              <input
                id="dateRegister"
                name="dateRegister"
                type="date"
                min="01-01-2022"
                className="input-register-epp"
                value={endowmentEpp.dateRegister}
                onChange={handleInputFormEndowment}
                required
              />
              <label htmlFor="Amount">Cantidad:</label>
              <input
                autoComplete="off"
                className="input-register-epp"
                type="text"
                id="Amount"
                name="amount"
                placeholder="15"
                required
                value={endowmentEpp.amount}
                onChange={handleInputFormEndowment}
              />
            </div>
            <input
              className="button-accept-endowment button-endowment"
              type="submit"
              value="Crear Registro"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Endowment;
