import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const linkClass = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div>
      <nav className={css.kino}>
        <NavLink to="/" className={linkClass}>
          Home Page
        </NavLink>
        {isSignedIn ? (
          <>
            <NavLink to="/contacts" className={linkClass}>
              Contacts Pages
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register" className={linkClass}>
              Registration Pages
            </NavLink>
            <NavLink to="/login" className={linkClass}>
              Login Pages
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
