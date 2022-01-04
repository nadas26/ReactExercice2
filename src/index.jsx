import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

//point de montage le rootElement
// <StrictMode> fait du checkup en plus en mode dev et l'utilisation de la balise est du JSX permet d'écrire de maniere reduite
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
