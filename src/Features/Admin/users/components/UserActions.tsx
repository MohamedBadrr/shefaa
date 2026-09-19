import { Eye, Pencil, Trash2 } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import AdminDialog from "../../components/AdminDialog";
import type { AdminUser } from "../@types/adminUser";
import { useDeleteAdminUser } from "../hooks/useAdminUserMutations";
import UserDetails from "./UserDetails";
import UserUpdateForm from "./UserUpdateForm";

const UserActions = ({ user }: { user: AdminUser }) => {
  const deleteUser = useDeleteAdminUser();

  return (
    <div className="flex items-center justify-end gap-2">
      <AdminDialog
        title={`${user.firstName} ${user.lastName}`}
        description="User full data"
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="View user">
            <Eye size={16} />
          </Button>
        }
      >
        <UserDetails user={user} />
      </AdminDialog>
      <AdminDialog
        title={`Update ${user.firstName}`}
        description="Update user profile and role."
        wide
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="Update user">
            <Pencil size={16} />
          </Button>
        }
      >
        <UserUpdateForm user={user} />
      </AdminDialog>
      <ConfirmationDialog
        title="Delete user?"
        description="This removes the profile record. Auth user deletion needs server admin access."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        isPending={deleteUser.isPending}
        onConfirm={() => deleteUser.mutate(user.id)}
        trigger={
          <Button type="button" variant="destructive" size="icon-sm" aria-label="Delete user">
            <Trash2 size={16} />
          </Button>
        }
      />
    </div>
  );
};

export default UserActions;
