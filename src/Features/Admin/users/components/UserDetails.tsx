import { mapStatus } from "@/lib/mapStatus";
import AdminDetailsGrid from "../../components/AdminDetailsGrid";
import type { AdminUser } from "../@types/adminUser";

const UserDetails = ({ user }: { user: AdminUser }) => (
  <AdminDetailsGrid
    items={[
      { label: "Email", value: user.email },
      { label: "Role", value: mapStatus(user.role).label },
      { label: "Phone", value: user.phoneNumber },
      { label: "Age", value: user.age == null ? "N/A" : String(user.age) },
      { label: "Address", value: user.address },
    ]}
  />
);

export default UserDetails;
