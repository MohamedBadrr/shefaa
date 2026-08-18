import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/AuthStore";
import { getPatientAppointments } from "../services/getPatientAppointments";

export const usePatientAppointments = () => {
  const { user } = useAuthStore();
  const patientId = user?.role === "patient" ? user.id : undefined;

  return useQuery({
    queryKey: ["patient-appointments", patientId],
    queryFn: () => getPatientAppointments(patientId!),
    enabled: Boolean(patientId),
  });
};
