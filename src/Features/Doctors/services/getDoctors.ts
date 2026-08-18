import { supabase } from "@/lib/supabaseClient";
import type { PublicDoctor } from "@/Features/Auth/@types";
import type { DepartmentRow, DoctorRow, ProfileRow } from "../@types";
import { mapDoctor } from "../utils/mapDoctor";

export const getDoctors = async (departmentId?: string): Promise<PublicDoctor[]> => {
  let query = supabase
    .from("doctors")
    .select(
      "id, department_id, degree, fee, years_of_experience, description, is_available, starting_rating, rating_avg, manual_rating, reviews_count",
    )
    .eq("approval_status", "approved");

  if (departmentId) {
    query = query.eq("department_id", departmentId);
  }

  const { data, error } = await query;

  if (error) throw error;

  const doctors = (data ?? []) as unknown as DoctorRow[];
  if (doctors.length === 0) return [];

  const doctorIds = doctors.map((doctor) => doctor.id);
  const departmentIds = doctors.map((doctor) => doctor.department_id);

  const [{ data: profiles, error: profilesError }, { data: departments, error: departmentsError }] = await Promise.all([
    supabase.from("profiles").select("id, first_name, last_name, image_url").in("id", doctorIds),
    supabase.from("departments").select("id, name, description").in("id", departmentIds),
  ]);

  if (profilesError) throw profilesError;
  if (departmentsError) throw departmentsError;

  const profileMap = new Map(
    (profiles as ProfileRow[]).map((profile) => [profile.id, profile]),
  );
  const departmentMap = new Map(
    (departments as DepartmentRow[]).map((department) => [department.id, department]),
  );

  return doctors.map((doctor) => mapDoctor(doctor, profileMap.get(doctor.id), departmentMap.get(doctor.department_id)));
};
