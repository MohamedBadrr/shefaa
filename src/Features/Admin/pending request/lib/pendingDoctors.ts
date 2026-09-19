import type { AdminDoctor } from "../../doctors/@types/adminDoctor";

export function getPendingDoctors(doctors: AdminDoctor[]) {
  return doctors.filter((doctor) => doctor.approvalStatus === "pending");
}
