import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateAdminDoctorApproval } from "../services/updateAdminDoctorApproval";

export const useUpdateAdminDoctorApproval = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAdminDoctorApproval,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-doctors"] });
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      toast.success("Doctor request updated.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not update doctor request"),
  });
};
