import { supabase } from "@/lib/supabaseClient";

export const removeDoctorTime = async ({
  doctorId,
  timeId,
}: {
  doctorId: string;
  timeId: string;
}) => {
  const { error } = await supabase
    .from("doctor_schedules")
    .update({ is_active: false })
    .eq("id", timeId)
    .eq("doctor_id", doctorId);

  if (error) throw error;
};
