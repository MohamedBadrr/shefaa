export type AdminUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "doctor" | "patient";
  phoneNumber: string | null;
  age: number | null;
  address: string | null;
  imageUrl: string | null;
};

export type AdminUserValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "patient";
  phoneNumber: string;
  age: number | "";
  address: string;
};

export type AdminUserUpdateValues = Omit<AdminUserValues, "email" | "password">;

export type UserProfileRow = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: AdminUser["role"];
  phone_number: string | null;
  age: number | null;
  address: string | null;
  image_url: string | null;
};
