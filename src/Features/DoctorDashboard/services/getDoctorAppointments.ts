import type { DoctorAppointment, DoctorAppointmentRow, PatientNameRow } from "../@types/doctorAppointment";
import { supabase } from "@/lib/supabaseClient";
import { mapDoctorAppointments } from "../lib/doctorAppointments";

export const getDoctorAppointments = async (doctorId: string): Promise<DoctorAppointment[]> => {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, patient_id, appointment_date, time_slot, type, status, fee_amount")
    .eq("doctor_id", doctorId)
    .order("appointment_date", { ascending: true })
    .order("time_slot", { ascending: true });

  if (error) throw error;
  const appointments = (data ?? []) as DoctorAppointmentRow[];
  if (appointments.length === 0) return [];

  const patientIds = appointments.map((appointment) => appointment.patient_id);
  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select("id, first_name, last_name")
    .in("id", patientIds);

  if (profilesError) throw profilesError;
  return mapDoctorAppointments(appointments, (profiles ?? []) as PatientNameRow[]);
};
