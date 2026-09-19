import { supabase } from "@/lib/supabaseClient";
import type { AdminUser, UserProfileRow } from "../@types/adminUser";
import { mapUser } from "../lib/userMappers";

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, first_name, last_name, role, phone_number, age, address, image_url")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return ((data ?? []) as UserProfileRow[]).map(mapUser);
};
