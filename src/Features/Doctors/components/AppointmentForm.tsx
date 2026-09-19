import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import type { PublicDoctor } from "@/Features/Auth/@types";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import NoData from "@/components/feedbacks/NoData";
import { appointmentInitialValues } from "../constants/appointmentOptions";
import { appointmentValidationSchema } from "../validations/appointmentValidation";
import { useCreateAppointment } from "../hooks/useCreateAppointment";
import { useDoctorSchedules } from "../hooks/useDoctorSchedules";
import AppointmentScheduleFields from "./AppointmentScheduleFields";

const AppointmentForm = ({ doctor }: { doctor: PublicDoctor }) => {
  const appointmentMutation = useCreateAppointment(doctor.id);
  const { data: schedules = [], isLoading, isError, refetch } = useDoctorSchedules(doctor.id);

  if (!doctor.isAvailable) {
    return <NoData message="Appointments are unavailable" description="Please choose another doctor for now." />;
  }

  return (
    <WithLoadingAndError
      isLoading={isLoading}
      isError={isError}
      hasNoData={schedules.length === 0}
      errorMessageProps={{
        message: "Could not load available appointments.",
        onRetry: () => { void refetch(); },
      }}
      noDataMessageProps={{
        message: "No appointments available",
        description: "Please check again later or choose another doctor.",
      }}
    >
      <Formik
        initialValues={appointmentInitialValues}
        validationSchema={appointmentValidationSchema}
        onSubmit={(values) => appointmentMutation.mutate(values)}
      >
        <Form className="space-y-3">
          <AppointmentScheduleFields schedules={schedules} />
          <Button type="submit" variant="gradient" size="lg" className="mt-3 w-full"
            loading={appointmentMutation.isPending} disabled={appointmentMutation.isPending}>
            Request appointment
          </Button>
        </Form>
      </Formik>
    </WithLoadingAndError>
  );
};

export default AppointmentForm;
