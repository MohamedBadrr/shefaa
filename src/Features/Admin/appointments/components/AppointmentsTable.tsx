import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/date";
import type { AdminAppointment } from "../@types/adminAppointment";
import AppointmentActions from "./AppointmentActions";
import AppointmentStatusBadge from "./AppointmentStatusBadge";

const AppointmentsTable = ({ appointments }: { appointments: AdminAppointment[] }) => (
  <div className="overflow-hidden rounded-xl border border-primary-100 bg-white">
    <Table>
      <TableHeader className="bg-primary-50 [&_th]:px-4 [&_th]:py-3 [&_th]:text-primary-700">
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Doctor</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment.id} className="border-primary-100 hover:bg-primary-50/40 [&_td]:p-4">
            <TableCell>{appointment.patientName}</TableCell>
            <TableCell>Dr. {appointment.doctorName}</TableCell>
            <TableCell>{formatDate(appointment.appointmentDate)}</TableCell>
            <TableCell>{appointment.timeSlot.slice(0, 5)}</TableCell>
            <TableCell>
              <AppointmentStatusBadge status={appointment.status} />
            </TableCell>
            <TableCell className="text-right">
              <AppointmentActions appointment={appointment} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default AppointmentsTable;
