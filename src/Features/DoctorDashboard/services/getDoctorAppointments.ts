import type { DoctorAppointment } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

export const getDoctorAppointments = async (
  doctorId: string,
): Promise<DoctorAppointment[]> => {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, patient_id, appointment_date, time_slot, type, status")
    .eq("doctor_id", doctorId)
    .order("appointment_date", { ascending: true })
    .order("time_slot", { ascending: true });

  if (error) throw error;
  return data ?? [];
};
