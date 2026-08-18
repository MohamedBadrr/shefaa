import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, UserRound } from "lucide-react";
import { useAuthStore } from "@/store/AuthStore";

const DoctorAccountMenu = () => {
  const [open, setOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  if (!user || user.role !== "doctor") return null;
  const initials = `${user.firstName[0] ?? ""}${user.lastName[0] ?? ""}`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-sm font-extrabold text-primary-700"
        aria-label="Open doctor account menu"
        aria-expanded={open}
      >
        {user.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="Your profile"
            className="size-10 rounded-full object-cover"
          />
        ) : (
          initials
        )}
        <ChevronDown
          size={13}
          className={open ? "rotate-180 transition" : "transition"}
        />
      </button>
      {open && (
        <div className="absolute top-13 right-0 z-50 w-60 rounded-xl border border-primary-100 bg-white p-2 shadow-[0_16px_35px_rgba(0,84,140,0.16)]">
          <div className="flex items-center gap-3 border-b border-primary-100 px-3 py-3">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt={`${user.firstName} ${user.lastName}`}
                className="size-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-10 items-center justify-center rounded-full bg-primary-100 text-xs font-extrabold text-primary-700">
                {initials}
              </div>
            )}
            <p className="truncate text-sm font-extrabold text-neutral-900">
              Dr. {user.firstName} {user.lastName}
            </p>
          </div>
          <Link
            to="/doctor/profile"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
          >
            <UserRound size={17} /> Update profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default DoctorAccountMenu;
