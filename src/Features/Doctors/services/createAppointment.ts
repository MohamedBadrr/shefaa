import { supabase } from "@/lib/supabaseClient";
import type { PatientAppointmentValues } from "@/Features/Auth/@types";

export const createAppointment = async (
  doctorId: string,
  patientId: string,
  values: PatientAppointmentValues,
) => {
  const { data, error } = await supabase
    .from("appointments")
    .insert({
      doctor_id: doctorId,
      patient_id: patientId,
      schedule_id: values.scheduleId,
      appointment_date: values.appointmentDate,
      time_slot: values.timeSlot,
      type: "regular",
    })
    .select()
    .single();

  if (error) throw error;

  return data;
};
