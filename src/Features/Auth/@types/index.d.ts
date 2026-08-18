export type UserRole = "admin" | "doctor" | "patient";
type DoctorApprovalStatus = "pending" | "approved" | "rejected";
type AuthUser =  Doctor | Patient | Admin;
export type DepartmentOption = {
  id: string;
  name: string;
};
export type DepartmentType = {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
};

export type DoctorAppointment = {
  id: string;
  patient_id: string;
  patient_name: string;
  appointment_date: string;
  time_slot: string;
  type: string;
  status: string;
  fee_amount: number;
};

export type DoctorProfileValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: string;
  address: string;
  imageFile: File | null;
  degree: string;
  fee: string;
  yearsOfExperience: string;
  description: string;
  departmentId: string;
};

export type PatientAppointment = {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorDegree: string;
  doctorImageUrl: string | null;
  appointmentDate: string;
  timeSlot: string;
  type: string;
  status: string;
  feeAmount: number;
};

export type PatientProfileValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: string;
  address: string;
  imageFile: File | null;
};

export type PublicDoctor = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  degree: string;
  fee: number;
  yearsOfExperience: number;
  description: string | null;
  isAvailable: boolean;
  departmentId: string;
  departmentName: string;
  departmentDescription: string | null;
  rating: number;
  reviewsCount: number;
};

export type PatientAppointmentValues = {
  appointmentDate: string;
  timeSlot: string;
  scheduleId: string;
  type: "regular";
};

export type DoctorSchedule = {
  id: string;
  day: string;
  timeSlot: string;
};

export type DoctorAvailableSlot = {
  id: string;
  appointmentDate: string;
  timeSlot: string;
};

export type DoctorReview = {
  id: string;
  appointmentId: string;
  patientId: string;
  patientName: string;
  patientImageUrl: string | null;
  rating: number;
  comment: string | null;
  createdAt: string;
};

export type ReviewFormValues = {
  appointmentId: string;
  rating: string;
  comment: string;
};

export type ReviewableAppointment = {
  id: string;
  label: string;
};
type BaseUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  age: number | null;
  address: string | null;
  imageUrl: string | null;
};

export type Patient = BaseUser & {
  role: "patient";
};

export type Admin = BaseUser & {
  role: "admin";
};
export type Doctor = BaseUser &{
    role : "doctor";
    doctorProfile: {
    departmentId: string;
    degree: string;
    fee: number;
    yearsOfExperience: number;
    description: string | null;
    isAvailable: boolean;
    approvalStatus: DoctorApprovalStatus;
    rejectionReason: string | null;
    startingRating: number;
    ratingAvg: number | null;
    manualRating: number | null;
    reviewsCount: number;
    }
}
