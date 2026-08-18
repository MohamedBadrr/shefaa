import * as Yup from "yup";

export const appointmentValidationSchema = Yup.object({
  appointmentDate: Yup.string().required("Choose a date"),
  timeSlot: Yup.string().required("Choose a time"),
  scheduleId: Yup.string().required("Choose an available time"),
});
