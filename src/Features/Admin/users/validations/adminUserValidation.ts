import * as Yup from "yup";
import type { AdminUserValues, AdminUserUpdateValues } from "../@types/adminUser";

export const adminUserValidationSchema: Yup.ObjectSchema<AdminUserValues> =
  Yup.object({
    firstName: Yup.string().trim().min(2).required("First name is required"),
    lastName: Yup.string().trim().min(2).required("Last name is required"),
    email: Yup.string().trim().email().required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
    role: Yup.mixed<AdminUserValues["role"]>()
      .oneOf(["admin", "patient"])
      .required(),
    phoneNumber: Yup.string().trim().required("Phone is required"),
    age: Yup.number().typeError("Enter valid age").min(1).max(120).required(),
    address: Yup.string().trim().required("Address is required"),
  });

export const adminUserUpdateValidationSchema: Yup.ObjectSchema<AdminUserUpdateValues> =
  Yup.object({
    firstName: Yup.string().trim().min(2).required("First name is required"),
    lastName: Yup.string().trim().min(2).required("Last name is required"),
    role: Yup.mixed<AdminUserUpdateValues["role"]>()
      .oneOf(["admin", "patient"])
      .required(),
    phoneNumber: Yup.string().trim().required("Phone is required"),
    age: Yup.number().typeError("Enter valid age").min(1).max(120).required(),
    address: Yup.string().trim().required("Address is required"),
  });
