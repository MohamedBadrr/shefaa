import type { DoctorProfileValues } from "../@types/doctorProfile";
import { supabase } from "@/lib/supabaseClient";
import { uploadProfilePhoto } from "@/lib/uploadProfilePhoto";
import { getProfileUpdate, getDoctorUpdate } from "../lib/doctorProfile";

export const updateDoctorProfile = async (doctorId: string, values: DoctorProfileValues) => {
  const imageFile = values.imageFile instanceof File ? values.imageFile : null;
  const imageUrl = imageFile ? await uploadProfilePhoto(doctorId, imageFile) : undefined;
  const { error: profileError } = await supabase
    .from("profiles")
    .update(getProfileUpdate(values, imageUrl))
    .eq("id", doctorId);

  if (profileError) throw profileError;

  const { error: doctorError } = await supabase
    .from("doctors")
    .update(getDoctorUpdate(values))
    .eq("id", doctorId);

  if (doctorError) throw doctorError;
};
