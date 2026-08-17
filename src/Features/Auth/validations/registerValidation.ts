import type {
  DoctorRegisterFormValues,
  PatientRegisterFormValues,
} from "@/@types";
import * as Yup from "yup";

const commonRegisterRules = {
  firstName: Yup.string()
    .trim()
    .min(2, "First name is too short")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name is too short")
    .required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9+\-\s()]{8,20}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  age: Yup.number()
    .typeError("Enter a valid age")
    .min(1, "Enter a valid age")
    .max(120, "Enter a valid age")
    .required("Age is required"),
  address: Yup.string()
    .trim()
    .min(5, "Address is too short")
    .required("Address is required"),
};

export const patientRegisterValidationSchema: Yup.ObjectSchema<PatientRegisterFormValues> =
  Yup.object(commonRegisterRules);

export const doctorRegisterValidationSchema: Yup.ObjectSchema<DoctorRegisterFormValues> =
  Yup.object({
    ...commonRegisterRules,
    departmentId: Yup.string().required("Department is required"),
    degree: Yup.string().trim().required("Degree is required"),
    fee: Yup.number()
      .typeError("Enter a valid consultation fee")
      .min(0, "Fee cannot be negative")
      .required("Consultation fee is required"),
    yearsOfExperience: Yup.number()
      .typeError("Enter a valid number of years")
      .min(0, "Years cannot be negative")
      .required("Years of experience is required"),
    description: Yup.string()
      .trim()
      .max(500, "Description cannot exceed 500 characters")
      .defined(),
  });
