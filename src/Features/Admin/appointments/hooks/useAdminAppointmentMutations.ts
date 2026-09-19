import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createAdminAppointment } from "../services/createAdminAppointment";
import { deleteAdminAppointment } from "../services/deleteAdminAppointment";
import { updateAdminAppointmentStatus } from "../services/updateAdminAppointmentStatus";

export const useCreateAdminAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAdminAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-appointments"] });
      queryClient.invalidateQueries({ queryKey: ["doctor-schedules"] });
      toast.success("Appointment created.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not create appointment"),
  });
};

export const useUpdateAdminAppointmentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAdminAppointmentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-appointments"] });
      toast.success("Appointment updated.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not update appointment"),
  });
};

export const useDeleteAdminAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAdminAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-appointments"] });
      queryClient.invalidateQueries({ queryKey: ["doctor-schedules"] });
      toast.success("Appointment deleted.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not delete appointment"),
  });
};
