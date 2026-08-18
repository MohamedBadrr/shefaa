import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { getCurrentAuthUser } from "@/Features/Auth/services/getCurrentAuthUser";
import { useAuthStore } from "@/store/AuthStore";
import type { DoctorProfileValues } from "@/Features/Auth/@types";
import { updateDoctorProfile } from "../services/updateDoctorProfile";

export const useUpdateDoctorProfile = () => {
  const { user, setAuthUser } = useAuthStore();
  return useMutation({
    mutationFn: (values: DoctorProfileValues) => {
      if (!user || user.role !== "doctor") throw new Error("Doctor account required");
      return updateDoctorProfile(user.id, values);
    },
    onSuccess: async () => {
      const updatedUser = await getCurrentAuthUser();
      if (updatedUser) setAuthUser(updatedUser);
      toast.success("Your doctor profile was updated successfully.");
    },
    onError: (error) => toast.error(error.message || "Could not update your profile"),
  });
};
