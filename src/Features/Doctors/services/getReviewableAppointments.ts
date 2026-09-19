import type { ReviewableAppointment } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";
import type { ReviewableAppointmentRow } from "../@types/reviews";
import { getUnreviewedAppointments } from "../lib/reviews";

export const getReviewableAppointments = async (
  doctorId: string,
  patientId: string,
): Promise<ReviewableAppointment[]> => {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, appointment_date, time_slot")
    .eq("doctor_id", doctorId)
    .eq("patient_id", patientId)
    .eq("status", "completed")
    .order("appointment_date", { ascending: false });

  if (error) throw error;

  const appointments = (data ?? []) as ReviewableAppointmentRow[];
  if (appointments.length === 0) return [];

  const { data: reviews, error: reviewsError } = await supabase
    .from("doctor_reviews")
    .select("appointment_id")
    .in("appointment_id", appointments.map((appointment) => appointment.id));

  if (reviewsError) throw reviewsError;

  return getUnreviewedAppointments(
    appointments,
    (reviews ?? []).map((review) => review.appointment_id),
  );
};
