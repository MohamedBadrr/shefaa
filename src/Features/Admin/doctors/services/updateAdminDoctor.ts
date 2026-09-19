import { supabase } from "@/lib/supabaseClient";
import type { AdminDoctorUpdateValues } from "../@types/adminDoctor";

export const updateAdminDoctor = async ({
  doctorId,
  values,
}: {
  doctorId: string;
  values: AdminDoctorUpdateValues;
}) => {
  const { error: profileError } = await supabase
    .from("profiles")
    .update({
      first_name: values.firstName.trim(),
      last_name: values.lastName.trim(),
      phone_number: values.phone.trim(),
      age: Number(values.age),
      address: values.address.trim(),
    })
    .eq("id", doctorId);

  if (profileError) throw profileError;

  const { error: doctorError } = await supabase
    .from("doctors")
    .update({
      department_id: values.departmentId,
      degree: values.degree.trim(),
      fee: Number(values.fee),
      years_of_experience: Number(values.yearsOfExperience),
      description: values.description.trim(),
      approval_status: values.approvalStatus,
      is_available: values.isAvailable,
    })
    .eq("id", doctorId);

  if (doctorError) throw doctorError;
};
