import type { DoctorAppointment } from "@/Features/Auth/@types";
import { Button } from "@/components/ui/button";
import { getAppointmentStatusMeta } from "@/lib/appointmentStatus";
import { formatDate } from "@/lib/date";
import { CalendarDays, Clock3 } from "lucide-react";
import { useUpdateDoctorAppointmentStatus } from "../hooks/useUpdateDoctorAppointmentStatus";

const DoctorAppointmentCard = ({
  appointment,
}: {
  appointment: DoctorAppointment;
}) => {
  const statusMutation = useUpdateDoctorAppointmentStatus();
  const statusMeta = getAppointmentStatusMeta(appointment.status);
  const canCancel = [
    "pending",
    "reserved",
    "paid_cash",
    "paid_online",
  ].includes(appointment.status);
  const canComplete = ["reserved", "paid_cash", "paid_online"].includes(
    appointment.status,
  );

  const updateStatus = (status: string) =>
    statusMutation.mutate({
      appointmentId: appointment.id,
      status,
      currentStatus: appointment.status,
    });

  return (
    <article className="rounded-xl border border-primary-100 bg-white p-5 shadow-[0_8px_22px_rgba(0,132,212,0.05)]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-primary-600">
            Patient
          </p>
          <p className="mt-1 text-sm font-bold text-neutral-800">
            {appointment.patient_name}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-neutral-600">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} className="text-primary-600" />
            {formatDate(appointment.appointment_date)}
          </span>
          <span className="flex items-center gap-2">
            <Clock3 size={16} className="text-primary-600" />
            {appointment.time_slot.slice(0, 5)}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-extrabold ${statusMeta.className}`}
          >
            {statusMeta.label}
          </span>
        </div>
      </div>
      {(canCancel || canComplete) && (
        <div className="mt-4 flex justify-end  flex-wrap gap-2 border-t border-primary-100 pt-4">
          {canComplete && (
            <Button
              size="sm"
              variant="gradient"
              loading={statusMutation.isPending}
              disabled={statusMutation.isPending}
              onClick={() => updateStatus("completed")}
            >
              Complete appointment
            </Button>
          )}
          {canCancel && (
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 hover:bg-red-50 hover:text-red-700"
              loading={statusMutation.isPending}
              disabled={statusMutation.isPending}
              onClick={() => updateStatus("cancelled")}
            >
              Cancel appointment
            </Button>
          )}
        </div>
      )}
    </article>
  );
};

export default DoctorAppointmentCard;
