import type { PatientAppointment } from "@/Features/Auth/@types";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/date";
import { getAppointmentStatusMeta } from "@/lib/appointmentStatus";
import { CalendarDays, Clock3, MapPin, Stethoscope } from "lucide-react";
import { useCancelPatientAppointment } from "../hooks/useCancelPatientAppointment";
import { Link } from "react-router";

const PatientAppointmentCard = ({
  appointment,
}: {
  appointment: PatientAppointment;
}) => {
  const cancelMutation = useCancelPatientAppointment();
  const canCancel = ["pending", "reserved"].includes(appointment.status);
  const statusMeta = getAppointmentStatusMeta(appointment.status);

  return (
    <article className="rounded-xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.06)]">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <Link to={`/doctors/${appointment.doctorId}`}>
          <div className="flex items-center gap-3">
            {appointment.doctorImageUrl ? (
              <img
                src={appointment.doctorImageUrl}
                alt={appointment.doctorName}
                className="size-14 rounded-xl object-cover"
              />
            ) : (
              <div className="flex size-14 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Stethoscope />
              </div>
            )}
            <div>
              <h2 className="font-extrabold text-neutral-900">
                {appointment.doctorName}
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                {appointment.doctorDegree}
              </p>
            </div>
          </div>
        </Link>
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-extrabold ${statusMeta.className}`}
        >
          {statusMeta.label}
        </span>
      </div>
      <div className="mt-5 grid gap-3 border-t border-primary-100 pt-4 text-sm font-semibold text-neutral-600 sm:grid-cols-3">
        <span className="flex items-center gap-2">
          <CalendarDays size={16} className="text-primary-600" />
          {formatDate(appointment.appointmentDate)}
        </span>
        <span className="flex items-center gap-2">
          <Clock3 size={16} className="text-primary-600" />
          {appointment.timeSlot.slice(0, 5)}
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={16} className="text-primary-600" />
          {appointment.type === "regular" ? "Regular visit" : "Custom request"}
        </span>
      </div>
      {canCancel && (
        <div className="flex items-end">
          <Button
            variant="outline"
            size="sm"
            className="mt-5 ms-auto! text-red-600 hover:bg-red-50 hover:text-red-700"
            loading={cancelMutation.isPending}
            disabled={cancelMutation.isPending}
            onClick={() => cancelMutation.mutate(appointment.id)}
          >
            Cancel appointment
          </Button>
        </div>
      )}
    </article>
  );
};

export default PatientAppointmentCard;
