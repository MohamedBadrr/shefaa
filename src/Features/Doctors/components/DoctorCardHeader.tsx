import type { PublicDoctor } from "@/Features/Auth/@types";
import { getInitials } from "../lib/doctorDisplay";

const DoctorCardHeader = ({ doctor }: { doctor: PublicDoctor }) => (
  <div className="flex items-start gap-4">
    {doctor.imageUrl ? (
      <img
        src={doctor.imageUrl}
        alt={`${doctor.firstName} ${doctor.lastName}`}
        className="size-20 shrink-0 rounded-xl object-cover"
      />
    ) : (
      <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-xl font-extrabold text-primary-700">
        {getInitials(`${doctor.firstName} ${doctor.lastName}`)}
      </div>
    )}
    <div className="min-w-0 pt-1">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-600">
        {doctor.departmentName}
      </p>
      <h2 className="mt-1 truncate text-lg font-extrabold text-neutral-900">
        Dr. {doctor.firstName} {doctor.lastName}
      </h2>
      <p className="mt-1 text-sm font-semibold text-neutral-500">{doctor.degree}</p>
    </div>
  </div>
);

export default DoctorCardHeader;
