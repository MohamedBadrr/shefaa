import { Eye, Pencil, Trash2 } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import AdminDialog from "./AdminDialog";

type AdminActionsProps = {
  viewTitle: string;
  viewDescription: string;
  viewContent: React.ReactNode;
  editTitle: string;
  editDescription: string;
  editContent: React.ReactNode;
  deleteTitle: string;
  deleteDescription: string;
  deleteLabel?: string;
  onDelete: () => void;
  isDeleting?: boolean;
  wideEdit?: boolean;
};

const AdminActions = ({
  viewTitle,
  viewDescription,
  viewContent,
  editTitle,
  editDescription,
  editContent,
  deleteTitle,
  deleteDescription,
  deleteLabel = "Delete",
  onDelete,
  isDeleting = false,
  wideEdit = false,
}: AdminActionsProps) => (
  <div className="flex items-center justify-end gap-2">
    <AdminDialog
      trigger={
        <Button type="button" variant="outline" size="icon-sm" title="View">
          <Eye size={16} />
        </Button>
      }
      title={viewTitle}
      description={viewDescription}
    >
      {viewContent}
    </AdminDialog>
    <AdminDialog
      trigger={
        <Button type="button" variant="outline" size="icon-sm" title="Update">
          <Pencil size={16} />
        </Button>
      }
      title={editTitle}
      description={editDescription}
      wide={wideEdit}
    >
      {editContent}
    </AdminDialog>
    <ConfirmationDialog
      trigger={
        <Button type="button" variant="destructive" size="icon-sm" title="Delete">
          <Trash2 size={16} />
        </Button>
      }
      title={deleteTitle}
      description={deleteDescription}
      confirmLabel={deleteLabel}
      isPending={isDeleting}
      onConfirm={onDelete}
    />
  </div>
);

export default AdminActions;
