import type { ContactFormValues } from "@/@types";
import * as Yup from "yup";

export const contactValidationSchema: Yup.ObjectSchema<ContactFormValues> =
  Yup.object({
    fullName: Yup.string()
      .trim()
      .min(2, "Name is too short")
      .required("Full name is required"),
    email: Yup.string()
      .trim()
      .email("Enter a valid email")
      .required("Email is required"),
    phone: Yup.string()
      .trim()
      .matches(/^[0-9+\-\s()]{8,20}$/, "Enter a valid phone number")
      .required("Phone number is required"),
    subject: Yup.string()
      .trim()
      .min(3, "Subject is too short")
      .required("Subject is required"),
    message: Yup.string()
      .trim()
      .min(10, "Message should be at least 10 characters")
      .required("Message is required"),
  });
