import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import LoadingPage from "../../pages/LoadingPage";


const AuthLayout = lazy(() => import("../AuthLayout/AuthLayout"));
const LandingPage = lazy(() => import("../../pages/LandingPage"));
const RestrictedRoute = lazy(() => import("../RestrictedRoute"));
const PrivateRoute = lazy(() => import("../PrivateRoute"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const QuestsPage = lazy(() => import("../../pages/QuestsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoadingPage />
  ) : (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                component={<LandingPage />}
                redirectTo="/quests"
              />
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
          element={<PrivateRoute component={<QuestsPage />} redirectTo="/" />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
