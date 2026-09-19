import { mapStatus } from "@/lib/mapStatus";

const DoctorAvailabilityBadge = ({ isAvailable }: { isAvailable: boolean }) => {
  const { label, className } = mapStatus(isAvailable ? "available" : "unavailable");
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${className}`}>
      {label}
    </span>
  );
};

export default DoctorAvailabilityBadge;
