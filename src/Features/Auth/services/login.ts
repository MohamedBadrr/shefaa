import { supabase } from "@/lib/supabaseClient";
import type { AuthUser } from "../@types";


type LoginProps = {
  email: string;
  password: string;
};

export const login = async ({
  email,
  password,
}: LoginProps): Promise<AuthUser> => {
  // 1. Login with Supabase Auth
  const {
    data: { user, session },
    error: loginError,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    throw loginError;
  }

  if (!user || !session) {
    throw new Error("Login failed");
  }

  // 2. Get common profile
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
    phoneNumber: profile.phone_number,
    age: profile.age,
    address: profile.address,
    imageUrl: profile.image_url,
  };

  // 3. Patient
  if (profile.role === "patient") {
    return {
      ...baseUser,
      role: "patient",
    };
  }

  // 4. Admin
  if (profile.role === "admin") {
    return {
      ...baseUser,
      role: "admin",
    };
  }

  // 5. Doctor
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
        departmentId: doctor.department_id,
        degree: doctor.degree,
        fee: Number(doctor.fee),
        yearsOfExperience:
        doctor.years_of_experience,
        description: doctor.description,
        isAvailable: doctor.is_available,
        approvalStatus:
        doctor.approval_status,
        rejectionReason:
        doctor.rejection_reason,
        startingRating:
        Number(doctor.starting_rating),
        ratingAvg:
        doctor.rating_avg === null
            ? null
            : Number(doctor.rating_avg),

        manualRating:
          doctor.manual_rating === null
            ? null
            : Number(doctor.manual_rating),

        reviewsCount:
          doctor.reviews_count,
      },
    };
  }

  throw new Error("Invalid user role");
};