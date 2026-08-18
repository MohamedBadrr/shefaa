import type { PatientProfileValues } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";
import { uploadPatientPhoto } from "./uploadPatientPhoto";

export const updatePatientProfile = async (patientId: string, values: PatientProfileValues) => {
  const imageFile = values.imageFile instanceof File ? values.imageFile : null;
  const imageUrl = imageFile ? await uploadPatientPhoto(patientId, imageFile) : undefined;
  const { error } = await supabase
    .from("profiles")
    .update({
      first_name: values.firstName.trim(),
      last_name: values.lastName.trim(),
      phone_number: values.phoneNumber.trim() || null,
      age: values.age ? Number(values.age) : null,
      address: values.address.trim() || null,
      ...(imageUrl ? { image_url: imageUrl } : {}),
    })
    .eq("id", patientId);

  if (error) throw error;
};
