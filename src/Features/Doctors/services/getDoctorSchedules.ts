import type { DoctorAvailableSlot } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";
import type { AvailableSlotRow } from "../@types/appointments";
import { mapAvailableSlot } from "../lib/appointmentDates";

export const getDoctorSchedules = async (doctorId: string): Promise<DoctorAvailableSlot[]> => {
  const fromDate = new Date();
  const toDate = new Date();
  toDate.setDate(fromDate.getDate() + 35);

  const { data, error } = await supabase.rpc("get_available_doctor_slots", {
    target_doctor_id: doctorId,
    from_date: fromDate.toISOString().slice(0, 10),
    to_date: toDate.toISOString().slice(0, 10),
  });

  if (error) throw error;

  return ((data ?? []) as AvailableSlotRow[]).map(mapAvailableSlot);
};
