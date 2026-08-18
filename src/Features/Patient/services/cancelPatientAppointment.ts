import { supabase } from "@/lib/supabaseClient";

export const cancelPatientAppointment = async (appointmentId: string) => {
  const { error } = await supabase
    .from("appointments")
    .update({ status: "cancelled" })
    .eq("id", appointmentId);

  if (error) throw error;
};
