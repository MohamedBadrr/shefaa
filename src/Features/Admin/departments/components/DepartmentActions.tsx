import { Eye, Pencil, Trash2 } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import AdminDialog from "../../components/AdminDialog";
import type { AdminDepartment } from "../@types/adminDepartment";
import { useDeleteAdminDepartment } from "../hooks/useAdminDepartmentMutations";
import DepartmentDetails from "./DepartmentDetails";
import DepartmentEditForm from "./DepartmentEditForm";

const DepartmentActions = ({ department }: { department: AdminDepartment }) => {
  const deleteDepartment = useDeleteAdminDepartment();

  return (
    <div className="flex items-center justify-end gap-2">
      <AdminDialog
        title={department.name}
        description="Department full data"
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="View department">
            <Eye size={16} />
          </Button>
        }
      >
        <DepartmentDetails department={department} />
      </AdminDialog>
      <AdminDialog
        title={`Update ${department.name}`}
        description="Update department information."
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="Update department">
            <Pencil size={16} />
          </Button>
        }
      >
        <DepartmentEditForm department={department} />
      </AdminDialog>
      <ConfirmationDialog
        title="Delete department?"
        description="This can fail if doctors are still connected to this department."
        confirmLabel="Delete"
        isPending={deleteDepartment.isPending}
        onConfirm={() => deleteDepartment.mutate(department.id)}
        trigger={
          <Button type="button" variant="destructive" size="icon-sm" aria-label="Delete department">
            <Trash2 size={16} />
          </Button>
        }
      />
    </div>
  );
};

export default DepartmentActions;
