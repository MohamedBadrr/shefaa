import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateDoctorAppointmentStatus } from "../services/updateDoctorAppointmentStatus";

export const useUpdateDoctorAppointmentStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ appointmentId, status, currentStatus }: { appointmentId: string; status: string; currentStatus: string }) => updateDoctorAppointmentStatus(appointmentId, status, currentStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctor-appointments"] });
      toast.success("Appointment status updated.");
    },
    onError: (error) => toast.error(error.message || "Could not update appointment"),
  });
};
