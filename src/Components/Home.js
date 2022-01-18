import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react/cjs/react.development";
const Home = () => {
  const [redirec, setRedirect] = useState(false);
  const prueba = async (e) => {
      console.log(1)
    await setRedirect(1);
  };
  //window.location.search = `home`
  return (
    <>
      <button onChange={prueba}>Hola</button>
      <h1>Hola desde Home</h1>
      {redirec === 1 ? <Redirect to={"/login"} /> : false}
    </>
  );
};

export default Home;
