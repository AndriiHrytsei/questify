import Logo from "../Logo/Logo";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <section>
      <div className={css.header}>
        <Logo />
        <div className={css.logo}>
          <div className={css.yourName}>
            <h3 className={css.itsJ}>J</h3>
            <h4> Quest Log</h4>
          </div>
        </div>

        <LogOutBtn />
      </div>
    </section>
  );
};
export default AppBar;
