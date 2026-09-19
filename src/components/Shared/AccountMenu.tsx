import { Link } from "react-router";
import { CalendarDays, UserRound } from "lucide-react";
import { useAuthStore } from "@/store/AuthStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const AccountMenu = ({ onNavigate }: { onNavigate?: () => void }) => {
  const user = useAuthStore((state) => state.user);
  if (!user) return null;

  const initials = `${user.firstName[0] ?? ""}${user.lastName[0] ?? ""}`;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label="Open account menu"
        className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-sm font-extrabold text-primary-700"
      >
        {user.imageUrl ? (
          <img src={user.imageUrl} alt="Your profile" className="size-10 rounded-full object-cover" />
        ) : (
          <span>{initials || <UserRound size={20} />}</span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}
        className="w-60 rounded-xl border border-primary-100 bg-white p-2 shadow-[0_16px_35px_rgba(0,84,140,0.16)]">
        <div className="border-b border-primary-100 px-3 py-3">
          <p className="truncate text-sm font-extrabold text-neutral-900">
            {user.role === "doctor" ? "Dr. " : ""}{user.firstName} {user.lastName}
          </p>
        </div>
        {user.role === "patient" && (
          <DropdownMenuItem render={<Link to="/patient/appointments" />} onClick={onNavigate}
            className="mt-1 cursor-pointer gap-3 rounded-lg px-3 py-2.5 font-bold text-neutral-700 focus:bg-primary-50">
            <CalendarDays size={17} /> My appointments
          </DropdownMenuItem>
        )}
        <DropdownMenuItem render={<Link to={`/${user.role}/profile`} />} onClick={onNavigate}
          className="mt-1 cursor-pointer gap-3 rounded-lg px-3 py-2.5 font-bold text-neutral-700 focus:bg-primary-50">
          <UserRound size={17} /> Update profile
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountMenu;
