import { supabase } from "@/lib/supabaseClient";
import type { DoctorApprovalValues } from "../@types/pendingRequest";

export const updateAdminDoctorApproval = async ({
  doctorId,
  approvalStatus,
}: DoctorApprovalValues) => {
  const { error } = await supabase
    .from("doctors")
    .update({
      approval_status: approvalStatus,
      is_available: approvalStatus === "approved",
    })
    .eq("id", doctorId);

  if (error) throw error;
};
