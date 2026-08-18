import * as Yup from "yup";

export const doctorProfileValidationSchema = Yup.object({
  firstName: Yup.string().trim().min(2, "First name is too short").required("First name is required"),
  lastName: Yup.string().trim().min(2, "Last name is too short").required("Last name is required"),
  phoneNumber: Yup.string().trim().matches(/^[0-9+\-\s()]{8,20}$/, "Enter a valid phone number").required("Phone number is required"),
  age: Yup.number().typeError("Enter a valid age").min(1, "Enter a valid age").max(120, "Enter a valid age").required("Age is required"),
  address: Yup.string().trim().min(5, "Address is too short").required("Address is required"),
  imageFile: Yup.mixed().nullable().test("file-size", "Image must be smaller than 5 MB", (file) => !file || (file as File).size <= 5 * 1024 * 1024).test("file-type", "Choose a valid image file", (file) => !file || (file as File).type.startsWith("image/")),
  degree: Yup.string().trim().required("Degree is required"),
  fee: Yup.number().typeError("Enter a valid fee").min(0, "Fee cannot be negative").required("Fee is required"),
  yearsOfExperience: Yup.number().typeError("Enter valid years").min(0, "Years cannot be negative").required("Years are required"),
  description: Yup.string().trim().max(500, "Description cannot exceed 500 characters").defined(),
  departmentId: Yup.string().required("Department is required"),
});
