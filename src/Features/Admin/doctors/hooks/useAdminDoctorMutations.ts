import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createAdminDoctor } from "../services/createAdminDoctor";
import { deleteAdminDoctor } from "../services/deleteAdminDoctor";
import { updateAdminDoctor } from "../services/updateAdminDoctor";

export const useCreateAdminDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAdminDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-doctors"] });
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      toast.success("Doctor created.");
    },
    onError: (error) => toast.error(error.message || "Could not create doctor"),
  });
};

export const useUpdateAdminDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAdminDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-doctors"] });
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      toast.success("Doctor updated.");
    },
    onError: (error) => toast.error(error.message || "Could not update doctor"),
  });
};

export const useDeleteAdminDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAdminDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-doctors"] });
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      toast.success("Doctor deleted.");
    },
    onError: (error) => toast.error(error.message || "Could not delete doctor"),
  });
};
