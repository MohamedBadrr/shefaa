import type { AdminUserValues } from "../@types/adminUser";

export const userLabelClassName =
  "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

export const adminUserInitialValues: AdminUserValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "User@123456",
  role: "patient",
  phoneNumber: "",
  age: "",
  address: "",
};

export const adminUserRoleOptions = [
  { label: "Patient", value: "patient" },
  { label: "Admin", value: "admin" },
];
