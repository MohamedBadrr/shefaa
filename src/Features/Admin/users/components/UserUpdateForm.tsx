import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import type { AdminUser } from "../@types/adminUser";
import { useUpdateAdminUser } from "../hooks/useAdminUserMutations";
import { getUserUpdateValues } from "../lib/userMappers";
import { adminUserUpdateValidationSchema } from "../validations/adminUserValidation";
import UserFormFields from "./UserFormFields";

const UserUpdateForm = ({ user }: { user: AdminUser }) => {
  const updateUser = useUpdateAdminUser();
  const initialValues = getUserUpdateValues(user);

  if (!initialValues) {
    return (
      <p className="text-sm text-neutral-600">
        Use the Doctors tab to update doctor accounts.
      </p>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={adminUserUpdateValidationSchema}
      onSubmit={(values) => updateUser.mutate({ userId: user.id, values })}
    >
      <Form className="grid gap-2 md:grid-cols-2">
        <UserFormFields />
        <Button
          type="submit"
          variant="gradient"
          className="md:col-span-2"
          loading={updateUser.isPending}
          disabled={updateUser.isPending}
        >
          Save changes
        </Button>
      </Form>
    </Formik>
  );
};

export default UserUpdateForm;
