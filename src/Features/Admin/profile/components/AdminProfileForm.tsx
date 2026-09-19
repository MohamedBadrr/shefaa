import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/AuthStore";
import PatientPhotoField from "@/Features/Patient/components/PatientPhotoField";
import PatientProfileFields from "@/Features/Patient/components/PatientProfileFields";
import { patientProfileValidationSchema } from "@/Features/Patient/validations/patientProfileValidation";
import { useUpdateAdminProfile } from "../hooks/useUpdateAdminProfile";
import { getAdminProfileValues } from "../lib/adminProfile";

const AdminProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  const updateProfile = useUpdateAdminProfile();
  if (!user || user.role !== "admin") return null;

  return (
    <Formik
      initialValues={getAdminProfileValues(user)}
      enableReinitialize
      validationSchema={patientProfileValidationSchema}
      onSubmit={(values) => updateProfile.mutate(values)}
    >
      <Form className="grid gap-1 sm:grid-cols-2">
        <div className="sm:col-span-2"><PatientPhotoField currentImage={user.imageUrl} /></div>
        <PatientProfileFields />
        <Button type="submit" variant="gradient" size="lg" className="mt-3 sm:col-span-2"
          loading={updateProfile.isPending} disabled={updateProfile.isPending}>
          Save changes
        </Button>
      </Form>
    </Formik>
  );
};

export default AdminProfileForm;
