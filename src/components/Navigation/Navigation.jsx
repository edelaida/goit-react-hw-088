import css from "./Navigation.module.css";
//import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home Page
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts Pages
        </NavLink>
      )}
    </nav>
  );
}
