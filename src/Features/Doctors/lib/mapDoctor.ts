import type { PublicDoctor } from "@/Features/Auth/@types";
import type { DepartmentRow, DoctorRow, ProfileRow } from "../@types";

export const mapDoctor = (
  doctor: DoctorRow,
  profile: ProfileRow | undefined,
  department: DepartmentRow | undefined,
): PublicDoctor => {
  const rating =
    doctor.manual_rating ?? doctor.rating_avg ?? doctor.starting_rating ?? 0;

  return {
    id: doctor.id,
    firstName: profile?.first_name ?? "Shefaa",
    lastName: profile?.last_name ?? "Doctor",
    imageUrl: profile?.image_url ?? null,
    degree: doctor.degree,
    fee: Number(doctor.fee),
    yearsOfExperience: doctor.years_of_experience,
    description: doctor.description,
    isAvailable: doctor.is_available,
    departmentId: doctor.department_id,
    departmentName: department?.name ?? "Medical specialist",
    departmentDescription: department?.description ?? null,
    rating: Number(rating),
    reviewsCount: doctor.reviews_count,
  };
};

export function mapDoctors(doctors: DoctorRow[], profiles: ProfileRow[], departments: DepartmentRow[]) {
  const profileMap = new Map(profiles.map((profile) => [profile.id, profile]));
  const departmentMap = new Map(departments.map((department) => [department.id, department]));
  return doctors.map((doctor) =>
    mapDoctor(doctor, profileMap.get(doctor.id), departmentMap.get(doctor.department_id)),
  );
}
