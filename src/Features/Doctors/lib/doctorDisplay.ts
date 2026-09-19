import type { DepartmentType } from "@/Features/Auth/@types";

export function getInitials(name: string) {
  return name.trim().split(/\s+/).map((part) => part[0] ?? "").join("").slice(0, 2);
}

export function getDepartmentFilterOptions(departments: DepartmentType[]) {
  return [
    { label: "All departments", value: "all" },
    ...departments.map((department) => ({ label: department.name, value: department.id })),
  ];
}

export function getDepartmentSearchParams(params: URLSearchParams, departmentId: string) {
  const nextParams = new URLSearchParams(params);
  if (departmentId) nextParams.set("department", departmentId);
  else nextParams.delete("department");
  return nextParams;
}
