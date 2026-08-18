import type { DoctorSchedule } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

type ScheduleRow = {
  id: string;
  day: string;
  time_slot: string;
};

export const getDoctorSchedules = async (doctorId: string): Promise<DoctorSchedule[]> => {
  const { data, error } = await supabase
    .from("doctor_schedules")
    .select("id, day, time_slot")
    .eq("doctor_id", doctorId)
    .eq("is_active", true)
    .order("time_slot");

  if (error) throw error;

  return ((data ?? []) as ScheduleRow[]).map((schedule) => ({
    id: schedule.id,
    day: schedule.day,
    timeSlot: schedule.time_slot,
  }));
};
