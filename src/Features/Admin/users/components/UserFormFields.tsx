import InputField from "@/components/fields/InputField";
import SelectField from "@/components/fields/SelectField";
import { adminUserRoleOptions, userLabelClassName } from "../constants/adminUserForms";

const UserFormFields = ({
  includeAccountFields = false,
}: {
  includeAccountFields?: boolean;
}) => (
  <>
    <InputField name="firstName" label="First name" labelClassName={userLabelClassName} />
    <InputField name="lastName" label="Last name" labelClassName={userLabelClassName} />
    {includeAccountFields && (
      <>
        <InputField name="email" type="email" label="Email" labelClassName={userLabelClassName} />
        <InputField name="password" type="password" label="Password" labelClassName={userLabelClassName} />
      </>
    )}
    <SelectField
      name="role"
      label="Role"
      options={adminUserRoleOptions}
      labelClassName={userLabelClassName}
    />
    <InputField name="phoneNumber" label="Phone" labelClassName={userLabelClassName} />
    <InputField name="age" type="number" label="Age" labelClassName={userLabelClassName} />
    <InputField name="address" label="Address" labelClassName={userLabelClassName} />
  </>
);

export default UserFormFields;
