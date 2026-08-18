import Loading from "@/components/Shared/Loading";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { usePatientAppointments } from "@/Features/Patient/hooks/usePatientAppointments";
import PatientAppointmentCard from "@/Features/Patient/components/PatientAppointmentCard";

const PatientAppointments = () => {
  const {
    data: appointments = [],
    isLoading,
    isError,
  } = usePatientAppointments();

  return (
    <main className="bg-primary-50/50 py-12 md:py-16">
      <WrapperComponent>
        <header>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">
            Your care
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-neutral-900">
            My appointments
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-500">
            Keep track of your upcoming visits and appointment requests.
          </p>
        </header>
        {isLoading && <Loading label="Loading appointments" />}
        {isError && (
          <p className="py-20 text-center text-sm font-semibold text-red-500">
            We could not load your appointments right now.
          </p>
        )}
        {!isLoading && !isError && appointments.length === 0 && (
          <div className="py-20 text-center text-sm text-neutral-500">
            You do not have any appointments yet.
          </div>
        )}
        {!isLoading && !isError && appointments.length > 0 && (
          <div className="mt-8 grid gap-4">
            {appointments.map((appointment) => (
              <PatientAppointmentCard
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </div>
        )}
      </WrapperComponent>
    </main>
  );
};

export default PatientAppointments;
