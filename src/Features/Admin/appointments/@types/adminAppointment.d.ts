export type AdminAppointment = {
  id: string;
  doctorId: string;
  doctorName: string;
  patientId: string;
  patientName: string;
  appointmentDate: string;
  timeSlot: string;
  type: string;
  status: string;
  feeAmount: number;
};

export type AdminAppointmentValues = {
  patientId: string;
  doctorId: string;
  appointmentDate: string;
  timeSlot: string;
  scheduleId: string;
  status: string;
};

export type AppointmentRow = {
  id: string;
  doctor_id: string;
  patient_id: string;
  appointment_date: string;
  time_slot: string;
  type: string;
  status: string;
  fee_amount: number | string | null;
};

export type ProfileRow = {
  id: string;
  first_name: string;
  last_name: string;
};
