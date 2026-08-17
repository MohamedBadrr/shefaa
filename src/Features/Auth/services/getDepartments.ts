import { supabase } from "@/lib/supabaseClient";
import type { DepartmentType } from "../@types";

export const getDepartments = async (): Promise<DepartmentType[]> => {
  const { data, error } = await supabase
    .from("departments")
    .select("id, name, description, is_active")
    .eq("is_active", true)
    .order("name");

  if (error) throw error;
  return data ?? [];
};
