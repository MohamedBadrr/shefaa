import WrapperComponent from "@/components/ui/WrapperComponent";
import { usePatientAppointments } from "@/Features/Patient/hooks/usePatientAppointments";
import PatientAppointmentsTable from "@/Features/Patient/components/PatientAppointmentsTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";

type AppointmentFilter =
  | "all"
  | "upcoming"
  | "completed"
  | "cancelled"
  | "rejected";

const PatientAppointments = () => {
  const {
    data: appointments = [],
    isLoading,
    isError,
  } = usePatientAppointments();
  const [filter, setFilter] = useState<AppointmentFilter>("all");

  const filteredAppointments = useMemo(() => {
    if (filter === "all") return appointments;
    if (filter === "upcoming") {
      return appointments.filter(({ status }) =>
        ["pending", "reserved", "paid_cash", "paid_online"].includes(status),
      );
    }
    return appointments.filter(({ status }) => status === filter);
  }, [appointments, filter]);

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-primary-50/50 py-10 md:py-14">
      <WrapperComponent>
        <header className="flex flex-col justify-between gap-6 border-b border-primary-100 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">
              Your care
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
              My appointments
            </h1>
            <p className="mt-3 text-sm leading-6 text-neutral-500 md:text-base">
              Keep track of your upcoming visits and appointment requests.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select
              value={filter}
              onValueChange={(value) => setFilter(value as AppointmentFilter)}
            >
              <SelectTrigger
                id="appointment-filter"
                aria-label="Filter appointments by status"
                className="h-12 w-full min-w-56 border-primary-200 bg-white px-5 text-sm sm:w-64"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All appointments</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </header>
        <WithLoadingAndError
          isLoading={isLoading}
          isError={isError}
          errorMessageProps={{ message: "We could not load your appointments right now." }}
        >
          <PatientAppointmentsTable appointments={filteredAppointments} />
        </WithLoadingAndError>
        {!isLoading && !isError && appointments.length === 0 && (
          <div className="mt-8 rounded-2xl border border-primary-200 bg-white py-20 text-center text-sm text-neutral-500">
            You do not have any appointments yet.
          </div>
        )}
        {!isLoading &&
          !isError &&
          appointments.length > 0 &&
          filteredAppointments.length === 0 && (
            <div className="mt-5 rounded-2xl border border-primary-200 bg-white py-16 text-center text-sm text-neutral-500">
              No appointments match this filter.
            </div>
          )}
      </WrapperComponent>
    </main>
  );
};

export default PatientAppointments;
