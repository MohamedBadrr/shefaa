import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import type { AdminDepartment } from "../@types/adminDepartment";
import { useUpdateAdminDepartment } from "../hooks/useAdminDepartmentMutations";
import { getDepartmentFormValues } from "../lib/departmentMappers";
import { adminDepartmentValidationSchema } from "../validations/adminDepartmentValidation";
import DepartmentFormFields from "./DepartmentFormFields";

const DepartmentEditForm = ({ department }: { department: AdminDepartment }) => {
  const updateDepartment = useUpdateAdminDepartment();

  return (
    <Formik
      initialValues={getDepartmentFormValues(department)}
      enableReinitialize
      validationSchema={adminDepartmentValidationSchema}
      onSubmit={(values) =>
        updateDepartment.mutate({ departmentId: department.id, values })
      }
    >
      <Form className="grid gap-2">
        <DepartmentFormFields />
        <Button
          type="submit"
          variant="gradient"
          loading={updateDepartment.isPending}
          disabled={updateDepartment.isPending}
        >
          Save changes
        </Button>
      </Form>
    </Formik>
  );
};

export default DepartmentEditForm;
