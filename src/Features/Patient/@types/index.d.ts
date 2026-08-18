
type AppointmentRow = {
  id: string;
  doctor_id: string;
  appointment_date: string;
  time_slot: string;
  type: string;
  status: string;
  fee_amount: number | string;
};

type DoctorRow = {
  id: string;
  degree: string;
};

type ProfileRow = {
  id: string;
  first_name: string;
  last_name: string;
  image_url: string | null;
};
