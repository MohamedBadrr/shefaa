import { supabase } from "@/lib/supabaseClient";
import { uploadProfilePhoto } from "@/lib/uploadProfilePhoto";
import type { AdminProfileValues } from "../@types/adminProfile";
import { getAdminProfileUpdate } from "../lib/adminProfile";

export async function updateAdminProfile(adminId: string, values: AdminProfileValues) {
  const imageUrl = values.imageFile
    ? await uploadProfilePhoto(adminId, values.imageFile)
    : undefined;

  const { error } = await supabase
    .from("profiles")
    .update(getAdminProfileUpdate(values, imageUrl))
    .eq("id", adminId)
    .eq("role", "admin");

  if (error) throw error;
}
