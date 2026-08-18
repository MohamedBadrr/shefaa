import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { Outlet, ScrollRestoration } from "react-router";

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
