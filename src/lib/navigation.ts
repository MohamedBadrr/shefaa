import { links } from "@/Constants/data";
import type { UserRole } from "@/Features/Auth/@types";

type HeaderLink = {
  link: string;
  to: string;
};

export const getHeaderLinks = (
  isAuthenticated: boolean,
  role?: UserRole,
): HeaderLink[] => {
  const visibleLinks = links.filter(({ to }) => to !== "/doctors");

  if (!isAuthenticated || role === "patient") {
    visibleLinks.push({ link: "Find Doctors", to: "/doctors" });
  }

  if (role === "doctor") {
    visibleLinks.push({ link: "Dashboard", to: "/doctor/dashboard" });
  }

  if (role === "admin") {
    visibleLinks.push({ link: "Dashboard", to: "/admin/dashboard" });
  }

  return visibleLinks;
};
