import { UserRound } from "lucide-react";
import type { AdminUser } from "../@types/adminUser";

const UserIdentity = ({ user }: { user: AdminUser }) => (
  <div className="flex items-center gap-3">
    {user.imageUrl ? (
      <img
        src={user.imageUrl}
        alt={`${user.firstName} ${user.lastName}`}
        className="size-10 rounded-full object-cover"
      />
    ) : (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        <UserRound size={18} />
      </span>
    )}
    <div>
      <p className="font-extrabold text-neutral-900">{user.firstName} {user.lastName}</p>
      <p className="text-xs font-semibold text-neutral-500">{user.email}</p>
    </div>
  </div>
);

export default UserIdentity;
