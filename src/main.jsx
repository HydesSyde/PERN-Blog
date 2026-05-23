import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UseContextProvider from "./context/useContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UseContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UseContextProvider>,
);
