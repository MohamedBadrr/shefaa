import { supabase } from "@/lib/supabaseClient";

export const getToken = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }

  return session?.access_token ?? null;
};