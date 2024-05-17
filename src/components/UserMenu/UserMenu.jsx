import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { apiLogout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    console.log("taskkk");
    dispatch(apiLogout);
    console.log(apiLogout);
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
//export default UserMenu;
