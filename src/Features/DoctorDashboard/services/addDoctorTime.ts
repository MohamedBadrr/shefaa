import { supabase } from "@/lib/supabaseClient";
import type { DoctorTimeValues } from "../@types/doctorTimes";

export const addDoctorTime = async (
  doctorId: string,
  values: DoctorTimeValues,
) => {
  const { data: existingTime, error: existingError } = await supabase
    .from("doctor_schedules")
    .select("id")
    .eq("doctor_id", doctorId)
    .eq("day", values.day)
    .eq("time_slot", values.timeSlot)
    .eq("is_active", true)
    .maybeSingle();

  if (existingError) throw existingError;
  if (existingTime) throw new Error("This time already exists.");

  const { data, error } = await supabase
    .from("doctor_schedules")
    .insert({
      doctor_id: doctorId,
      day: values.day,
      time_slot: values.timeSlot,
      is_active: true,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
};
