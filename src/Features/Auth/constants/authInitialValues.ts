import type {
  DoctorRegisterFormValues,
  LoginFormValues,
  PatientRegisterFormValues,
} from "@/@types";

export const loginInitialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const patientRegisterInitialValues: PatientRegisterFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  age: "",
  address: "",
};

export const doctorRegisterInitialValues: DoctorRegisterFormValues = {
  ...patientRegisterInitialValues,
  departmentId: "",
  degree: "",
  fee: "",
  yearsOfExperience: "",
  description: "",
};
