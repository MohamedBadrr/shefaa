import { supabase } from "@/lib/supabaseClient";

export const deleteAdminAppointment = async (appointmentId: string) => {
  const { error } = await supabase
    .from("appointments")
    .delete()
    .eq("id", appointmentId);

  if (error) throw error;
};
