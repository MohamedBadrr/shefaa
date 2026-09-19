import { supabase } from "@/lib/supabaseClient";

export const deleteAdminUser = async (userId: string) => {
  const { error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", userId);

  if (error) throw error;
};
