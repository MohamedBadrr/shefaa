import type { DoctorReview } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

type ReviewRow = {
  id: string;
  appointment_id: string;
  patient_id: string;
  rating: number;
  comment: string;
  created_at: string;
};

type ProfileRow = {
  id: string;
  first_name: string;
  last_name: string;
  image_url: string | null;
};

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

  const profileMap = new Map((profiles as ProfileRow[]).map((profile) => [profile.id, profile]));

  return reviews.map((review) => {
    const profile = profileMap.get(review.patient_id);
    return {
      id: review.id,
      appointmentId: review.appointment_id,
      patientId: review.patient_id,
      patientName: profile ? `${profile.first_name} ${profile.last_name}` : "Shefaa patient",
      patientImageUrl: profile?.image_url ?? null,
      rating: Number(review.rating),
      comment: review.comment,
      createdAt: review.created_at,
    };
  });
};
