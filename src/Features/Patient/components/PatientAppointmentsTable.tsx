import type { PatientAppointment } from "@/Features/Auth/@types";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PatientAppointmentRow from "./PatientAppointmentRow";

const PatientAppointmentsTable = ({ appointments }: { appointments: PatientAppointment[] }) => {
  if (appointments.length === 0) return null;

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-primary-100 px-5 py-4">
        <h2 className="font-bold text-neutral-900">Your appointments</h2>
        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
          {appointments.length} {appointments.length === 1 ? "appointment" : "appointments"}
        </span>
      </div>
      <Table aria-label="My appointments" className="min-w-[800px]">
        <TableHeader className="bg-primary-50/70 [&_th]:px-5 [&_th]:py-4 [&_th]:text-xs [&_th]:font-bold [&_th]:text-primary-700">
          <TableRow className="border-primary-100 hover:bg-transparent">
            <TableHead scope="col">Doctor</TableHead>
            <TableHead scope="col">Date</TableHead>
            <TableHead scope="col">Time</TableHead>
            <TableHead scope="col">Visit type</TableHead>
            <TableHead scope="col">Status</TableHead>
            <TableHead scope="col" className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <PatientAppointmentRow key={appointment.id} appointment={appointment} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default PatientAppointmentsTable;
