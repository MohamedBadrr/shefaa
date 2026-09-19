import type { PatientProfileValues } from "../@types/patientProfile";
import { supabase } from "@/lib/supabaseClient";
import { uploadPatientPhoto } from "./uploadPatientPhoto";
import { getPatientProfileUpdate } from "../lib/patientProfile";

export const updatePatientProfile = async (patientId: string, values: PatientProfileValues) => {
  const imageFile = values.imageFile instanceof File ? values.imageFile : null;
  const imageUrl = imageFile ? await uploadPatientPhoto(patientId, imageFile) : undefined;
  const { error } = await supabase
    .from("profiles")
    .update(getPatientProfileUpdate(values, imageUrl))
    .eq("id", patientId);

  if (error) throw error;
};
