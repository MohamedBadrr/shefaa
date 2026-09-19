import { Eye, Pencil, Trash2 } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import AdminDialog from "../../components/AdminDialog";
import type { AdminAppointment } from "../@types/adminAppointment";
import { useDeleteAdminAppointment } from "../hooks/useAdminAppointmentMutations";
import AppointmentDetails from "./AppointmentDetails";
import AppointmentStatusForm from "./AppointmentStatusForm";

const AppointmentActions = ({ appointment }: { appointment: AdminAppointment }) => {
  const deleteAppointment = useDeleteAdminAppointment();

  return (
    <div className="flex items-center justify-end gap-2">
      <AdminDialog
        title="Appointment details"
        description="Appointment full data"
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="View appointment">
            <Eye size={16} />
          </Button>
        }
      >
        <AppointmentDetails appointment={appointment} />
      </AdminDialog>
      <AdminDialog
        title="Update appointment"
        description="Update the appointment status."
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="Update appointment">
            <Pencil size={16} />
          </Button>
        }
      >
        <AppointmentStatusForm appointment={appointment} />
      </AdminDialog>
      <ConfirmationDialog
        title="Delete appointment?"
        description="This removes the appointment record completely."
        confirmLabel="Delete"
        isPending={deleteAppointment.isPending}
        onConfirm={() => deleteAppointment.mutate(appointment.id)}
        trigger={
          <Button type="button" variant="destructive" size="icon-sm" aria-label="Delete appointment">
            <Trash2 size={16} />
          </Button>
        }
      />
    </div>
  );
};

export default AppointmentActions;
