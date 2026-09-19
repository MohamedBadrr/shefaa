import type { Admin } from "@/Features/Auth/@types";
import type { AdminProfileValues } from "../@types/adminProfile";

export function getAdminProfileValues(user: Admin): AdminProfileValues {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber ?? "",
    age: user.age?.toString() ?? "",
    address: user.address ?? "",
    imageFile: null,
  };
}

export function getAdminProfileUpdate(values: AdminProfileValues, imageUrl?: string) {
  return {
    first_name: values.firstName.trim(),
    last_name: values.lastName.trim(),
    phone_number: values.phoneNumber.trim() || null,
    age: values.age ? Number(values.age) : null,
    address: values.address.trim() || null,
    ...(imageUrl ? { image_url: imageUrl } : {}),
  };
}
