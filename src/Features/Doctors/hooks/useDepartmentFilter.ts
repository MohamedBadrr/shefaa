import { useSearchParams } from "react-router";
import { getDepartmentSearchParams } from "../lib/doctorDisplay";

export function useDepartmentFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const departmentId = searchParams.get("department") ?? "";

  function setDepartmentId(value: string) {
    setSearchParams((params) => getDepartmentSearchParams(params, value));
  }

  return { departmentId, setDepartmentId };
}
