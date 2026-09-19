import { mapStatus } from "@/lib/mapStatus";
import type { AdminDoctor } from "../../doctors/@types/adminDoctor";

const DoctorApprovalStatusBadge = ({
  status,
}: {
  status: AdminDoctor["approvalStatus"];
}) => {
  const { label, className } = mapStatus(status);

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${className}`}>
      {label}
    </span>
  );
};

export default DoctorApprovalStatusBadge;
