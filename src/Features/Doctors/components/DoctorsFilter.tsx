import { useDepartments } from "@/Features/Auth/hooks/useDepartments";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDepartmentFilter } from "../hooks/useDepartmentFilter";
import { getDepartmentFilterOptions } from "../lib/doctorDisplay";

const DoctorsFilter = () => {
  const { departmentId, setDepartmentId } = useDepartmentFilter();
  const { data: departments = [], isLoading, isError } = useDepartments();
  const options = getDepartmentFilterOptions(departments);
  const selectedOption = options.find(
    (option) => option.value === (departmentId || "all"),
  );

  return (
    <WithLoadingAndError
      isLoading={isLoading}
      isError={isError}
      errorMessageProps={{
        message: "Could not load departments.",
      }}
    >
      <Select
        value={departmentId || "all"}
        onValueChange={(value) =>
          setDepartmentId(value === "all" ? "" : (value ?? ""))
        }
      >
        <SelectTrigger
          aria-label="Filter doctors by department"
          className="h-12! w-full min-w-56 sm:w-auto"
        >
          <SelectValue>
            {selectedOption?.label ?? "Selected department"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </WithLoadingAndError>
  );
};

export default DoctorsFilter;
