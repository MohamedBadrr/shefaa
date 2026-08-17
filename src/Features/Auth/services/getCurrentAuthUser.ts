import { supabase } from "@/lib/supabaseClient";
import type { AuthUser } from "../@types";

export const getCurrentAuthUser =
  async (): Promise<AuthUser | null> => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    const {
      data: profile,
      error: profileError,
    } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (profileError) {
      throw profileError;
    }

    const baseUser = {
      id: profile.id,
      email: profile.email,
      firstName: profile.first_name,
      lastName: profile.last_name,
      phoneNumber:
        profile.phone_number,
      age: profile.age,
      address: profile.address,
      imageUrl: profile.image_url,
    };

    if (profile.role === "patient") {
      return {
        ...baseUser,
        role: "patient",
      };
    }

    if (profile.role === "admin") {
      return {
        ...baseUser,
        role: "admin",
      };
    }

    if (profile.role === "doctor") {
      const {
        data: doctor,
        error: doctorError,
      } = await supabase
        .from("doctors")
        .select("*")
        .eq("id", user.id)
        .single();

      if (doctorError) {
        throw doctorError;
      }

      return {
        ...baseUser,

        role: "doctor",

        doctorProfile: {
          departmentId:
            doctor.department_id,

          degree: doctor.degree,

          fee: Number(doctor.fee),

          yearsOfExperience:
            doctor.years_of_experience,

          description:
            doctor.description,

          isAvailable:
            doctor.is_available,

          approvalStatus:
            doctor.approval_status,

          rejectionReason:
            doctor.rejection_reason,

          startingRating:
            Number(
              doctor.starting_rating
            ),

          ratingAvg:
            doctor.rating_avg === null
              ? null
              : Number(
                  doctor.rating_avg
                ),

          manualRating:
            doctor.manual_rating === null
              ? null
              : Number(
                  doctor.manual_rating
                ),

          reviewsCount:
            doctor.reviews_count,
        },
      };
    }

    return null;
  };