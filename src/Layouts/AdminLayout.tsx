import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { useAuthStore } from "@/store/AuthStore";
import { Navigate, Outlet, ScrollRestoration } from "react-router";

const AdminLayout = () => {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== "admin") return <Navigate to="/" replace />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default AdminLayout;
