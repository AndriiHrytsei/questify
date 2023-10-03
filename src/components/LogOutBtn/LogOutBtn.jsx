import { Logout } from "../../images/Logout";
import { Challenge } from "../../images/Challenge";
import css from "./LogOutBtn.module.css";
import { logout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.buttons}>
      <button className={css.challenge}>
        <Challenge />
      </button>
      <button className={css.logout} onClick={handleLogout}>
        <Logout />
      </button>
    </div>
  );
};
export default LogOutBtn;
