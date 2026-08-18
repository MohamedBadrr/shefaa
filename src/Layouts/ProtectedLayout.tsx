import { Navigate, Outlet, ScrollRestoration } from "react-router";
import { useAuthStore } from "@/store/AuthStore";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <ScrollRestoration />
      <Outlet />{" "}
    </>
  );
};

export default ProtectedLayout;
