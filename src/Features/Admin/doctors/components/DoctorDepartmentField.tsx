import SelectField from "@/components/fields/SelectField";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useAdminDepartments } from "../../departments/hooks/useAdminDepartments";
import { doctorLabelClassName } from "../constants/adminDoctorForms";
import { getDepartmentOptions } from "../lib/departmentOptions";

const DoctorDepartmentField = () => {
  const { data: departments = [], isLoading, isError, refetch } =
    useAdminDepartments();

  return (
    <WithLoadingAndError
      isLoading={isLoading}
      isError={isError}
      hasNoData={departments.length === 0}
      errorMessageProps={{
        message: "Could not load departments.",
        onRetry: () => {
          void refetch();
        },
      }}
      noDataMessageProps={{
        message: "No departments available.",
        description: "Add a department before creating a doctor.",
      }}
    >
      <SelectField
        name="departmentId"
        label="Department"
        options={getDepartmentOptions(departments)}
        labelClassName={doctorLabelClassName}
      />
    </WithLoadingAndError>
  );
};

export default DoctorDepartmentField;
