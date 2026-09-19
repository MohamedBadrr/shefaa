import { supabase } from "@/lib/supabaseClient";
import type {
  AdminDoctor,
  DoctorRow,
  DoctorProfileRow,
  DoctorDepartmentRow,
} from "../@types/adminDoctor";
import { mapDoctors } from "../lib/mapDoctors";

export const getAdminDoctors = async (): Promise<AdminDoctor[]> => {
  const { data: doctorsData, error: doctorsError } = await supabase
    .from("doctors")
    .select(
      "id, department_id, degree, fee, years_of_experience, description, is_available, approval_status, rejection_reason, starting_rating, rating_avg, manual_rating, reviews_count",
    )
    .order("created_at", { ascending: false });

  if (doctorsError) throw doctorsError;

  const doctors = (doctorsData ?? []) as DoctorRow[];
  if (doctors.length === 0) return [];

  const doctorIds = doctors.map((doctor) => doctor.id);
  const departmentIds = doctors.map((doctor) => doctor.department_id);

  const [
    { data: profiles, error: profilesError },
    { data: departments, error: departmentsError },
  ] = await Promise.all([
    supabase
      .from("profiles")
      .select("id, email, first_name, last_name, phone_number, age, address, image_url")
      .in("id", doctorIds),
    supabase.from("departments").select("id, name").in("id", departmentIds),
  ]);

  if (profilesError) throw profilesError;
  if (departmentsError) throw departmentsError;

  return mapDoctors(
    doctors,
    (profiles ?? []) as DoctorProfileRow[],
    (departments ?? []) as DoctorDepartmentRow[],
  );
};
