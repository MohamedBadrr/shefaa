import { supabase } from "@/lib/supabaseClient";
import type { AdminUserValues } from "../@types/adminUser";

export const createAdminUser = async (values: AdminUserValues) => {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phoneNumber,
        age: values.age,
        address: values.address,
        role: values.role,
      },
    },
  });

  if (error) throw error;

  if (data.user && values.role === "admin") {
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ role: "admin" })
      .eq("id", data.user.id);

    if (profileError) throw profileError;
  }

  return data;
};
