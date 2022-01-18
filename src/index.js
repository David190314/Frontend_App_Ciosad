import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initialState } from "./contexto/initialState";
import { StateProvider } from "./contexto/storage";
import { mainReducer } from "./contexto/reducers/index";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
