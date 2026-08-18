import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/AuthStore";

const DoctorLayout = () => {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== "doctor") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DoctorLayout;
