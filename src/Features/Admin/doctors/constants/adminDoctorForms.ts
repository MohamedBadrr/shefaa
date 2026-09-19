import type { AdminDoctorValues } from "../@types/adminDoctor";

export const doctorLabelClassName =
  "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

export const adminDoctorInitialValues: AdminDoctorValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "Doctor@123456",
  phone: "",
  age: "",
  address: "",
  departmentId: "",
  degree: "",
  fee: "",
  yearsOfExperience: "",
  description: "",
  approvalStatus: "approved",
  isAvailable: true,
};

export const approvalStatusOptions = [
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

export const availabilityOptions = [
  { label: "Available", value: "true" },
  { label: "Unavailable", value: "false" },
];
