import { supabase } from "@/lib/supabaseClient";
import type { AdminDepartmentValues } from "../@types/adminDepartment";

export const updateAdminDepartment = async ({
  departmentId,
  values,
}: {
  departmentId: string;
  values: AdminDepartmentValues;
}) => {
  const { error } = await supabase
    .from("departments")
    .update({
      name: values.name.trim(),
      description: values.description.trim(),
      is_active: values.isActive,
    })
    .eq("id", departmentId);

  if (error) throw error;
};
