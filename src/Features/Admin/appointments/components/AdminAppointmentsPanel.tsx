import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import AdminDialog from "../../components/AdminDialog";
import AdminPanelShell from "../../components/AdminPanelShell";
import AdminSectionHeader from "../../components/AdminSectionHeader";
import { useAdminAppointments } from "../hooks/useAdminAppointments";
import AppointmentCreateForm from "./AppointmentCreateForm";
import AppointmentsTable from "./AppointmentsTable";

const AdminAppointmentsPanel = () => {
  const {
    data: appointments = [],
    isLoading,
    isError,
  } = useAdminAppointments();

  return (
    <AdminPanelShell>
      <AdminSectionHeader
        eyebrow="Appointments"
        title="Manage appointments"
        description="Create visits for patients, update statuses, cancel, or delete records."
        count={appointments.length}
      />
      <div className="mb-5 flex justify-end">
        <AdminDialog
          title="Create appointment"
          description="Choose a patient, doctor, and one of the doctor's available slots."
          wide
          trigger={
            <Button type="button" variant="gradient">
              <Plus size={17} />
              Add appointment
            </Button>
          }
        >
          <AppointmentCreateForm />
        </AdminDialog>
      </div>
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={appointments.length === 0}
        errorMessageProps={{
          message: "Could not load appointments.",
        }}
        noDataMessageProps={{ message: "No appointments yet." }}
      >
        <AppointmentsTable appointments={appointments} />
      </WithLoadingAndError>
    </AdminPanelShell>
  );
};

export default AdminAppointmentsPanel;
