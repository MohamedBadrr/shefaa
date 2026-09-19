import InputField from "@/components/fields/InputField";
import { MapPin, Phone, UserRound } from "lucide-react";
import { patientProfileLabelClassName } from "../constants/patientProfile";

const PatientProfileFields = () => (
  <>
    <InputField
      name="firstName"
      label="First name"
      placeholder="Your first name"
      icon={<UserRound size={18} />}
      labelClassName={patientProfileLabelClassName}
    />
    <InputField
      name="lastName"
      label="Last name"
      placeholder="Your last name"
      icon={<UserRound size={18} />}
      labelClassName={patientProfileLabelClassName}
    />
    <InputField
      name="phoneNumber"
      label="Phone number"
      placeholder="Your phone number"
      icon={<Phone size={18} />}
      labelClassName={patientProfileLabelClassName}
    />
    <InputField
      name="age"
      type="number"
      label="Age"
      placeholder="Your age"
      labelClassName={patientProfileLabelClassName}
    />
    <InputField
      name="address"
      label="Address"
      placeholder="Your address"
      icon={<MapPin size={18} />}
      labelClassName={patientProfileLabelClassName}
      containerClassName="sm:col-span-2"
    />
  </>
);

export default PatientProfileFields;
