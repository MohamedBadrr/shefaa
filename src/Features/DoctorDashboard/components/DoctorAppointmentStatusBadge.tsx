import { mapStatus } from "@/lib/mapStatus";

const DoctorAppointmentStatusBadge = ({ status }: { status: string }) => {
  const { label, className } = mapStatus(status);
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${className}`}>
      {label}
    </span>
  );
};

export default DoctorAppointmentStatusBadge;
