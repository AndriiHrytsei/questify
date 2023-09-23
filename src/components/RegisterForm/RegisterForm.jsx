import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { NavLink, useNavigate } from "react-router-dom";
import css from "./RegisterForm.module.css";
import { getUserName } from "../../redux/auth/authSlice";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    dispatch(getUserName(form.elements.userName.value));
    form.reset();
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className={css.registerForm}>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Enter your email"
      />
      <input
        type="text"
        name="userName"
        id="userName"
        required
        placeholder="Enter your username"
      />
      <input
        type="password"
        name="password"
        id="password"
        required
        placeholder="Enter your password"
      />
      <div className={css.submit}>
        <button type="submit" className={css.registerSubmit}>
          Sign up!
        </button>
        <NavLink to="/login" className={css.goToSignIn}>
          Sign in
        </NavLink>
      </div>
    </form>
  );
}
