import logo from "@/assets/logo.png";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Find Doctors", to: "/doctors" },
    { link: "About us", to: "/about-us" },
    { link: "Contact us", to: "/contact-us" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="">
      <div className="py-5 px-6 md:py-8 md:px-10 lg:py-8 lg:px-25 flex items-center md:justify-between w-full">
        {/* logo */}
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="shefaa logo" className="w-11.5 h-12" />
          <h1 className="text-primary-700 text-[27px] font-semibold">Shefaa</h1>
        </div>

        {/* links */}
        <div className="hidden md:flex items-center justify-center gap-10">
          {links.map(({ link, to }, index) => (
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
          <Button variant={"gradient"} size={"lg"}>
            Join Us
          </Button>
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
        transition-all duration-300 ease-out 
        ${openMenu ? "opactit-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible pointer-events-none"}
        `}
        >
          {links.map(({ link, to }, index) => (
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
            <Button variant={"gradient"} className={"w-full!"} size={"lg"}>
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
