import SelectField from "@/components/fields/SelectField";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useDepartments } from "@/Features/Auth/hooks/useDepartments";
import { doctorLabelClassName } from "../constants/doctorForms";
import { getDepartmentOptions } from "../lib/doctorProfile";

const DoctorProfileDepartmentField = () => {
  const { data: departments = [], isLoading, isError, refetch } = useDepartments();

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
      noDataMessageProps={{ message: "No departments available." }}
    >
      <SelectField
        name="departmentId"
        label="Department"
        placeholder="Choose department"
        options={getDepartmentOptions(departments)}
        labelClassName={doctorLabelClassName}
      />
    </WithLoadingAndError>
  );
};

export default DoctorProfileDepartmentField;
