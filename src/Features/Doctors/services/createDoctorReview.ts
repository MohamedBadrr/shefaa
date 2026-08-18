import type { ReviewFormValues } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

export const createDoctorReview = async (
  doctorId: string,
  patientId: string,
  appointmentId: string,
  values: ReviewFormValues,
) => {
  const { data, error } = await supabase
    .from("doctor_reviews")
    .insert({
      appointment_id: appointmentId,
      doctor_id: doctorId,
      patient_id: patientId,
      rating: Number(values.rating),
      comment: values.comment.trim(),
    })
    .select()
    .single();

  if (error) throw error;

  return data;
};
