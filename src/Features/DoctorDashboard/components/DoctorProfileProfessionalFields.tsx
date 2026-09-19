import InputField from "@/components/fields/InputField";
import TextareaField from "@/components/fields/TextareaField";
import { doctorLabelClassName } from "../constants/doctorForms";
import DoctorProfileDepartmentField from "./DoctorProfileDepartmentField";

const DoctorProfileProfessionalFields = () => (
  <>
    <InputField name="degree" label="Degree" placeholder="Your degree" labelClassName={doctorLabelClassName} />
    <InputField name="fee" type="number" label="Consultation fee" placeholder="Consultation fee" labelClassName={doctorLabelClassName} />
    <InputField name="yearsOfExperience" type="number" label="Years of experience" placeholder="Years of experience" labelClassName={doctorLabelClassName} />
    <DoctorProfileDepartmentField />
    <TextareaField
      name="description"
      label="Professional summary"
      placeholder="Tell patients about your experience"
      labelClassName={doctorLabelClassName}
      rows={5}
      containerClassName="sm:col-span-2"
    />
  </>
);

export default DoctorProfileProfessionalFields;
