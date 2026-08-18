import type { DoctorProfileValues } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";
import { uploadProfilePhoto } from "@/lib/uploadProfilePhoto";

export const updateDoctorProfile = async (doctorId: string, values: DoctorProfileValues) => {
  const imageFile = values.imageFile instanceof File ? values.imageFile : null;
  const imageUrl = imageFile ? await uploadProfilePhoto(doctorId, imageFile) : undefined;
  const { error: profileError } = await supabase.from("profiles").update({ first_name: values.firstName.trim(), last_name: values.lastName.trim(), phone_number: values.phoneNumber.trim() || null, age: values.age ? Number(values.age) : null, address: values.address.trim() || null, ...(imageUrl ? { image_url: imageUrl } : {}) }).eq("id", doctorId);
  if (profileError) throw profileError;
  const { error: doctorError } = await supabase.from("doctors").update({ degree: values.degree.trim(), fee: Number(values.fee), years_of_experience: Number(values.yearsOfExperience), description: values.description.trim(), department_id: values.departmentId }).eq("id", doctorId);
  if (doctorError) throw doctorError;
};
