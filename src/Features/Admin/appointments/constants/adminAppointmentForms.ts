import type { AdminAppointmentValues } from "../@types/adminAppointment";

export const appointmentLabelClassName =
  "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

export const adminAppointmentInitialValues: AdminAppointmentValues = {
  patientId: "",
  doctorId: "",
  appointmentDate: "",
  timeSlot: "",
  scheduleId: "",
  status: "reserved",
};

export const appointmentStatusOptions = [
  { label: "Pending", value: "pending" },
  { label: "Reserved", value: "reserved" },
  { label: "Paid cash", value: "paid_cash" },
  { label: "Paid online", value: "paid_online" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Rejected", value: "rejected" },
];
