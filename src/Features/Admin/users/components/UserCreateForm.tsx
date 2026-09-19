import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { adminUserInitialValues } from "../constants/adminUserForms";
import { useCreateAdminUser } from "../hooks/useAdminUserMutations";
import { adminUserValidationSchema } from "../validations/adminUserValidation";
import UserFormFields from "./UserFormFields";

const UserCreateForm = () => {
  const createUser = useCreateAdminUser();

  return (
    <Formik
      initialValues={adminUserInitialValues}
      validationSchema={adminUserValidationSchema}
      onSubmit={(values) => createUser.mutate(values)}
    >
      <Form className="grid gap-2 md:grid-cols-2">
        <UserFormFields includeAccountFields />
        <Button
          type="submit"
          variant="gradient"
          className="md:col-span-2"
          loading={createUser.isPending}
          disabled={createUser.isPending}
        >
          Add user
        </Button>
      </Form>
    </Formik>
  );
};

export default UserCreateForm;
