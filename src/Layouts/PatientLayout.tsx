import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { useAuthStore } from "@/store/AuthStore";
import { Navigate, Outlet } from "react-router";

const PatientLayout = () => {
  const { user } = useAuthStore();

  if (user?.role !== "patient") return <Navigate to="/" replace />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PatientLayout;
