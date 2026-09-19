import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/date";
import type { DoctorAppointment } from "../@types/doctorAppointment";
import DoctorAppointmentActions from "./DoctorAppointmentActions";
import DoctorAppointmentStatusBadge from "./DoctorAppointmentStatusBadge";

const DoctorAppointmentsTable = ({ appointments }: { appointments: DoctorAppointment[] }) => (
  <div className="mt-5 overflow-hidden rounded-xl border border-primary-100 bg-white">
    <Table>
      <TableHeader className="bg-primary-50 [&_th]:px-4 [&_th]:py-3 [&_th]:text-primary-700">
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment.id} className="border-primary-100 [&_td]:p-4">
            <TableCell className="font-bold">{appointment.patient_name}</TableCell>
            <TableCell>{formatDate(appointment.appointment_date)}</TableCell>
            <TableCell>{appointment.time_slot.slice(0, 5)}</TableCell>
            <TableCell>
              <DoctorAppointmentStatusBadge status={appointment.status} />
            </TableCell>
            <TableCell className="text-right">
              <DoctorAppointmentActions appointment={appointment} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default DoctorAppointmentsTable;
