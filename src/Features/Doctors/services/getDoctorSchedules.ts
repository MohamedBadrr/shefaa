import type { DoctorAvailableSlot } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

type AvailableSlotRow = {
  schedule_id: string;
  appointment_date: string;
  time_slot: string;
};

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

  return ((data ?? []) as AvailableSlotRow[]).map((slot) => ({
    id: slot.schedule_id,
    appointmentDate: slot.appointment_date,
    timeSlot: slot.time_slot,
  }));
};
