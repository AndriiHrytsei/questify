import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail:</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <button type="submit">Sign in!</button>
      <NavLink to='/'>Sign up</NavLink>
    </form>
  );
}
