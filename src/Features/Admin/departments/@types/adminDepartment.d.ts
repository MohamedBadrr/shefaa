export type AdminDepartment = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type AdminDepartmentValues = {
  name: string;
  description: string;
  isActive: boolean;
};

export type DepartmentRow = {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
};
