import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/AuthStore";
import { getDoctorTimes } from "../services/getDoctorTimes";

export const useDoctorTimes = () => {
  const user = useAuthStore((state) => state.user);
  const doctorId = user?.role === "doctor" ? user.id : null;

  return useQuery({
    queryKey: ["doctor-times", doctorId],
    queryFn: () => getDoctorTimes(doctorId!),
    enabled: Boolean(doctorId),
  });
};
