import type {
  AdminUser,
  AdminUserUpdateValues,
  UserProfileRow,
} from "../@types/adminUser";

export function mapUser(profile: UserProfileRow): AdminUser {
  return {
    id: profile.id,
    email: profile.email,
    firstName: profile.first_name,
    lastName: profile.last_name,
    role: profile.role,
    phoneNumber: profile.phone_number,
    age: profile.age,
    address: profile.address,
    imageUrl: profile.image_url,
  };
}

export function getUserUpdateValues(user: AdminUser): AdminUserUpdateValues | null {
  if (user.role === "doctor") return null;

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    phoneNumber: user.phoneNumber ?? "",
    age: user.age ?? "",
    address: user.address ?? "",
  };
}
