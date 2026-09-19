import { useQuery } from "@tanstack/react-query";
import { getAdminDepartments } from "../services/getAdminDepartments";

export const useAdminDepartments = () =>
  useQuery({
    queryKey: ["admin-departments"],
    queryFn: getAdminDepartments,
  });
