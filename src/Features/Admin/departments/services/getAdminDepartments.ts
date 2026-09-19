import { supabase } from "@/lib/supabaseClient";
import type { AdminDepartment, DepartmentRow } from "../@types/adminDepartment";
import { mapDepartment } from "../lib/departmentMappers";

export const getAdminDepartments = async (): Promise<AdminDepartment[]> => {
  const { data, error } = await supabase
    .from("departments")
    .select("id, name, description, is_active")
    .order("name", { ascending: true });

  if (error) throw error;

  return ((data ?? []) as DepartmentRow[]).map(mapDepartment);
};
