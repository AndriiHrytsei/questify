import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./components/App/App.jsx";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
    {/* Використовуємо HashRouter щоб маршрутизація працювала на гітхабі */}
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
