import type { AdminDoctor } from "../@types/adminDoctor";

export function filterDoctors(doctors: AdminDoctor[], searchValue: string) {
  const searchText = searchValue.trim().toLowerCase();
  if (!searchText) return doctors;

  return doctors.filter((doctor) =>
    `dr ${doctor.firstName} ${doctor.lastName} ${doctor.email}`
      .toLowerCase()
      .includes(searchText),
  );
}
