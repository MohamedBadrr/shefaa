import { supabase } from "@/lib/supabaseClient";

export const uploadProfilePhoto = async (userId: string, file: File) => {
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${userId}/${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from("avatars").upload(path, file, { cacheControl: "3600", contentType: file.type, upsert: false });
  if (error) throw error;
  return supabase.storage.from("avatars").getPublicUrl(path).data.publicUrl;
};
