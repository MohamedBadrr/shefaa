import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import AdminPanelShell from "../../components/AdminPanelShell";
import AdminSectionHeader from "../../components/AdminSectionHeader";
import { useAdminDoctors } from "../../doctors/hooks/useAdminDoctors";
import { getPendingDoctors } from "../lib/pendingDoctors";
import PendingDoctorsTable from "./PendingDoctorsTable";

const AdminPendingDoctorsPanel = () => {
  const { data: doctors = [], isLoading, isError, refetch } = useAdminDoctors();
  const pendingDoctors = getPendingDoctors(doctors);

  return (
    <AdminPanelShell>
      <AdminSectionHeader
        eyebrow="Requests"
        title="Pending doctor requests"
        description="Review new doctor applications and approve or reject them."
        count={pendingDoctors.length}
      />
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={pendingDoctors.length === 0}
        errorMessageProps={{
          message: "Could not load pending doctor requests.",
          onRetry: () => {
            void refetch();
          },
        }}
        noDataMessageProps={{ message: "No pending doctor requests right now." }}
      >
        <PendingDoctorsTable doctors={pendingDoctors} />
      </WithLoadingAndError>
    </AdminPanelShell>
  );
};

export default AdminPendingDoctorsPanel;
