import { supabase } from "@/lib/supabaseClient";
import type { AdminAppointmentValues } from "../@types/adminAppointment";

export const createAdminAppointment = async (
  values: AdminAppointmentValues,
) => {
  const { data: doctor, error: doctorError } = await supabase
    .from("doctors")
    .select("fee")
    .eq("id", values.doctorId)
    .single();

  if (doctorError) throw doctorError;

  const { data, error } = await supabase
    .from("appointments")
    .insert({
      doctor_id: values.doctorId,
      patient_id: values.patientId,
      schedule_id: values.scheduleId,
      appointment_date: values.appointmentDate,
      time_slot: values.timeSlot,
      type: "regular",
      status: values.status,
      fee_amount: Number(doctor.fee ?? 0),
    })
    .select()
    .single();

  if (error) throw error;

  return data;
};
