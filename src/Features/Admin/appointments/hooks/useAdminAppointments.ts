import { useQuery } from "@tanstack/react-query";
import { getAdminAppointments } from "../services/getAdminAppointments";

export const useAdminAppointments = () =>
  useQuery({
    queryKey: ["admin-appointments"],
    queryFn: getAdminAppointments,
  });
