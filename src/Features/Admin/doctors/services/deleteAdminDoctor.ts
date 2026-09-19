import { supabase } from "@/lib/supabaseClient";

export const deleteAdminDoctor = async (doctorId: string) => {
  const [
    { error: appointmentsError },
    { error: schedulesError },
  ] = await Promise.all([
    supabase.from("appointments").delete().eq("doctor_id", doctorId),
    supabase.from("doctor_schedules").delete().eq("doctor_id", doctorId),
  ]);

  if (appointmentsError) throw appointmentsError;
  if (schedulesError) throw schedulesError;

  const { error: doctorError } = await supabase
    .from("doctors")
    .delete()
    .eq("id", doctorId);

  if (doctorError) throw doctorError;

  const { error: profileError } = await supabase
    .from("profiles")
    .delete()
    .eq("id", doctorId);

  if (profileError) throw profileError;
};
