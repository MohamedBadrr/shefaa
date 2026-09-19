import { useQuery } from "@tanstack/react-query";
import { getAdminDoctors } from "../services/getAdminDoctors";

export const useAdminDoctors = () =>
  useQuery({
    queryKey: ["admin-doctors"],
    queryFn: getAdminDoctors,
  });
