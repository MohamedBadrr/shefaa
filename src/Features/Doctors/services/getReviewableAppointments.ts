import type { ReviewableAppointment } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

type AppointmentRow = {
  id: string;
  appointment_date: string;
  time_slot: string;
};

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

  const appointments = (data ?? []) as AppointmentRow[];
  if (appointments.length === 0) return [];

  const { data: reviews, error: reviewsError } = await supabase
    .from("doctor_reviews")
    .select("appointment_id")
    .in("appointment_id", appointments.map((appointment) => appointment.id));

  if (reviewsError) throw reviewsError;

  const reviewedIds = new Set((reviews ?? []).map((review) => review.appointment_id));

  return appointments
    .filter((appointment) => !reviewedIds.has(appointment.id))
    .map((appointment) => ({
      id: appointment.id,
      label: `${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(`${appointment.appointment_date}T00:00:00`))} at ${appointment.time_slot.slice(0, 5)}`,
    }));
};
