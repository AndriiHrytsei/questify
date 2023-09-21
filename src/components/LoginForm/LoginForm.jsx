import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section className={css.loginFormBox}>
      <h2 className={css.heading}>
        Welcome to <span className={css.logo}>Questify!</span>
      </h2>
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Enter your password"
        />
        <div className={css.submit}>
          <button type="submit" className={css.loginSubmit}>
            Sign in!
          </button>
          <NavLink to="/" className={css.goToSignUp}>
            Sign up
          </NavLink>
        </div>
      </form>
    </section>
  );
}
