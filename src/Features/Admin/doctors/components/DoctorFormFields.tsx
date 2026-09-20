import InputField from "@/components/fields/InputField";
import SelectField from "@/components/fields/SelectField";
import TextareaField from "@/components/fields/TextareaField";
import AdminBooleanSelect from "../../components/AdminBooleanSelect";
import {
  approvalStatusOptions,
  doctorLabelClassName,
} from "../constants/adminDoctorForms";
import DoctorDepartmentField from "./DoctorDepartmentField";

const DoctorFormFields = ({
  includeAccountFields = false,
}: {
  includeAccountFields?: boolean;
}) => (
  <>
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
      <InputField
        name="firstName"
        label="First name"
        labelClassName={doctorLabelClassName}
      />
      <InputField
        name="lastName"
        label="Last name"
        labelClassName={doctorLabelClassName}
      />
      {includeAccountFields && (
        <>
          <InputField
            name="email"
            type="email"
            label="Email"
            labelClassName={doctorLabelClassName}
          />
          <InputField
            name="password"
            type="password"
            label="Password"
            labelClassName={doctorLabelClassName}
          />
        </>
      )}
      <InputField
        name="phone"
        label="Phone"
        labelClassName={doctorLabelClassName}
      />
      <InputField
        name="age"
        type="number"
        label="Age"
        labelClassName={doctorLabelClassName}
      />
      <InputField
        name="address"
        label="Address"
        labelClassName={doctorLabelClassName}
      />
      <DoctorDepartmentField />
      <InputField
        name="degree"
        label="Degree"
        labelClassName={doctorLabelClassName}
      />
    </div>
    <TextareaField
      name="description"
      label="Description"
      labelClassName={doctorLabelClassName}
    />
    <div className="grid gap-2 md:grid-cols-2">
      <InputField
        name="fee"
        type="number"
        label="Fee"
        labelClassName={doctorLabelClassName}
      />
      <InputField
        name="yearsOfExperience"
        type="number"
        label="Years"
        labelClassName={doctorLabelClassName}
      />
    </div>
    <div className="grid gap-2 md:grid-cols-2">
      <SelectField
        name="approvalStatus"
        label="Approval"
        options={approvalStatusOptions}
        labelClassName={doctorLabelClassName}
      />
      <AdminBooleanSelect
        name="isAvailable"
        label="Availability"
        trueLabel="Available"
        falseLabel="Unavailable"
      />
    </div>
  </>
);

export default DoctorFormFields;
