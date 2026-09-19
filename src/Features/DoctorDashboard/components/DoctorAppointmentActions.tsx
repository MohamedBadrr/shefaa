import { Button } from "@/components/ui/button";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import type { DoctorAppointment } from "../@types/doctorAppointment";
import { useUpdateDoctorAppointmentStatus } from "../hooks/useUpdateDoctorAppointmentStatus";
import { canCancelAppointment, canCompleteAppointment } from "../lib/doctorAppointments";

const DoctorAppointmentActions = ({ appointment }: { appointment: DoctorAppointment }) => {
  const updateStatus = useUpdateDoctorAppointmentStatus();
  const canCancel = canCancelAppointment(appointment.status);
  const canComplete = canCompleteAppointment(appointment.status);

  if (!canCancel && !canComplete) {
    return <span className="text-neutral-500">No actions available</span>;
  }

  return (
    <div className="flex flex-wrap justify-end gap-2">
      {canComplete && (
        <ConfirmationDialog
          title="Complete this appointment?"
          description="This will mark the appointment as completed for you and the patient."
          confirmLabel="Complete appointment"
          cancelLabel="Cancel"
          destructive={false}
          isPending={updateStatus.isPending}
          onConfirm={() => updateStatus.mutate({
            appointmentId: appointment.id,
            status: "completed",
            currentStatus: appointment.status,
          })}
          trigger={
            <Button type="button" size="sm" variant="gradient" disabled={updateStatus.isPending}>
              Complete appointment
            </Button>
          }
        />
      )}
      {canCancel && (
        <ConfirmationDialog
          title="Cancel this appointment?"
          description="The patient will no longer be able to use this appointment slot."
          confirmLabel="Cancel appointment"
          cancelLabel="Keep appointment"
          isPending={updateStatus.isPending}
          onConfirm={() => updateStatus.mutate({
            appointmentId: appointment.id,
            status: "cancelled",
            currentStatus: appointment.status,
          })}
          trigger={
            <Button type="button" size="sm" variant="outline" disabled={updateStatus.isPending}
              className="text-red-600 hover:bg-red-50 hover:text-red-700">
              Cancel appointment
            </Button>
          }
        />
      )}
    </div>
  );
};

export default DoctorAppointmentActions;
