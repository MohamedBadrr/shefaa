import { registerDoctor } from "@/Features/Auth/services/register";
import { supabase } from "@/lib/supabaseClient";
import type { AdminDoctorValues } from "../@types/adminDoctor";
import { toRegisterValues } from "../lib/doctorFormValues";

export const createAdminDoctor = async (values: AdminDoctorValues) => {
  const result = await registerDoctor(toRegisterValues(values));
  const doctorId = result.user?.id;

  if (!doctorId) throw new Error("Doctor account was not created.");

  const { error } = await supabase
    .from("doctors")
    .update({
      approval_status: values.approvalStatus,
      is_available: values.isAvailable,
    })
    .eq("id", doctorId);

  if (error) throw error;

  return result;
};
