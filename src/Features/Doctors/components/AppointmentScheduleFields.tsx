import SelectField from "@/components/fields/SelectField";
import { useFormikContext } from "formik";
import type {
  DoctorAvailableSlot,
  PatientAppointmentValues,
} from "@/Features/Auth/@types";
import {
  getAvailableDateOptions,
  getTimeOptionsForDate,
} from "../lib/appointmentDates";

const AppointmentScheduleFields = ({
  schedules,
}: {
  schedules: DoctorAvailableSlot[];
}) => {
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
        labelClassName="not-sr-only mb-2 block text-xs font-extrabold text-neutral-700"
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
        labelClassName="not-sr-only mb-2 block text-xs font-extrabold text-neutral-700"
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

export default AppointmentScheduleFields;
