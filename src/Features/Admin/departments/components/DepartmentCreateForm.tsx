import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { adminDepartmentInitialValues } from "../constants/adminDepartmentForms";
import { useCreateAdminDepartment } from "../hooks/useAdminDepartmentMutations";
import { adminDepartmentValidationSchema } from "../validations/adminDepartmentValidation";
import DepartmentFormFields from "./DepartmentFormFields";

const DepartmentCreateForm = () => {
  const createDepartment = useCreateAdminDepartment();

  return (
    <Formik
      initialValues={adminDepartmentInitialValues}
      validationSchema={adminDepartmentValidationSchema}
      onSubmit={(values) => createDepartment.mutate(values)}
    >
      <Form className="grid gap-2">
        <DepartmentFormFields />
        <Button
          type="submit"
          variant="gradient"
          loading={createDepartment.isPending}
          disabled={createDepartment.isPending}
        >
          Add department
        </Button>
      </Form>
    </Formik>
  );
};

export default DepartmentCreateForm;
