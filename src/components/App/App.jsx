import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import { RegisterPage } from "../../pages/RegisterPage";
import { LoginPage } from "../../pages/LoginPage";
import { QuestsPage } from "../../pages/QuestsPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RestrictedRoute component={<RegisterPage />} redirectTo="/quests" />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute component={<LoginPage />} redirectTo="/quests" />
        }
      />
      <Route
        path="/quests"
        element={
          <PrivateRoute component={<QuestsPage />} redirectTo="/login" />
        }
      />
    </Routes>
  );
}
