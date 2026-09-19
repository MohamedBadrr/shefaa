import * as Yup from "yup";
import type { AdminDepartmentValues } from "../@types/adminDepartment";

export const adminDepartmentValidationSchema: Yup.ObjectSchema<AdminDepartmentValues> =
  Yup.object({
    name: Yup.string().trim().min(2).required("Department name is required"),
    description: Yup.string().trim().required("Description is required"),
    isActive: Yup.boolean().required(),
  });
