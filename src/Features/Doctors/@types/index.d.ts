export type DoctorRow = {
  id: string;
  department_id: string;
  degree: string;
  fee: number | string;
  years_of_experience: number;
  description: string | null;
  is_available: boolean;
  starting_rating: number | string | null;
  rating_avg: number | string | null;
  manual_rating: number | string | null;
  reviews_count: number;
};

export type ProfileRow = {
  id: string;
  first_name: string;
  last_name: string;
  image_url: string | null;
};

export type DepartmentRow = {
  id: string;
  name: string;
  description: string | null;
};
