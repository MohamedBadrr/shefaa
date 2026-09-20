import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import type { AdminDoctor } from "../@types/adminDoctor";
import { useUpdateAdminDoctor } from "../hooks/useAdminDoctorMutations";
import { getDoctorUpdateValues } from "../lib/doctorFormValues";
import { adminDoctorUpdateValidationSchema } from "../validations/adminDoctorValidation";
import DoctorFormFields from "./DoctorFormFields";

const DoctorUpdateForm = ({ doctor }: { doctor: AdminDoctor }) => {
  const updateDoctor = useUpdateAdminDoctor();

  return (
    <Formik
      initialValues={getDoctorUpdateValues(doctor)}
      enableReinitialize
      validationSchema={adminDoctorUpdateValidationSchema}
      onSubmit={(values) =>
        updateDoctor.mutate({ doctorId: doctor.id, values })
      }
    >
      <Form className="space-y-2">
        <DoctorFormFields />
        <Button
          type="submit"
          variant="gradient"
          className="w-full"
          loading={updateDoctor.isPending}
          disabled={updateDoctor.isPending}
        >
          Save doctor changes
        </Button>
      </Form>
    </Formik>
  );
};

export default DoctorUpdateForm;
