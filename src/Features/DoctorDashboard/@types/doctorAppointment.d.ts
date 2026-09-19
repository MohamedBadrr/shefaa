export type DoctorAppointment = {
  id: string;
  patient_id: string;
  patient_name: string;
  appointment_date: string;
  time_slot: string;
  type: string;
  status: string;
  fee_amount: number;
};

export type DoctorAppointmentRow = Omit<DoctorAppointment, "patient_name" | "fee_amount"> & {
  fee_amount: number | string | null;
};

export type PatientNameRow = {
  id: string;
  first_name: string;
  last_name: string;
};

export type DoctorAppointmentStatusValues = {
  appointmentId: string;
  status: "completed" | "cancelled";
  currentStatus: string;
};
