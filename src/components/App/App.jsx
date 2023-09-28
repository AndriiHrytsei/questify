import "./App.css";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import { QuestsPage } from "../../pages/QuestsPage";
import AuthLayout from "../AuthLayout/AuthLayout";
import LandingPage from "../../pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<LandingPage />} redirectTo="/quests" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/quests"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/quests" />
          }
        />
      </Route>
      <Route
        path="/quests"
        element={
          <PrivateRoute component={<QuestsPage />} redirectTo="/login" />
        }
      />
    </Routes>
  );
};

export default App;
