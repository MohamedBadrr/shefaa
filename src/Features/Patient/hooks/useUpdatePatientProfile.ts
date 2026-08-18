import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@/store/AuthStore";
import { getCurrentAuthUser } from "@/Features/Auth/services/getCurrentAuthUser";
import type { PatientProfileValues } from "@/Features/Auth/@types";
import { updatePatientProfile } from "../services/updatePatientProfile";

export const useUpdatePatientProfile = () => {
  const { user, setAuthUser } = useAuthStore();

  return useMutation({
    mutationFn: (values: PatientProfileValues) => {
      if (!user || user.role !== "patient") throw new Error("Patient account required");
      return updatePatientProfile(user.id, values);
    },
    onSuccess: async () => {
      const updatedUser = await getCurrentAuthUser();
      if (updatedUser) setAuthUser(updatedUser);
      toast.success("Your profile was updated successfully.");
    },
    onError: (error) => toast.error(error.message || "Could not update your profile"),
  });
};
