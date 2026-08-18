import InputField from "@/components/fields/InputField";
import SelectField from "@/components/fields/SelectField";
import TextareaField from "@/components/fields/TextareaField";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { useAuthStore } from "@/store/AuthStore";
import { useDepartments } from "@/Features/Auth/hooks/useDepartments";
import type { DoctorProfileValues } from "@/Features/Auth/@types";
import { useUpdateDoctorProfile } from "../hooks/useUpdateDoctorProfile";
import { doctorProfileValidationSchema } from "../validations/doctorProfileValidation";
import PatientPhotoField from "@/Features/Patient/components/PatientPhotoField";

const labelClassName =
  "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

const DoctorProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  const { data: departments = [], isLoading } = useDepartments();
  const updateMutation = useUpdateDoctorProfile();
  if (!user || user.role !== "doctor") return null;
  const profile = user.doctorProfile;
  const initialValues: DoctorProfileValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber ?? "",
    age: user.age?.toString() ?? "",
    address: user.address ?? "",
    imageFile: null,
    degree: profile.degree,
    fee: profile.fee.toString(),
    yearsOfExperience: profile.yearsOfExperience.toString(),
    description: profile.description ?? "",
    departmentId: profile.departmentId,
  };

  return (
    <Formik<DoctorProfileValues>
      initialValues={initialValues}
      enableReinitialize
      validationSchema={doctorProfileValidationSchema}
      onSubmit={(values) => updateMutation.mutate(values)}
    >
      <Form className="grid gap-1 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <PatientPhotoField currentImage={user.imageUrl} />
        </div>
        <InputField name="firstName" label="First name" placeholder="Your first name" labelClassName={labelClassName} />
        <InputField name="lastName" label="Last name" placeholder="Your last name" labelClassName={labelClassName} />
        <InputField name="phoneNumber" label="Phone number" placeholder="Your phone number" labelClassName={labelClassName} />
        <InputField name="age" type="number" label="Age" placeholder="Your age" labelClassName={labelClassName} />
        <InputField name="address" label="Address" placeholder="Your address" labelClassName={labelClassName} containerClassName="sm:col-span-2" />
        <InputField
          name="degree"
          label="Degree"
          placeholder="Your degree"
          labelClassName={labelClassName}
        />
        <InputField
          name="fee"
          type="number"
          label="Consultation fee"
          placeholder="Consultation fee"
          labelClassName={labelClassName}
        />
        <InputField
          name="yearsOfExperience"
          type="number"
          label="Years of experience"
          placeholder="Years of experience"
          labelClassName={labelClassName}
        />
        <SelectField
          name="departmentId"
          label="Department"
          placeholder={isLoading ? "Loading departments" : "Choose department"}
          options={departments.map((department) => ({
            label: department.name,
            value: department.id,
          }))}
          labelClassName={labelClassName}
        />
        <TextareaField
          name="description"
          label="Professional summary"
          placeholder="Tell patients about your experience"
          labelClassName={labelClassName}
          rows={5}
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

export default DoctorProfileForm;
