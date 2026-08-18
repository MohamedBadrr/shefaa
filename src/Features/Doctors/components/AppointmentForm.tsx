import SelectField from "@/components/fields/SelectField";
import { Button } from "@/components/ui/button";
import { Form, Formik, useFormikContext } from "formik";
import type {
  DoctorAvailableSlot,
  PatientAppointmentValues,
  PublicDoctor,
} from "@/Features/Auth/@types";
import { appointmentInitialValues } from "../constants/appointmentOptions";
import { appointmentValidationSchema } from "../validations/appointmentValidation";
import { useCreateAppointment } from "../hooks/useCreateAppointment";
import { useDoctorSchedules } from "../hooks/useDoctorSchedules";
import {
  getAvailableDateOptions,
  getTimeOptionsForDate,
} from "../utils/appointmentDates";
import Loading from "@/components/Shared/Loading";

const labelClassName =
  "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

type AppointmentFormProps = {
  doctor: PublicDoctor;
};

const AppointmentForm = ({ doctor }: AppointmentFormProps) => {
  const appointmentMutation = useCreateAppointment(doctor.id);
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useDoctorSchedules(doctor.id);

  if (!doctor.isAvailable) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
        <h2 className="text-lg font-extrabold text-neutral-900">
          Appointments are unavailable
        </h2>
        <p className="mt-2 text-sm leading-6 text-neutral-500">
          Please choose another doctor for now.
        </p>
      </div>
    );
  }

  if (isLoading) return <Loading label="Loading available appointments" />;

  if (isError || schedules.length === 0) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
        <h2 className="text-lg font-extrabold text-neutral-900">
          No appointments available
        </h2>
        <p className="mt-2 text-sm leading-6 text-neutral-500">
          Please check again later or choose another doctor.
        </p>
      </div>
    );
  }

  return (
    <Formik<PatientAppointmentValues>
      initialValues={appointmentInitialValues}
      validationSchema={appointmentValidationSchema}
      onSubmit={(values) => appointmentMutation.mutate(values)}
    >
      <Form className="space-y-3">
        <ScheduleFields schedules={schedules} />
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="mt-3 w-full"
          loading={appointmentMutation.isPending}
          disabled={appointmentMutation.isPending}
        >
          Request appointment
        </Button>
      </Form>
    </Formik>
  );
};

const ScheduleFields = ({ schedules }: { schedules: DoctorAvailableSlot[] }) => {
  const { values, setFieldValue } =
    useFormikContext<PatientAppointmentValues>();
  const dateOptions = getAvailableDateOptions(schedules);
  const timeOptions = getTimeOptionsForDate(values.appointmentDate, schedules);

  return (
    <>
      <SelectField
        name="appointmentDate"
        label="Appointment date"
        placeholder="Choose an available day"
        options={dateOptions}
        labelClassName={labelClassName}
        onChange={() => {
          setFieldValue("timeSlot", "", false);
          setFieldValue("scheduleId", "", false);
        }}
      />
      <SelectField
        name="timeSlot"
        label="Preferred time"
        placeholder={
          values.appointmentDate
            ? "Choose an available time"
            : "Choose a day first"
        }
        options={timeOptions}
        labelClassName={labelClassName}
        onChange={(selectedTime) => {
          const selectedOption = timeOptions.find(
            (option) => option.value === selectedTime,
          );

          setFieldValue("scheduleId", selectedOption?.scheduleId ?? "", false);
        }}
      />
    </>
  );
};

export default AppointmentForm;
