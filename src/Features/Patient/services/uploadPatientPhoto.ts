import { supabase } from "@/lib/supabaseClient";

const AVATAR_BUCKET = "avatars";

export const uploadPatientPhoto = async (patientId: string, file: File) => {
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${patientId}/${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from(AVATAR_BUCKET).upload(path, file, {
    cacheControl: "3600",
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    if (error.message.toLowerCase().includes("bucket not found")) {
      throw new Error("The avatars storage bucket is missing. Create it in Supabase first.");
    }
    throw error;
  }
  return supabase.storage.from(AVATAR_BUCKET).getPublicUrl(path).data.publicUrl;
};
