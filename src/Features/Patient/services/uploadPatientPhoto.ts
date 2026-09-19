import { supabase } from "@/lib/supabaseClient";

import { avatarBucket } from "../constants/patientProfile";
import { getPatientPhotoPath } from "../lib/profilePhoto";

export const uploadPatientPhoto = async (patientId: string, file: File) => {
  const path = getPatientPhotoPath(patientId, file.name);
  const { error } = await supabase.storage.from(avatarBucket).upload(path, file, {
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
  return supabase.storage.from(avatarBucket).getPublicUrl(path).data.publicUrl;
};
