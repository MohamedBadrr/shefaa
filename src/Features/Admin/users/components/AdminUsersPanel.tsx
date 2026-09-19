import { useState } from "react";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import AdminPanelShell from "../../components/AdminPanelShell";
import AdminSectionHeader from "../../components/AdminSectionHeader";
import { useAdminUsers } from "../hooks/useAdminUsers";
import { filterUsers } from "../lib/filterUsers";
import UsersToolbar from "./UsersToolbar";
import UsersTable from "./UsersTable";

const AdminUsersPanel = () => {
  const { data: users = [], isLoading, isError, refetch } = useAdminUsers();
  const [searchValue, setSearchValue] = useState("");
  const filteredUsers = filterUsers(users, searchValue);

  return (
    <AdminPanelShell>
      <AdminSectionHeader
        eyebrow="Users"
        title="All platform users"
        description="Create, update, view, and delete users from one table."
        count={users.length}
      />
      <UsersToolbar searchValue={searchValue} onSearchChange={setSearchValue} />
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={filteredUsers.length === 0}
        errorMessageProps={{
          message: "Could not load users.",
          onRetry: () => {
            void refetch();
          },
        }}
        noDataMessageProps={{
          message: users.length === 0 ? "No users yet." : "No users match your search.",
        }}
      >
        <UsersTable users={filteredUsers} />
      </WithLoadingAndError>
    </AdminPanelShell>
  );
};

export default AdminUsersPanel;
