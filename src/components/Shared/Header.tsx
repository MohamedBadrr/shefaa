import logo from "@/assets/logo.png";
import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "@/store/AuthStore";
import { useLogout } from "@/Features/Auth/hooks/useLogout";
import { getHeaderLinks } from "@/lib/navigation";
import PatientAccountMenu from "./PatientAccountMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  const { isPending: isPendingLogout, mutate: mutateLogout } = useLogout();
  const roleLinks = getHeaderLinks(isAuthenticated, user?.role);

  return (
    <nav className=" border-b border-primary/50">
      <div className="py-5 px-6 md:py-8 md:px-10 lg:py-8 lg:px-25 flex items-center md:justify-between w-full">
        {/* logo */}
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="shefaa logo" className="w-11.5 h-12" />
          <h1 className="text-primary-700 text-[27px] font-semibold">Shefaa</h1>
        </div>

        {/* links */}
        <div className="hidden md:flex items-center justify-center gap-10">
          {roleLinks.map(({ link, to }, index) => (
            <NavLink
              to={to}
              key={index}
              className={({ isActive }) =>
                `font-semibold text-base transition-all duration-200 ${
                  isActive
                    ? "text-primary-700"
                    : "text-neutral-900 hover:text-primary-700"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
        {/* join us */}
        <div className="hidden md:block">
          {!isAuthenticated ? (
            <Link to="/login">
              <Button variant={"gradient"} size={"lg"}>
                Join Us
              </Button>
            </Link>
          ) : user?.role === "patient" ? (
            <div className="flex items-center gap-3">
              <PatientAccountMenu />
              <Button
                onClick={() => mutateLogout()}
                variant="gradient"
                loading={isPendingLogout}
                disabled={isPendingLogout}
                size="lg"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => mutateLogout()}
              variant={"gradient"}
              className={"w-full!"}
              loading={isPendingLogout}
              disabled={isPendingLogout}
              size={"lg"}
            >
              Logout
            </Button>
          )}
        </div>

        {!openMenu ? (
          <Menu
            className="md:hidden ms-auto text-neutral-900 cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <X
            className="md:hidden ms-auto text-neutral-900 cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        )}
      </div>
      {openMenu && (
        <div
          className={`absolute w-full flex items-start flex-col gap-4 px-6 py-5 bg-secondary 
        transition-all duration-300 ease-out  z-100
        ${openMenu ? "opactit-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible pointer-events-none"}
        `}
        >
          {roleLinks.map(({ link, to }, index) => (
            <NavLink
              to={to}
              key={index}
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `font-semibold text-base text-center w-full transition-all duration-200  ${
                  isActive
                    ? "text-primary-700"
                    : "text-neutral-900 hover:text-primary-700"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
          <div className="w-full">
            {!isAuthenticated ? (
              <Link to="/login" onClick={() => setOpenMenu(false)}>
                <Button variant={"gradient"} className={"w-full!"} size={"lg"}>
                  Join Us
                </Button>
              </Link>
            ) : user?.role === "patient" ? (
              <>
                <PatientAccountMenu />
                <Button
                  onClick={() => mutateLogout()}
                  variant="gradient"
                  className="w-full!"
                  loading={isPendingLogout}
                  disabled={isPendingLogout}
                  size="lg"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={() => mutateLogout()}
                variant={"gradient"}
                className={"w-full!"}
                loading={isPendingLogout}
                disabled={isPendingLogout}
                size={"lg"}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
