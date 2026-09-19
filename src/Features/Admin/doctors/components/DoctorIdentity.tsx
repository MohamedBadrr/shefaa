import { UserRound } from "lucide-react";
import type { AdminDoctor } from "../@types/adminDoctor";

const DoctorIdentity = ({ doctor }: { doctor: AdminDoctor }) => (
  <div className="flex items-center gap-3">
    {doctor.imageUrl ? (
      <img
        src={doctor.imageUrl}
        alt={`${doctor.firstName} ${doctor.lastName}`}
        className="size-10 rounded-full object-cover"
      />
    ) : (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        <UserRound size={18} />
      </span>
    )}
    <div>
      <p className="font-extrabold text-neutral-900">
        Dr. {doctor.firstName} {doctor.lastName}
      </p>
      <p className="text-xs font-semibold text-neutral-500">{doctor.email}</p>
    </div>
  </div>
);

export default DoctorIdentity;
