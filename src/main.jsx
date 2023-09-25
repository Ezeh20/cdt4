import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalContextProvider } from "./context/ModalContext.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);
