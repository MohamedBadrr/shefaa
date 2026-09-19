import { supabase } from "@/lib/supabaseClient";
import type { AdminUserUpdateValues } from "../@types/adminUser";

export const updateAdminUser = async ({
  userId,
  values,
}: {
  userId: string;
  values: AdminUserUpdateValues;
}) => {
  const { error } = await supabase
    .from("profiles")
    .update({
      first_name: values.firstName.trim(),
      last_name: values.lastName.trim(),
      role: values.role,
      phone_number: values.phoneNumber.trim(),
      age: Number(values.age),
      address: values.address.trim(),
    })
    .eq("id", userId);

  if (error) throw error;
};
