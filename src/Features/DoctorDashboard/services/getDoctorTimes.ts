import { supabase } from "@/lib/supabaseClient";
import type { DoctorTime } from "../@types/doctorTimes";
import { weekDayOrder } from "../constants/doctorTimes";

type DoctorTimeRow = {
  id: string;
  day: string;
  time_slot: string;
};

const sortDoctorTimes = (times: DoctorTime[]) =>
  [...times].sort((first, second) => {
    const dayDifference =
      weekDayOrder.indexOf(first.day) - weekDayOrder.indexOf(second.day);

    if (dayDifference !== 0) return dayDifference;

    return first.timeSlot.localeCompare(second.timeSlot);
  });

export const getDoctorTimes = async (doctorId: string): Promise<DoctorTime[]> => {
  const { data, error } = await supabase
    .from("doctor_schedules")
    .select("id, day, time_slot")
    .eq("doctor_id", doctorId)
    .eq("is_active", true);

  if (error) throw error;

  const times = ((data ?? []) as DoctorTimeRow[]).map((time) => ({
    id: time.id,
    day: time.day,
    timeSlot: time.time_slot,
  }));

  return sortDoctorTimes(times);
};
