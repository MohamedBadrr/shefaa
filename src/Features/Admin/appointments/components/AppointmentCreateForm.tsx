import { Form, Formik } from "formik";
import SelectField from "@/components/fields/SelectField";
import { Button } from "@/components/ui/button";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useAdminDoctors } from "../../doctors/hooks/useAdminDoctors";
import { useAdminUsers } from "../../users/hooks/useAdminUsers";
import type { AdminAppointmentValues } from "../@types/adminAppointment";
import {
  adminAppointmentInitialValues,
  appointmentLabelClassName,
  appointmentStatusOptions,
} from "../constants/adminAppointmentForms";
import { useCreateAdminAppointment } from "../hooks/useAdminAppointmentMutations";
import { getDoctorOptions, getPatientOptions } from "../lib/appointmentOptions";
import { adminAppointmentValidationSchema } from "../validations/adminAppointmentValidation";
import AppointmentScheduleFields from "./AppointmentScheduleFields";

const AppointmentCreateForm = () => {
  const users = useAdminUsers();
  const doctors = useAdminDoctors();
  const createAppointment = useCreateAdminAppointment();
  const patientOptions = getPatientOptions(users.data ?? []);
  const doctorOptions = getDoctorOptions(doctors.data ?? []);

  return (
    <WithLoadingAndError
      isLoading={users.isLoading || doctors.isLoading}
      isError={users.isError || doctors.isError}
      hasNoData={patientOptions.length === 0 || doctorOptions.length === 0}
      errorMessageProps={{
        message: "Could not load patients or doctors.",
      }}
      noDataMessageProps={{
        message: "A patient and a doctor are required.",
        description: "Add patients and doctors before creating an appointment.",
      }}
    >
      <Formik<AdminAppointmentValues>
        initialValues={adminAppointmentInitialValues}
        validationSchema={adminAppointmentValidationSchema}
        onSubmit={(values) => createAppointment.mutate(values)}
      >
        {({ values, setFieldValue }) => (
          <Form className="grid gap-2">
            <SelectField
              name="patientId"
              label="Patient"
              placeholder="Choose patient"
              options={patientOptions}
              labelClassName={appointmentLabelClassName}
            />
            <SelectField
              name="doctorId"
              label="Doctor"
              placeholder="Choose doctor"
              options={doctorOptions}
              labelClassName={appointmentLabelClassName}
              onChange={() => {
                setFieldValue("appointmentDate", "", false);
                setFieldValue("timeSlot", "", false);
                setFieldValue("scheduleId", "", false);
              }}
            />
            {values.doctorId && <AppointmentScheduleFields />}
            <SelectField
              name="status"
              label="Status"
              options={appointmentStatusOptions}
              labelClassName={appointmentLabelClassName}
            />
            <Button
              type="submit"
              variant="gradient"
              className="mt-5 w-full"
              loading={createAppointment.isPending}
              disabled={createAppointment.isPending}
            >
              Create appointment
            </Button>
          </Form>
        )}
      </Formik>
    </WithLoadingAndError>
  );
};

export default AppointmentCreateForm;
