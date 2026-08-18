import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@/store/AuthStore";
import type { PatientAppointmentValues } from "@/Features/Auth/@types";
import { createAppointment } from "../services/createAppointment";

export const useCreateAppointment = (doctorId: string) => {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: PatientAppointmentValues) => {
      if (!user || user.role !== "patient") {
        throw new Error("Please sign in as a patient to book an appointment.");
      }

      return createAppointment(doctorId, user.id, values);
    },
    onSuccess: () => {
      toast.success("Appointment request sent successfully.");
      queryClient.invalidateQueries({ queryKey: ["patient-appointments"] });
    },
    onError: (error) => toast.error(error.message || "Could not book appointment"),
  });
};
