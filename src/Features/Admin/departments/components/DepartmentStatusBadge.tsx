import { mapStatus } from "@/lib/mapStatus";

const DepartmentStatusBadge = ({ isActive }: { isActive: boolean }) => {
  const { label, className } = mapStatus(isActive ? "active" : "inactive");

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${className}`}>
      {label}
    </span>
  );
};

export default DepartmentStatusBadge;
