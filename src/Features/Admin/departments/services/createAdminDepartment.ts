import { supabase } from "@/lib/supabaseClient";
import type { AdminDepartmentValues } from "../@types/adminDepartment";

export const createAdminDepartment = async (values: AdminDepartmentValues) => {
  const { data, error } = await supabase
    .from("departments")
    .insert({
      name: values.name.trim(),
      description: values.description.trim(),
      is_active: values.isActive,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
};
