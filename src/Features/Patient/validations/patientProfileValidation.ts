import * as Yup from "yup";
import { isProfilePhotoSizeValid, isProfilePhotoTypeValid } from "../lib/profilePhoto";

export const patientProfileValidationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name is too short")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name is too short")
    .required("Last name is required"),
  phoneNumber: Yup.string()
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
  imageFile: Yup.mixed<File>()
    .nullable()
    .test("file-size", "Image must be smaller than 5 MB", isProfilePhotoSizeValid)
    .test("file-type", "Choose a valid image file", isProfilePhotoTypeValid),
});
