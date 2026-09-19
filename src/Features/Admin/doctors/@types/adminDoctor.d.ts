export type AdminDoctor = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  age: number | null;
  address: string | null;
  imageUrl: string | null;
  departmentId: string;
  departmentName: string;
  degree: string;
  fee: number;
  yearsOfExperience: number;
  description: string | null;
  isAvailable: boolean;
  approvalStatus: "pending" | "approved" | "rejected";
  rejectionReason: string | null;
  rating: number;
  reviewsCount: number;
};

export type AdminDoctorValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  age: number | "";
  address: string;
  departmentId: string;
  degree: string;
  fee: number | "";
  yearsOfExperience: number | "";
  description: string;
  approvalStatus: "pending" | "approved" | "rejected";
  isAvailable: boolean;
};

export type AdminDoctorUpdateValues = Omit<AdminDoctorValues, "email" | "password">;

export type DoctorRow = {
  id: string;
  department_id: string;
  degree: string;
  fee: number | string;
  years_of_experience: number;
  description: string | null;
  is_available: boolean;
  approval_status: AdminDoctor["approvalStatus"];
  rejection_reason: string | null;
  starting_rating: number | string | null;
  rating_avg: number | string | null;
  manual_rating: number | string | null;
  reviews_count: number;
};

export type DoctorProfileRow = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  age: number | null;
  address: string | null;
  image_url: string | null;
};

export type DoctorDepartmentRow = {
  id: string;
  name: string;
};
