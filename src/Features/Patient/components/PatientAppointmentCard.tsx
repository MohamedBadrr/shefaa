import type { PatientAppointment } from "@/Features/Auth/@types";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/date";
import { getAppointmentStatusMeta } from "@/lib/appointmentStatus";
import { CalendarDays, Clock3, MapPin, Stethoscope } from "lucide-react";
import { useCancelPatientAppointment } from "../hooks/useCancelPatientAppointment";
import { Link } from "react-router";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";

const PatientAppointmentCard = ({
  appointment,
}: {
  appointment: PatientAppointment;
}) => {
  const cancelMutation = useCancelPatientAppointment();
  const canCancel = ["pending", "reserved"].includes(appointment.status);
  const statusMeta = getAppointmentStatusMeta(appointment.status);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-primary-200 bg-white  ">
      <div className="absolute inset-y-0 left-0 w-1 bg-primary-500" />
      <div className="flex flex-col justify-between gap-5 p-5 pl-6 sm:flex-row sm:items-center sm:px-7 sm:pl-8 sm:py-6">
        <Link
          to={`/doctors/${appointment.doctorId}`}
          className="group flex min-w-0 items-center gap-4"
        >
          {appointment.doctorImageUrl ? (
            <img
              src={appointment.doctorImageUrl}
              alt={appointment.doctorName}
              className="size-16 rounded-2xl object-cover ring-1 ring-primary-100"
            />
          ) : (
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
              <Stethoscope />
            </div>
          )}
          <div className="min-w-0">
            <p className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary-600">
              Your specialist
            </p>
            <h2 className="truncate text-lg font-extrabold text-neutral-900 transition-colors group-hover:text-primary-700">
              {appointment.doctorName}
            </h2>

            <p className="mt-1 truncate text-sm text-neutral-500">
              {appointment.doctorDegree}
            </p>
          </div>
        </Link>
        <span
          className={`w-fit shrink-0 rounded-full px-4 py-1.5 text-xs font-extrabold ${statusMeta.className}`}
        >
          {statusMeta.label}
        </span>
      </div>
      <div className="grid gap-3 border-t border-primary-100 bg-primary-50/35 px-5 py-5 text-sm sm:grid-cols-3 sm:px-7">
        <div className="flex items-center gap-3 text-neutral-700">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <CalendarDays size={17} />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wide text-neutral-400">
              Date
            </p>
            <p className="mt-0.5 font-bold">
              {formatDate(appointment.appointmentDate)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-neutral-700">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <Clock3 size={17} />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wide text-neutral-400">
              Time
            </p>
            <p className="mt-0.5 font-bold">
              {appointment.timeSlot.slice(0, 5)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-neutral-700">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <MapPin size={17} />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wide text-neutral-400">
              Visit type
            </p>
            <p className="mt-0.5 font-bold">
              {appointment.type === "regular"
                ? "Regular visit"
                : "Custom request"}
            </p>
          </div>
        </div>
      </div>
      {canCancel && (
        <div className="flex border-t border-primary-100 px-5 py-4 sm:justify-end sm:px-7">
          <ConfirmationDialog
            trigger={
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                Cancel appointment
              </Button>
            }
            title="Cancel this appointment?"
            description="This appointment will be cancelled and the time slot will become available again."
            confirmLabel="Cancel appointment"
            isPending={cancelMutation.isPending}
            onConfirm={() => cancelMutation.mutate(appointment.id)}
          />
        </div>
      )}
    </article>
  );
};

export default PatientAppointmentCard;
