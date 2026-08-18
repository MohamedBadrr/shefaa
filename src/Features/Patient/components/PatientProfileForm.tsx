import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { MapPin, Phone, UserRound } from "lucide-react";
import { useAuthStore } from "@/store/AuthStore";
import type { PatientProfileValues } from "@/Features/Auth/@types";
import { useUpdatePatientProfile } from "../hooks/useUpdatePatientProfile";
import { patientProfileValidationSchema } from "../validations/patientProfileValidation";

const labelClassName =
  "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

const PatientProfileForm = () => {
  const { user } = useAuthStore();
  const updateMutation = useUpdatePatientProfile();
  if (!user || user.role !== "patient") return null;

  const initialValues: PatientProfileValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber ?? "",
    age: user.age?.toString() ?? "",
    address: user.address ?? "",
  };

  return (
    <Formik<PatientProfileValues>
      initialValues={initialValues}
      enableReinitialize
      validationSchema={patientProfileValidationSchema}
      onSubmit={(values) => updateMutation.mutate(values)}
    >
      <Form className="grid gap-1 sm:grid-cols-2">
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
          name="phoneNumber"
          label="Phone number"
          placeholder="Your phone number"
          icon={<Phone size={18} />}
          labelClassName={labelClassName}
        />
        <InputField
          name="age"
          type="number"
          label="Age"
          placeholder="Your age"
          labelClassName={labelClassName}
        />
        <InputField
          name="address"
          label="Address"
          placeholder="Your address"
          icon={<MapPin size={18} />}
          labelClassName={labelClassName}
          containerClassName="sm:col-span-2"
        />
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="mt-3 sm:col-span-2"
          loading={updateMutation.isPending}
          disabled={updateMutation.isPending}
        >
          Save changes
        </Button>
      </Form>
    </Formik>
  );
};

export default PatientProfileForm;
