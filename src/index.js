import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "components/App";
import reportWebVitals from "./reportWebVitals";
import { register } from "../src/serviceWorkerRegistration";
import AppProvider from "components/AppProvider";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,

  document.getElementById("root")
);

reportWebVitals();
register();
