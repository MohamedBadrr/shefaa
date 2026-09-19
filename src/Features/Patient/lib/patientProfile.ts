import type { Patient } from "@/Features/Auth/@types";
import type { PatientProfileValues } from "../@types/patientProfile";

export function getPatientProfileValues(user: Patient): PatientProfileValues {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber ?? "",
    age: user.age?.toString() ?? "",
    address: user.address ?? "",
    imageFile: null,
  };
}

export function getPatientProfileUpdate(values: PatientProfileValues, imageUrl?: string) {
  return {
    first_name: values.firstName.trim(),
    last_name: values.lastName.trim(),
    phone_number: values.phoneNumber.trim() || null,
    age: values.age ? Number(values.age) : null,
    address: values.address.trim() || null,
    ...(imageUrl ? { image_url: imageUrl } : {}),
  };
}
