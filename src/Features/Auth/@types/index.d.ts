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
  appointment_date: string;
  time_slot: string;
  type: string;
  status: string;
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
