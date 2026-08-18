import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/AuthStore";
import { getReviewableAppointments } from "../services/getReviewableAppointments";

export const useReviewableAppointments = (doctorId: string) => {
  const { user } = useAuthStore();
  const patientId = user?.role === "patient" ? user.id : undefined;

  return useQuery({
    queryKey: ["reviewable-appointments", doctorId, patientId],
    queryFn: () => getReviewableAppointments(doctorId, patientId!),
    enabled: Boolean(doctorId && patientId),
  });
};
