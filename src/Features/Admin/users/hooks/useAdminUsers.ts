import { useQuery } from "@tanstack/react-query";
import { getAdminUsers } from "../services/getAdminUsers";

export const useAdminUsers = () =>
  useQuery({
    queryKey: ["admin-users"],
    queryFn: getAdminUsers,
  });
