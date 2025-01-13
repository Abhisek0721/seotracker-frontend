import { Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
import { useAppSelecter } from "../redux/Hooks/store";

const ProtectedRoute = () => {
  let location = useLocation();

  const userData = useAppSelecter((state) => state.auth.user);
  const token = useAppSelecter((state) => state.auth.access_token);

  if (!token || !userData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
