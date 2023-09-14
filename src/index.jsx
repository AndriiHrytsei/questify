import React from "react";
import ReactDOM from "react-dom/client";
import 'normalize.css';
import App from "./components/App/App.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
{/* Використовуємо HashRouter щоб маршрутизація працювала на гітхабі */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
