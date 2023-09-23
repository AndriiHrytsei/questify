import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <section className={css.authContainer}>
      <h2 className={css.heading}>
        Welcome to <span className={css.logo}>Questify!</span>
      </h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default AuthLayout;
