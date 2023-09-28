import { Logout } from "../../images/Logout";
import { Challenge } from "../../images/Challenge";
import css from "./LogOutBtn.module.css";

const LogOutBtn = () => {
  return (
    <div className={css.buttons}>
      <button className={css.challenge}>
        <Challenge />
      </button>
      <button className={css.logout}>
        <Logout />
      </button>
    </div>
  );
};
export default LogOutBtn;
