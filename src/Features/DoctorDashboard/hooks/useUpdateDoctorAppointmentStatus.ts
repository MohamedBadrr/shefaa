import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateDoctorAppointmentStatus } from "../services/updateDoctorAppointmentStatus";
import type { DoctorAppointmentStatusValues } from "../@types/doctorAppointment";

export const useUpdateDoctorAppointmentStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ appointmentId, status, currentStatus }: DoctorAppointmentStatusValues) =>
      updateDoctorAppointmentStatus(appointmentId, status, currentStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctor-appointments"] });
      toast.success("Appointment status updated.");
    },
    onError: (error) => toast.error(error.message || "Could not update appointment"),
  });
};
