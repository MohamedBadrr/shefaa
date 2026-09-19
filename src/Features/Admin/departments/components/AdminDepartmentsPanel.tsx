import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import AdminDialog from "../../components/AdminDialog";
import AdminPanelShell from "../../components/AdminPanelShell";
import AdminSectionHeader from "../../components/AdminSectionHeader";
import { useAdminDepartments } from "../hooks/useAdminDepartments";
import DepartmentCreateForm from "./DepartmentCreateForm";
import DepartmentsTable from "./DepartmentsTable";

const AdminDepartmentsPanel = () => {
  const { data: departments = [], isLoading, isError } = useAdminDepartments();

  return (
    <AdminPanelShell>
      <AdminSectionHeader
        eyebrow="Departments"
        title="Manage medical departments"
        description="Create, update, deactivate, or delete departments used across Shefaa."
        count={departments.length}
      />
      <div className="mb-5 flex justify-end">
        <AdminDialog
          title="Add department"
          description="Create a new department for doctors and public listings."
          trigger={
            <Button type="button" variant="gradient">
              <Plus size={17} />
              Add department
            </Button>
          }
        >
          <DepartmentCreateForm />
        </AdminDialog>
      </div>
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={departments.length === 0}
        errorMessageProps={{
          message: "Could not load departments.",
        }}
        noDataMessageProps={{ message: "No departments yet." }}
      >
        <DepartmentsTable departments={departments} />
      </WithLoadingAndError>
    </AdminPanelShell>
  );
};

export default AdminDepartmentsPanel;
