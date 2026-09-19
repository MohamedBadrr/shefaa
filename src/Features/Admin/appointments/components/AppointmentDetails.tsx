import { formatDate } from "@/lib/date";
import { mapStatus } from "@/lib/mapStatus";
import AdminDetailsGrid from "../../components/AdminDetailsGrid";
import type { AdminAppointment } from "../@types/adminAppointment";

const AppointmentDetails = ({ appointment }: { appointment: AdminAppointment }) => (
  <AdminDetailsGrid
    items={[
      { label: "Patient", value: appointment.patientName },
      { label: "Doctor", value: appointment.doctorName },
      { label: "Date", value: formatDate(appointment.appointmentDate) },
      { label: "Time", value: appointment.timeSlot.slice(0, 5) },
      { label: "Type", value: appointment.type },
      { label: "Status", value: mapStatus(appointment.status).label },
      { label: "Fee", value: `$${appointment.feeAmount}` },
    ]}
  />
);

export default AppointmentDetails;
