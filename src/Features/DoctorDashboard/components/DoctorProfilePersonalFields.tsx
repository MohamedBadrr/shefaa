import InputField from "@/components/fields/InputField";
import { doctorLabelClassName } from "../constants/doctorForms";

const DoctorProfilePersonalFields = () => (
  <>
    <InputField name="firstName" label="First name" placeholder="Your first name" labelClassName={doctorLabelClassName} />
    <InputField name="lastName" label="Last name" placeholder="Your last name" labelClassName={doctorLabelClassName} />
    <InputField name="phoneNumber" label="Phone number" placeholder="Your phone number" labelClassName={doctorLabelClassName} />
    <InputField name="age" type="number" label="Age" placeholder="Your age" labelClassName={doctorLabelClassName} />
    <InputField name="address" label="Address" placeholder="Your address" labelClassName={doctorLabelClassName} containerClassName="sm:col-span-2" />
  </>
);

export default DoctorProfilePersonalFields;
