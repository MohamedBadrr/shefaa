import { Link } from "react-router";
import { Stethoscope } from "lucide-react";
import type { PatientAppointment } from "@/Features/Auth/@types";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate } from "@/lib/date";
import { getAppointmentStatusMeta } from "@/lib/appointmentStatus";
import { useCancelPatientAppointment } from "../hooks/useCancelPatientAppointment";

const PatientAppointmentRow = ({ appointment }: { appointment: PatientAppointment }) => {
  const cancelMutation = useCancelPatientAppointment();
  const canCancel = ["pending", "reserved"].includes(appointment.status);
  const status = getAppointmentStatusMeta(appointment.status);

  return (
    <TableRow className="border-primary-100 hover:bg-primary-50/40 [&_td]:px-5 [&_td]:py-5">
      <TableCell>
        <Link to={`/doctors/${appointment.doctorId}`} className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-primary-500">
          {appointment.doctorImageUrl ? (
            <img src={appointment.doctorImageUrl} alt="" className="size-11 shrink-0 rounded-xl object-cover ring-1 ring-primary-100" />
          ) : (
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <Stethoscope size={20} aria-hidden="true" />
            </span>
          )}
          <div>
            <p className="font-bold text-neutral-900 group-hover:text-primary-700">{appointment.doctorName}</p>
            <p className="mt-1 text-xs text-neutral-500">{appointment.doctorDegree}</p>
          </div>
        </Link>
      </TableCell>
      <TableCell className="font-medium text-neutral-700">{formatDate(appointment.appointmentDate)}</TableCell>
      <TableCell className="text-neutral-700 tabular-nums">{appointment.timeSlot.slice(0, 5)}</TableCell>
      <TableCell className="text-neutral-600">{appointment.type === "regular" ? "Regular visit" : "Custom request"}</TableCell>
      <TableCell>
        <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${status.className}`}>
          {status.label}
        </span>
      </TableCell>
      <TableCell className="text-right">
        {canCancel ? (
          <ConfirmationDialog
            title="Cancel this appointment?"
            description="This appointment will be cancelled and the time slot will become available again."
            confirmLabel="Cancel appointment"
            isPending={cancelMutation.isPending}
            onConfirm={() => cancelMutation.mutate(appointment.id)}
            trigger={
              <Button type="button" variant="outline" size="sm" disabled={cancelMutation.isPending}
                className="border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700"
                aria-label={`Cancel appointment with ${appointment.doctorName} on ${formatDate(appointment.appointmentDate)}`}>
                Cancel appointment
              </Button>
            }
          />
        ) : (
          <span className="text-xs text-neutral-400">No actions available</span>
        )}
      </TableCell>
    </TableRow>
  );
};

export default PatientAppointmentRow;
