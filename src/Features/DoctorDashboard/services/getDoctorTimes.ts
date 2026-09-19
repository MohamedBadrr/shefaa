import { supabase } from "@/lib/supabaseClient";
import type { DoctorTime, DoctorTimeRow } from "../@types/doctorTimes";
import { mapDoctorTime, sortDoctorTimes } from "../lib/doctorTimes";

export const getDoctorTimes = async (doctorId: string): Promise<DoctorTime[]> => {
  const { data, error } = await supabase
    .from("doctor_schedules")
    .select("id, day, time_slot")
    .eq("doctor_id", doctorId)
    .eq("is_active", true);

  if (error) throw error;
  const times = ((data ?? []) as DoctorTimeRow[]).map(mapDoctorTime);
  return sortDoctorTimes(times);
};
