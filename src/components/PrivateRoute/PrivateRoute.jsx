import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return isSignedIn ? children : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
