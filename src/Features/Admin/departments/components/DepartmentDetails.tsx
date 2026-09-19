import { mapStatus } from "@/lib/mapStatus";
import AdminDetailsGrid from "../../components/AdminDetailsGrid";
import type { AdminDepartment } from "../@types/adminDepartment";

const DepartmentDetails = ({ department }: { department: AdminDepartment }) => (
  <AdminDetailsGrid
    items={[
      { label: "Name", value: department.name },
      { label: "Description", value: department.description },
      {
        label: "Status",
        value: mapStatus(department.isActive ? "active" : "inactive").label,
      },
    ]}
  />
);

export default DepartmentDetails;
