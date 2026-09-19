import type { AdminDepartment } from "../../departments/@types/adminDepartment";

export function getDepartmentOptions(departments: AdminDepartment[]) {
  return departments.map((department) => ({
    label: department.name,
    value: department.id,
  }));
}
