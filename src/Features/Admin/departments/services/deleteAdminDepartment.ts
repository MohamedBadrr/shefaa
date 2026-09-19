import { supabase } from "@/lib/supabaseClient";

export const deleteAdminDepartment = async (departmentId: string) => {
  const { error } = await supabase
    .from("departments")
    .delete()
    .eq("id", departmentId);

  if (error) throw error;
};
