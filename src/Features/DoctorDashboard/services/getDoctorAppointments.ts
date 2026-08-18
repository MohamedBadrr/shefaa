import type { DoctorAppointment } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

export const getDoctorAppointments = async (
  doctorId: string,
): Promise<DoctorAppointment[]> => {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, patient_id, appointment_date, time_slot, type, status, fee_amount")
    .eq("doctor_id", doctorId)
    .order("appointment_date", { ascending: true })
    .order("time_slot", { ascending: true });

  if (error) throw error;
  const appointments = (data ?? []).map((appointment) => ({ ...appointment, fee_amount: Number(appointment.fee_amount) }));
  if (appointments.length === 0) return [];

  const patientIds = appointments.map((appointment) => appointment.patient_id);
  const { data: profiles, error: profilesError } = await supabase.from("profiles").select("id, first_name, last_name").in("id", patientIds);
  if (profilesError) throw profilesError;
  const profileMap = new Map((profiles ?? []).map((profile) => [profile.id, profile]));

  return appointments.map((appointment) => {
    const profile = profileMap.get(appointment.patient_id);
    return { ...appointment, patient_name: profile ? `${profile.first_name} ${profile.last_name}` : "Patient" };
  });
};
