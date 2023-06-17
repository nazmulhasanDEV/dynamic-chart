import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Main";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./auth/AuthContext";
import { BrowserRouter } from "react-router-dom";

// bootstrap and custom css file
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/dashboard.css";
import "./assets/styles/layout.css";
import "./assets/styles/loginRegister.css";
import "./assets/styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
