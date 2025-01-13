import { useAppSelecter } from "../Hooks/store";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const userData = useAppSelecter((state) => state.auth.user);
  const token = useAppSelecter((state) => state.auth.access_token);

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  // Return an Outlet for the nested routes if all checks pass
  if (token) {
    return <Outlet />;
  }

  return null;
};
