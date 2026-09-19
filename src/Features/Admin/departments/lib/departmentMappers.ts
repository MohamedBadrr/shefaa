import type {
  AdminDepartment,
  AdminDepartmentValues,
  DepartmentRow,
} from "../@types/adminDepartment";

export function mapDepartment(department: DepartmentRow): AdminDepartment {
  return {
    id: department.id,
    name: department.name,
    description: department.description ?? "",
    isActive: department.is_active,
  };
}

export function getDepartmentFormValues(
  department: AdminDepartment,
): AdminDepartmentValues {
  return {
    name: department.name,
    description: department.description,
    isActive: department.isActive,
  };
}
