import { useFormikContext } from "formik";
import SelectField from "@/components/fields/SelectField";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useDoctorSchedules } from "@/Features/Doctors/hooks/useDoctorSchedules";
import {
  getAvailableDateOptions,
  getTimeOptionsForDate,
} from "@/Features/Doctors/utils/appointmentDates";
import type { AdminAppointmentValues } from "../@types/adminAppointment";
import { appointmentLabelClassName } from "../constants/adminAppointmentForms";

const AppointmentScheduleFields = () => {
  const { values, setFieldValue } = useFormikContext<AdminAppointmentValues>();
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useDoctorSchedules(values.doctorId);
  const dateOptions = getAvailableDateOptions(schedules);
  const timeOptions = getTimeOptionsForDate(values.appointmentDate, schedules);

  return (
    <WithLoadingAndError
      isLoading={isLoading}
      isError={isError}
      hasNoData={schedules.length === 0}
      errorMessageProps={{
        message: "Could not load available slots.",
      }}
      noDataMessageProps={{
        message: "No available slots.",
        description:
          "Choose another doctor or add available times for this doctor.",
      }}
    >
      <SelectField
        name="appointmentDate"
        label="Available date"
        placeholder="Choose date"
        options={dateOptions}
        labelClassName={appointmentLabelClassName}
        onChange={() => {
          setFieldValue("timeSlot", "", false);
          setFieldValue("scheduleId", "", false);
        }}
      />
      <SelectField
        name="timeSlot"
        label="Available time"
        placeholder={
          values.appointmentDate ? "Choose time" : "Choose date first"
        }
        options={timeOptions}
        labelClassName={appointmentLabelClassName}
        onChange={(timeSlot) => {
          const selectedTime = timeOptions.find(
            (option) => option.value === timeSlot,
          );
          setFieldValue("scheduleId", selectedTime?.scheduleId ?? "", true);
        }}
      />
    </WithLoadingAndError>
  );
};

export default AppointmentScheduleFields;
