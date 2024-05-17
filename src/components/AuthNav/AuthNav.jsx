import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Registration Pages
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log in Pages
      </NavLink>
    </div>
  );
}
// export default AuthNav;
