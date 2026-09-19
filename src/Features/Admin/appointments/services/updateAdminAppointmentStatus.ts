import { supabase } from "@/lib/supabaseClient";

export const updateAdminAppointmentStatus = async ({
  appointmentId,
  status,
}: {
  appointmentId: string;
  status: string;
}) => {
  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", appointmentId);

  if (error) throw error;
};
