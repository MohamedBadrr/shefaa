import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AdminDepartmentValues } from "../@types/adminDepartment";
import { createAdminDepartment } from "../services/createAdminDepartment";
import { deleteAdminDepartment } from "../services/deleteAdminDepartment";
import { updateAdminDepartment } from "../services/updateAdminDepartment";

export const useCreateAdminDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAdminDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-departments"] });
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      toast.success("Department created.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not create department"),
  });
};

export const useUpdateAdminDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      departmentId,
      values,
    }: {
      departmentId: string;
      values: AdminDepartmentValues;
    }) => updateAdminDepartment({ departmentId, values }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-departments"] });
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      toast.success("Department updated.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not update department"),
  });
};

export const useDeleteAdminDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAdminDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-departments"] });
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      toast.success("Department deleted.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not delete department"),
  });
};
