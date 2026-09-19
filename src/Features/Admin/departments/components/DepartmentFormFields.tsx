import InputField from "@/components/fields/InputField";
import TextareaField from "@/components/fields/TextareaField";
import AdminBooleanSelect from "../../components/AdminBooleanSelect";
import { departmentLabelClassName } from "../constants/adminDepartmentForms";

const DepartmentFormFields = () => (
  <>
    <InputField
      name="name"
      label="Department name"
      placeholder="Cardiology"
      labelClassName={departmentLabelClassName}
    />
    <AdminBooleanSelect
      name="isActive"
      label="Status"
      trueLabel="Active"
      falseLabel="Inactive"
    />
    <TextareaField
      name="description"
      label="Description"
      placeholder="Short department description"
      labelClassName={departmentLabelClassName}
    />
  </>
);

export default DepartmentFormFields;
