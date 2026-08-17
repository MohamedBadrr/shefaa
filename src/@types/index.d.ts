
import type { LucideIcon } from "lucide-react";

export type Department = {
  name: string;
  description: string;
  Icon: LucideIcon;
};

export type AboutValue = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export type AboutStat = {
  value: string;
  label: string;
};

export type ContactInfoItem = {
  title: string;
  value: string;
  description: string;
  Icon: LucideIcon;
};

export type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type PatientRegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  age: number | "";
  address: string;
};

export type DoctorRegisterFormValues = PatientRegisterFormValues & {
  departmentId: string;
  degree: string;
  fee: number | "";
  yearsOfExperience: number | "";
  description: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  avatarSrc?: string;
  avatarLabel: string;
  avatarClassName: string;
};

export type TestimonialStat = {
  value: number;
  suffix: string;
  label: string;
};
