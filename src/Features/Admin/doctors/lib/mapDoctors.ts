import type {
  AdminDoctor,
  DoctorRow,
  DoctorProfileRow,
  DoctorDepartmentRow,
} from "../@types/adminDoctor";

export function mapDoctors(
  doctors: DoctorRow[],
  profiles: DoctorProfileRow[],
  departments: DoctorDepartmentRow[],
): AdminDoctor[] {
  const profileMap = new Map(profiles.map((profile) => [profile.id, profile]));
  const departmentMap = new Map(
    departments.map((department) => [department.id, department]),
  );

  return doctors.map((doctor) => {
    const profile = profileMap.get(doctor.id);
    const department = departmentMap.get(doctor.department_id);
    const rating =
      doctor.manual_rating ?? doctor.rating_avg ?? doctor.starting_rating ?? 0;

    return {
      id: doctor.id,
      email: profile?.email ?? "",
      firstName: profile?.first_name ?? "Doctor",
      lastName: profile?.last_name ?? "",
      phoneNumber: profile?.phone_number ?? null,
      age: profile?.age ?? null,
      address: profile?.address ?? null,
      imageUrl: profile?.image_url ?? null,
      departmentId: doctor.department_id,
      departmentName: department?.name ?? "Department",
      degree: doctor.degree,
      fee: Number(doctor.fee),
      yearsOfExperience: doctor.years_of_experience,
      description: doctor.description,
      isAvailable: doctor.is_available,
      approvalStatus: doctor.approval_status,
      rejectionReason: doctor.rejection_reason,
      rating: Number(rating),
      reviewsCount: doctor.reviews_count,
    };
  });
}
