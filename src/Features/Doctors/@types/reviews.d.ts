export type ReviewRow = {
  id: string;
  appointment_id: string;
  patient_id: string;
  rating: number | string;
  comment: string | null;
  created_at: string;
};

export type ReviewableAppointmentRow = {
  id: string;
  appointment_date: string;
  time_slot: string;
};
