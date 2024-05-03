import css from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsSignedIn, selectUserData } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

const Navigation = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const linkClass = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(apiLogout());
  };

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
            <div>
              <span>Hi, {userData.name}</span>
              <button onClick={onLogout} type="button">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/register" className={linkClass}>
              Registration Pages
            </NavLink>
            <NavLink to="/login" className={linkClass}>
              Log in Pages
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
