import type { Doctor, DepartmentOption } from "@/Features/Auth/@types";
import type { DoctorProfileValues } from "../@types/doctorProfile";

export function getDoctorRating(profile?: Doctor["doctorProfile"] | null) {
  return Number(profile?.manualRating ?? profile?.ratingAvg ?? profile?.startingRating ?? 0);
}

export function getDoctorProfileValues(user: Doctor): DoctorProfileValues {
  const profile = user.doctorProfile;
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber ?? "",
    age: user.age?.toString() ?? "",
    address: user.address ?? "",
    imageFile: null,
    degree: profile.degree,
    fee: profile.fee.toString(),
    yearsOfExperience: profile.yearsOfExperience.toString(),
    description: profile.description ?? "",
    departmentId: profile.departmentId,
  };
}

export function getDepartmentOptions(departments: DepartmentOption[]) {
  return departments.map((department) => ({ label: department.name, value: department.id }));
}

export function getProfileUpdate(values: DoctorProfileValues, imageUrl?: string) {
  return {
    first_name: values.firstName.trim(),
    last_name: values.lastName.trim(),
    phone_number: values.phoneNumber.trim() || null,
    age: values.age ? Number(values.age) : null,
    address: values.address.trim() || null,
    ...(imageUrl ? { image_url: imageUrl } : {}),
  };
}

export function getDoctorUpdate(values: DoctorProfileValues) {
  return {
    degree: values.degree.trim(),
    fee: Number(values.fee),
    years_of_experience: Number(values.yearsOfExperience),
    description: values.description.trim(),
    department_id: values.departmentId,
  };
}
