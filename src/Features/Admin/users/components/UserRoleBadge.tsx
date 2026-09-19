import { mapStatus } from "@/lib/mapStatus";
import type { AdminUser } from "../@types/adminUser";

const UserRoleBadge = ({ role }: { role: AdminUser["role"] }) => {
  const { label, className } = mapStatus(role);

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${className}`}>
      {label}
    </span>
  );
};

export default UserRoleBadge;
