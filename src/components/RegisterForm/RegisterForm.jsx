import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.userName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail:</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="userName">Username:</label>
      <input type="text" name="userName" id="userName" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <button type="submit">Sign up!</button>
      <NavLink to='/login'>Sign in</NavLink>
    </form>
  );
}
