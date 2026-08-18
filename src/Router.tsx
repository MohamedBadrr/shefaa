import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./Layouts/MainLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedLayout from "./Layouts/ProtectedLayout";
import DoctorLayout from "./Layouts/DoctorLayout";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorPendingApproval from "./pages/DoctorPendingApproval";
import DoctorRejected from "./pages/DoctorRejected";
import DoctorProfile from "./pages/DoctorProfile";
import GuestLayout from "./Layouts/GuestLayout";
import PatientLayout from "./Layouts/PatientLayout";
import PatientAppointments from "./pages/PatientAppointments";
import PatientProfile from "./pages/PatientProfile";

export const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctors/:doctorId",
        element: <DoctorDetails />,
      },
    ],
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        element: <DoctorLayout />,
        children: [
          {
            path: "/doctor/pending-approval",
            element: <DoctorPendingApproval />,
          },
          {
            path: "/doctor/rejected",
            element: <DoctorRejected />,
          },
          {
            path: "/doctor/dashboard",
            element: <DoctorDashboard />,
          },
          {
            path: "/doctor/profile",
            element: <DoctorProfile />,
          },
        ],
      },
      {
        element: <PatientLayout />,
        children: [
          {
            path: "/patient/appointments",
            element: <PatientAppointments />,
          },
          {
            path: "/patient/profile",
            element: <PatientProfile />,
          },
        ],
      },
    ],
  },
]);
