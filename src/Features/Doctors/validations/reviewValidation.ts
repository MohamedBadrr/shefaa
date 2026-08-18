import * as Yup from "yup";

export const reviewValidationSchema = Yup.object({
  appointmentId: Yup.string().required("Choose a completed appointment"),
  rating: Yup.string().required("Choose a rating"),
  comment: Yup.string().trim().min(10, "Review must be at least 10 characters").required("Write a review"),
});
