import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { cancelPatientAppointment } from "../services/cancelPatientAppointment";

export const useCancelPatientAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelPatientAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient-appointments"] });
      toast.success("Appointment cancelled successfully.");
    },
    onError: (error) => toast.error(error.message || "Could not cancel appointment"),
  });
};
