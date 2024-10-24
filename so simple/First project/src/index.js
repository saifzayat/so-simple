import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App_v1 from "./App-v1";
import App_v2 from "./App-v2";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App_v1 />
    <App_v2 />
    <App />
  </React.StrictMode>
);
