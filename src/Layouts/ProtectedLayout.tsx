import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/AuthStore";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
