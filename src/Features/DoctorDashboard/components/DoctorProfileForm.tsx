import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { useAuthStore } from "@/store/AuthStore";
import { useUpdateDoctorProfile } from "../hooks/useUpdateDoctorProfile";
import { doctorProfileValidationSchema } from "../validations/doctorProfileValidation";
import { getDoctorProfileValues } from "../lib/doctorProfile";
import PatientPhotoField from "@/Features/Patient/components/PatientPhotoField";
import DoctorProfilePersonalFields from "./DoctorProfilePersonalFields";
import DoctorProfileProfessionalFields from "./DoctorProfileProfessionalFields";

const DoctorProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  const updateMutation = useUpdateDoctorProfile();
  if (!user || user.role !== "doctor") return null;

  return (
    <Formik
      initialValues={getDoctorProfileValues(user)}
      enableReinitialize
      validationSchema={doctorProfileValidationSchema}
      onSubmit={(values) => updateMutation.mutate(values)}
    >
      <Form className="grid gap-1 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <PatientPhotoField currentImage={user.imageUrl} />
        </div>
        <DoctorProfilePersonalFields />
        <DoctorProfileProfessionalFields />
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
