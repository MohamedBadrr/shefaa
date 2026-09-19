import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@/store/AuthStore";
import { getCurrentAuthUser } from "@/Features/Auth/services/getCurrentAuthUser";
import type { AdminProfileValues } from "../@types/adminProfile";
import { updateAdminProfile } from "../services/updateAdminProfile";

export function useUpdateAdminProfile() {
  const { user, setAuthUser } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: AdminProfileValues) => {
      if (!user || user.role !== "admin") throw new Error("Admin account required");
      return updateAdminProfile(user.id, values);
    },
    onSuccess: async () => {
      const updatedUser = await getCurrentAuthUser();
      if (updatedUser) setAuthUser(updatedUser);
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Your profile was updated successfully.");
    },
    onError: (error) => toast.error(error.message || "Could not update your profile"),
  });
}
