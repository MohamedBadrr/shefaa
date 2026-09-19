import type { DoctorRegisterFormValues } from "@/@types";
import type {
  AdminDoctor,
  AdminDoctorValues,
  AdminDoctorUpdateValues,
} from "../@types/adminDoctor";

export function getDoctorUpdateValues(doctor: AdminDoctor): AdminDoctorUpdateValues {
  return {
    firstName: doctor.firstName,
    lastName: doctor.lastName,
    phone: doctor.phoneNumber ?? "",
    age: doctor.age ?? "",
    address: doctor.address ?? "",
    departmentId: doctor.departmentId,
    degree: doctor.degree,
    fee: doctor.fee,
    yearsOfExperience: doctor.yearsOfExperience,
    description: doctor.description ?? "",
    approvalStatus: doctor.approvalStatus,
    isAvailable: doctor.isAvailable,
  };
}

export function toRegisterValues(values: AdminDoctorValues): DoctorRegisterFormValues {
  return {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    password: values.password,
    confirmPassword: values.password,
    phone: values.phone,
    age: values.age,
    address: values.address,
    departmentId: values.departmentId,
    degree: values.degree,
    fee: values.fee,
    yearsOfExperience: values.yearsOfExperience,
    description: values.description,
  };
}
