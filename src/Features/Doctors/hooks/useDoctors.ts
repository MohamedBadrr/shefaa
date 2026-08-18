import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../services/getDoctors";

export const useDoctors = (departmentId?: string) =>
  useQuery({
    queryKey: ["public-doctors", departmentId ?? "all"],
    queryFn: () => getDoctors(departmentId),
  });
