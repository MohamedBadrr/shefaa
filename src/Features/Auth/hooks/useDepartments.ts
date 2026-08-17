import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../services/getDepartments";

export const useDepartments = () => {
  return useQuery({
    queryKey: ["departments", "active"],
    queryFn: getDepartments,
  });
};
