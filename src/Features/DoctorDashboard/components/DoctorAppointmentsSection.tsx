import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useDoctorAppointments } from "../hooks/useDoctorAppointments";
import DoctorAppointmentsTable from "./DoctorAppointmentsTable";

const DoctorAppointmentsSection = () => {
  const { data: appointments = [], isLoading, isError, refetch } = useDoctorAppointments();

  return (
    <section id="appointments" className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">Schedule</p>
          <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">All appointments</h2>
        </div>
        <span className="text-sm font-bold text-neutral-500">{appointments.length} total</span>
      </div>
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={appointments.length === 0}
        errorMessageProps={{
          message: "We could not load your appointments right now.",
          onRetry: () => {
            void refetch();
          },
        }}
        noDataMessageProps={{ message: "No appointments yet." }}
      >
        <DoctorAppointmentsTable appointments={appointments} />
      </WithLoadingAndError>
    </section>
  );
};

export default DoctorAppointmentsSection;
