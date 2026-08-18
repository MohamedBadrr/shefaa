import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/AuthStore";
import { getDoctorAppointments } from "../services/getDoctorAppointments";

export const useDoctorAppointments = () => {
  const user = useAuthStore((state) => state.user);
  const doctorId = user?.role === "doctor" ? user.id : undefined;

  return useQuery({
    queryKey: ["doctor-appointments", doctorId],
    queryFn: () => getDoctorAppointments(doctorId!),
    enabled: Boolean(doctorId),
  });
};
