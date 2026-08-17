import InputField from "@/components/fields/InputField";
import {
  CalendarDays,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

const labelClassName =
  "not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700";

const CommonRegisterFields = () => {
  return (
    <>
      <InputField
        name="firstName"
        label="First name"
        placeholder="Your first name"
        icon={<UserRound size={18} />}
        labelClassName={labelClassName}
      />
      <InputField
        name="lastName"
        label="Last name"
        placeholder="Your last name"
        icon={<UserRound size={18} />}
        labelClassName={labelClassName}
      />
      <InputField
        name="email"
        type="email"
        label="Email address"
        placeholder="you@example.com"
        icon={<Mail size={18} />}
        labelClassName={labelClassName}
      />
      <InputField
        name="phone"
        label="Phone number"
        placeholder="Your phone number"
        icon={<Phone size={18} />}
        labelClassName={labelClassName}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        placeholder="At least 8 characters"
        icon={<LockKeyhole size={18} />}
        labelClassName={labelClassName}
      />
      <InputField
        name="confirmPassword"
        type="password"
        label="Confirm password"
        placeholder="Repeat your password"
        icon={<LockKeyhole size={18} />}
        labelClassName={labelClassName}
      />
      <InputField
        name="age"
        type="number"
        label="Age"
        placeholder="Your age"
        icon={<CalendarDays size={18} />}
        labelClassName={labelClassName}
      />
      <InputField
        name="address"
        label="Address"
        placeholder="Your address"
        icon={<MapPin size={18} />}
        labelClassName={labelClassName}
      />
    </>
  );
};

export default CommonRegisterFields;
