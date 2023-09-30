import "./App.css";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import { QuestsPage } from "../../pages/QuestsPage";
import AuthLayout from "../AuthLayout/AuthLayout";
import LandingPage from "../../pages/LandingPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
    console.log('UseEffect');
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
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
          <PrivateRoute component={<QuestsPage />} redirectTo="/" />
        }
      />
    </Routes>
  );
};

export default App;
