import type { AdminUser } from "../@types/adminUser";

export function filterUsers(users: AdminUser[], searchValue: string) {
  const searchText = searchValue.trim().toLowerCase();
  if (!searchText) return users;

  return users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email}`
      .toLowerCase()
      .includes(searchText),
  );
}
