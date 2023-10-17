import Logo from "../Logo/Logo";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import css from "./AppBar.module.css";

const AppBar = () => {
  const userName = JSON.parse(localStorage.getItem("userName"));
  return (
    <section>
      <div className={css.header}>
        <Logo />
        <div className={css.logo}>
          <div className={css.yourName}>
            <h3 className={css.itsJ}>{userName[0]}</h3>
            <h4>{userName}&#39;s Quest Log</h4>
          </div>
        </div>
 
        <LogOutBtn />
      </div>
    </section>
  );
};
export default AppBar;
