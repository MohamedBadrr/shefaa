import InputField from "@/components/fields/InputField";
import TextareaField from "@/components/fields/TextareaField";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { BadgeCheck, BriefcaseMedical, CircleDollarSign } from "lucide-react";
import { useDepartments } from "../hooks/useDepartments";
import { useRegisterDoctor } from "../hooks/useRegister";
import { doctorRegisterValidationSchema } from "../validations/registerValidation";
import CommonRegisterFields from "./CommonRegisterFields";
import SelectField from "@/components/fields/SelectField";
import { doctorRegisterInitialValues } from "../constants/authInitialValues";

const DoctorRegisterForm = () => {
  const { mutate: registerDoctor, isPending } = useRegisterDoctor();
  const { data: departments = [], isLoading: departmentsLoading } =
    useDepartments();
  const departmentOptions = departments.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  return (
    <Formik
      initialValues={doctorRegisterInitialValues}
      validationSchema={doctorRegisterValidationSchema}
      onSubmit={(values) => registerDoctor(values)}
    >
      <Form className="grid grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-2">
        <CommonRegisterFields />
        <SelectField
          name="departmentId"
          label="Department"
          placeholder={
            departmentsLoading
              ? "Loading departments..."
              : "Choose your department"
          }
          options={departmentOptions}
          labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
          triggerClassName="bg-primary-50/25"
        />
        <InputField
          name="degree"
          label="Degree"
          placeholder="Medical degree"
          icon={<BadgeCheck size={18} />}
          labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
        />
        <InputField
          name="fee"
          label="Consultation fee"
          placeholder="Your fee"
          type="number"
          icon={<CircleDollarSign size={18} />}
          labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
        />
        <InputField
          name="yearsOfExperience"
          label="Years of experience"
          placeholder="Years of experience"
          type="number"
          icon={<BriefcaseMedical size={18} />}
          labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
        />

        <TextareaField
          name="description"
          label="Professional summary"
          placeholder="Tell patients briefly about your experience"
          containerClassName="md:col-span-2"
        />

        <Button
          type="submit"
          loading={isPending}
          disabled={isPending}
          variant="gradient"
          size="lg"
          className="mt-3 w-full md:col-span-2"
        >
          Submit Doctor Application
        </Button>
      </Form>
    </Formik>
  );
};

export default DoctorRegisterForm;
