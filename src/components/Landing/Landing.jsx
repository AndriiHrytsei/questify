import { useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import css from "./Landing.module.css";

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(getUserName(form.elements.userName.value));
    form.reset();
    navigate("/login");
  };

  return (
    <div className={css.landingBox}>
      <p className={css.landingLogo}>Questify!</p>
      <h3 className={css.landingHeading}>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </h3>
      <div className={css.formBox}>
        <p className={css.formHeading}>Choose your name to sign up or log in</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userName" id="userName" required />
          <button type="submit" className={css.goBtn}>
            go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;
