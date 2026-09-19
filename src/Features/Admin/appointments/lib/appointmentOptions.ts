import type { AdminDoctor } from "../../doctors/@types/adminDoctor";
import type { AdminUser } from "../../users/@types/adminUser";

export function getPatientOptions(users: AdminUser[]) {
  return users
    .filter((user) => user.role === "patient")
    .map((user) => ({
      label: `${user.firstName} ${user.lastName}`,
      value: user.id,
    }));
}

export function getDoctorOptions(doctors: AdminDoctor[]) {
  return doctors.map((doctor) => ({
    label: `Dr. ${doctor.firstName} ${doctor.lastName}`,
    value: doctor.id,
  }));
}
