import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <section className={css.authContainer}>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default AuthLayout;
