import { useQuery } from "@tanstack/react-query";
import { getDoctorSchedules } from "../services/getDoctorSchedules";

export const useDoctorSchedules = (doctorId: string) =>
  useQuery({
    queryKey: ["doctor-schedules", doctorId],
    queryFn: () => getDoctorSchedules(doctorId),
    enabled: Boolean(doctorId),
  });
