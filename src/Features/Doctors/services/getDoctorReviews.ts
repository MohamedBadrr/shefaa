import type { DoctorReview } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";
import type { ReviewRow } from "../@types/reviews";
import type { ProfileRow } from "../@types";
import { mapReviews } from "../lib/reviews";

export const getDoctorReviews = async (doctorId: string): Promise<DoctorReview[]> => {
  const { data, error } = await supabase
    .from("doctor_reviews")
    .select("id, appointment_id, patient_id, rating, comment, created_at")
    .eq("doctor_id", doctorId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  const reviews = (data ?? []) as ReviewRow[];
  if (reviews.length === 0) return [];

  const patientIds = reviews.map((review) => review.patient_id);
  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select("id, first_name, last_name, image_url")
    .in("id", patientIds);

  if (profilesError) throw profilesError;

  return mapReviews(reviews, (profiles ?? []) as ProfileRow[]);
};
