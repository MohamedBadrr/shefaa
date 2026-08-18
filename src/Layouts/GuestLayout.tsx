import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/AuthStore";

const getAuthenticatedPath = (
  role: "admin" | "doctor" | "patient",
  approvalStatus?: "pending" | "approved" | "rejected",
) => {
  if (role === "patient") return "/";
  if (role === "admin") return "/admin/dashboard";
  if (approvalStatus === "pending") return "/doctor/pending-approval";
  if (approvalStatus === "rejected") return "/doctor/rejected";
  return "/doctor/dashboard";
};

const GuestLayout = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (isAuthenticated && user) {
    const approvalStatus =
      user.role === "doctor" ? user.doctorProfile.approvalStatus : undefined;

    return (
      <Navigate to={getAuthenticatedPath(user.role, approvalStatus)} replace />
    );
  }

  return <Outlet />;
};

export default GuestLayout;
