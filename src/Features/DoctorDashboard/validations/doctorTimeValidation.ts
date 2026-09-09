import * as Yup from "yup";

export const doctorTimeValidationSchema = Yup.object({
  day: Yup.string().required("Choose a day"),
  timeSlot: Yup.string().required("Choose a time"),
});
