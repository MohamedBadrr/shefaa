import type { DoctorReview, ReviewableAppointment } from "@/Features/Auth/@types";
import type { ProfileRow } from "../@types";
import type { ReviewRow, ReviewableAppointmentRow } from "../@types/reviews";

export function mapReviews(reviews: ReviewRow[], profiles: ProfileRow[]): DoctorReview[] {
  const profileMap = new Map(profiles.map((profile) => [profile.id, profile]));
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
}

export function getUnreviewedAppointments(
  appointments: ReviewableAppointmentRow[],
  reviewedIds: string[],
): ReviewableAppointment[] {
  const reviewed = new Set(reviewedIds);
  return appointments
    .filter((appointment) => !reviewed.has(appointment.id))
    .map((appointment) => ({
      id: appointment.id,
      label: `${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(`${appointment.appointment_date}T00:00:00`))} at ${appointment.time_slot.slice(0, 5)}`,
    }));
}

export function getReviewAppointmentOptions(appointments: ReviewableAppointment[]) {
  return appointments.map((appointment) => ({ label: appointment.label, value: appointment.id }));
}
