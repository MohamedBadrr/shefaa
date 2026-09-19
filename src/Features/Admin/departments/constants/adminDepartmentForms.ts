import type { AdminDepartmentValues } from "../@types/adminDepartment";

export const departmentLabelClassName =
  "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

export const adminDepartmentInitialValues: AdminDepartmentValues = {
  name: "",
  description: "",
  isActive: true,
};
