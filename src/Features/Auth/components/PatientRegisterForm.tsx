import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { useRegisterPatient } from "../hooks/useRegister";
import { patientRegisterValidationSchema } from "../validations/registerValidation";
import CommonRegisterFields from "./CommonRegisterFields";
import { patientRegisterInitialValues } from "../constants/authInitialValues";

const PatientRegisterForm = () => {
  const { mutate: registerPatient, isPending } = useRegisterPatient();

  return (
    <Formik
      initialValues={patientRegisterInitialValues}
      validationSchema={patientRegisterValidationSchema}
      onSubmit={(values) => registerPatient(values)}
    >
      <Form className="grid grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-2">
        <CommonRegisterFields />
        <Button
          type="submit"
          loading={isPending}
          disabled={isPending}
          variant="gradient"
          size="lg"
          className="mt-3 w-full md:col-span-2"
        >
          Create Patient Account
        </Button>
      </Form>
    </Formik>
  );
};

export default PatientRegisterForm;
