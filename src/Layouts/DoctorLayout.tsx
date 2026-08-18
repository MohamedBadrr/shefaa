import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { Navigate, Outlet, ScrollRestoration, useLocation } from "react-router";
import { useAuthStore } from "@/store/AuthStore";

const DoctorLayout = () => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (user?.role !== "doctor") {
    return <Navigate to="/" replace />;
  }

  const approvalStatus = user.doctorProfile.approvalStatus;
  if (
    location.pathname === "/doctor/dashboard" &&
    approvalStatus !== "approved"
  ) {
    return (
      <Navigate
        to={
          approvalStatus === "rejected"
            ? "/doctor/rejected"
            : "/doctor/pending-approval"
        }
        replace
      />
    );
  }

  if (
    location.pathname === "/doctor/pending-approval" &&
    approvalStatus === "approved"
  ) {
    return <Navigate to="/doctor/dashboard" replace />;
  }

  if (
    location.pathname === "/doctor/rejected" &&
    approvalStatus === "approved"
  ) {
    return <Navigate to="/doctor/dashboard" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default DoctorLayout;
