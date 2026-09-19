import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { adminDoctorInitialValues } from "../constants/adminDoctorForms";
import { useCreateAdminDoctor } from "../hooks/useAdminDoctorMutations";
import { adminDoctorValidationSchema } from "../validations/adminDoctorValidation";
import DoctorFormFields from "./DoctorFormFields";

const DoctorCreateForm = () => {
  const createDoctor = useCreateAdminDoctor();

  return (
    <Formik
      initialValues={adminDoctorInitialValues}
      validationSchema={adminDoctorValidationSchema}
      onSubmit={(values) => createDoctor.mutate(values)}
    >
      <Form className="space-y-2">
        <DoctorFormFields includeAccountFields />
        <Button
          type="submit"
          variant="gradient"
          loading={createDoctor.isPending}
          disabled={createDoctor.isPending}
        >
          Add doctor
        </Button>
      </Form>
    </Formik>
  );
};

export default DoctorCreateForm;
