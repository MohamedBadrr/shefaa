import { useState } from "react";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import AdminPanelShell from "../../components/AdminPanelShell";
import AdminSectionHeader from "../../components/AdminSectionHeader";
import { useAdminDoctors } from "../hooks/useAdminDoctors";
import { filterDoctors } from "../lib/filterDoctors";
import DoctorsTable from "./DoctorsTable";
import DoctorsToolbar from "./DoctorsToolbar";

const AdminDoctorsPanel = () => {
  const { data: doctors = [], isLoading, isError } = useAdminDoctors();
  const [searchValue, setSearchValue] = useState("");
  const filteredDoctors = filterDoctors(doctors, searchValue);

  return (
    <AdminPanelShell>
      <AdminSectionHeader
        eyebrow="Doctors"
        title="Manage doctors"
        description="Create, update, approve, delete, and manage weekly booking times for every doctor."
        count={doctors.length}
      />
      <DoctorsToolbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={filteredDoctors.length === 0}
        errorMessageProps={{
          message: "Could not load doctors.",
        }}
        noDataMessageProps={{
          message:
            doctors.length === 0
              ? "No doctors yet."
              : "No doctors match your search.",
        }}
      >
        <DoctorsTable doctors={filteredDoctors} />
      </WithLoadingAndError>
    </AdminPanelShell>
  );
};

export default AdminDoctorsPanel;
