import { useState } from "react";
import { Link } from "react-router";
import { CalendarDays, UserRound } from "lucide-react";
import { useAuthStore } from "@/store/AuthStore";

const PatientAccountMenu = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuthStore();

  if (!user || user.role !== "patient") return null;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex size-11 items-center justify-center gap-1 rounded-full cursor-pointer border-primary-200  text-primary-700 transition hover:bg-primary-100"
        aria-label="Open account menu"
        aria-expanded={open}
      >
        <UserRound size={19} />
      </button>
      {open && (
        <div className="absolute top-13 right-0 z-50 w-60 rounded-xl border border-primary-100 bg-white p-2 shadow-[0_16px_35px_rgba(0,84,140,0.16)]">
          <div className="border-b border-primary-100 px-3 py-2">
            <p className="truncate text-sm font-extrabold text-neutral-900">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <Link
            to="/patient/appointments"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
          >
            <CalendarDays size={17} /> My appointments
          </Link>
          <Link
            to="/patient/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
          >
            <UserRound size={17} /> Update profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default PatientAccountMenu;
