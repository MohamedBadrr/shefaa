import { supabase } from "@/lib/supabaseClient";

export const updateDoctorAppointmentStatus = async (appointmentId: string, status: string, currentStatus: string) => {
  if (status === "completed" && currentStatus === "reserved") {
    const { error: paymentError } = await supabase.from("appointments").update({ status: "paid_cash" }).eq("id", appointmentId);
    if (paymentError) throw paymentError;
  }

  const { error } = await supabase.from("appointments").update({ status }).eq("id", appointmentId);
  if (error) throw error;
};
