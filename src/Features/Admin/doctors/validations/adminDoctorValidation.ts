import * as Yup from "yup";
import type { AdminDoctorValues, AdminDoctorUpdateValues } from "../@types/adminDoctor";

export const adminDoctorValidationSchema: Yup.ObjectSchema<AdminDoctorValues> =
  Yup.object({
    firstName: Yup.string().trim().min(2).required("First name is required"),
    lastName: Yup.string().trim().min(2).required("Last name is required"),
    email: Yup.string().trim().email().required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
    phone: Yup.string().trim().required("Phone is required"),
    age: Yup.number().typeError("Enter valid age").min(1).max(120).required(),
    address: Yup.string().trim().required("Address is required"),
    departmentId: Yup.string().required("Department is required"),
    degree: Yup.string().trim().required("Degree is required"),
    fee: Yup.number().typeError("Enter valid fee").min(0).required(),
    yearsOfExperience: Yup.number()
      .typeError("Enter valid years")
      .min(0)
      .required(),
    description: Yup.string().trim().defined(),
    approvalStatus: Yup.mixed<AdminDoctorValues["approvalStatus"]>()
      .oneOf(["pending", "approved", "rejected"])
      .required(),
    isAvailable: Yup.boolean().required(),
  });

export const adminDoctorUpdateValidationSchema: Yup.ObjectSchema<
  AdminDoctorUpdateValues
> = Yup.object({
  firstName: Yup.string().trim().min(2).required("First name is required"),
  lastName: Yup.string().trim().min(2).required("Last name is required"),
  phone: Yup.string().trim().required("Phone is required"),
  age: Yup.number().typeError("Enter valid age").min(1).max(120).required(),
  address: Yup.string().trim().required("Address is required"),
  departmentId: Yup.string().required("Department is required"),
  degree: Yup.string().trim().required("Degree is required"),
  fee: Yup.number().typeError("Enter valid fee").min(0).required(),
  yearsOfExperience: Yup.number()
    .typeError("Enter valid years")
    .min(0)
    .required(),
  description: Yup.string().trim().defined(),
  approvalStatus: Yup.mixed<AdminDoctorValues["approvalStatus"]>()
    .oneOf(["pending", "approved", "rejected"])
    .required(),
  isAvailable: Yup.boolean().required(),
});
