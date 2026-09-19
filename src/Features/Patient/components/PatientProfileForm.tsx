import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { useAuthStore } from "@/store/AuthStore";
import { useUpdatePatientProfile } from "../hooks/useUpdatePatientProfile";
import { patientProfileValidationSchema } from "../validations/patientProfileValidation";
import { getPatientProfileValues } from "../lib/patientProfile";
import PatientPhotoField from "./PatientPhotoField";
import PatientProfileFields from "./PatientProfileFields";

const PatientProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  const updateMutation = useUpdatePatientProfile();
  if (!user || user.role !== "patient") return null;

  return (
    <Formik
      initialValues={getPatientProfileValues(user)}
      enableReinitialize
      validationSchema={patientProfileValidationSchema}
      onSubmit={(values) => updateMutation.mutate(values)}
    >
      <Form className="grid gap-1 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <PatientPhotoField currentImage={user.imageUrl} />
        </div>
        <PatientProfileFields />
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
