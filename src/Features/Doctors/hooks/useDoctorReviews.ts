import { useQuery } from "@tanstack/react-query";
import { getDoctorReviews } from "../services/getDoctorReviews";

export const useDoctorReviews = (doctorId: string) =>
  useQuery({
    queryKey: ["doctor-reviews", doctorId],
    queryFn: () => getDoctorReviews(doctorId),
    enabled: Boolean(doctorId),
  });
