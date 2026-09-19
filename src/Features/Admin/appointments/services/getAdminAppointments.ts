import { supabase } from "@/lib/supabaseClient";
import type {
  AdminAppointment,
  AppointmentRow,
  ProfileRow,
} from "../@types/adminAppointment";
import { getAppointmentUserIds, mapAppointments } from "../lib/mapAppointments";

export const getAdminAppointments = async (): Promise<AdminAppointment[]> => {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, doctor_id, patient_id, appointment_date, time_slot, type, status, fee_amount")
    .order("appointment_date", { ascending: false });

  if (error) throw error;

  const appointments = (data ?? []) as AppointmentRow[];
  if (appointments.length === 0) return [];

  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select("id, first_name, last_name")
    .in("id", getAppointmentUserIds(appointments));

  if (profilesError) throw profilesError;

  return mapAppointments(appointments, (profiles ?? []) as ProfileRow[]);
};
