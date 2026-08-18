import { BriefcaseMedical, CircleDollarSign, Star } from "lucide-react";
import type { PublicDoctor } from "@/Features/Auth/@types";
import DoctorProfileStat from "./DoctorProfileStat";

const DoctorProfileHeader = ({ doctor }: { doctor: PublicDoctor }) => {
  const initials = `${doctor.firstName[0] ?? ""}${doctor.lastName[0] ?? ""}`;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-primary-200 bg-white shadow-[10px_24px_45px_rgba(0,164,244,0.09)]">
      <div className="absolute inset-x-0 top-0 h-30 bg-linear-to-r from-primary-100 to-primary-200" />
      <div className="relative p-5 pt-16 md:p-8 md:pt-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
            {doctor.imageUrl ? (
              <img src={doctor.imageUrl} alt={`Dr. ${doctor.firstName} ${doctor.lastName}`} className="size-32 rounded-2xl border-4 border-white object-cover shadow-lg md:size-36" />
            ) : (
              <div className="flex size-32 items-center justify-center rounded-2xl border-4 border-white bg-primary-100 text-3xl font-extrabold text-primary-700 shadow-lg md:size-36">{initials}</div>
            )}
            <div className="pb-1">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">{doctor.departmentName}</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">Dr. {doctor.firstName} {doctor.lastName}</h1>
              <p className="mt-2 font-semibold text-neutral-500">{doctor.degree}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-3 text-sm font-bold text-primary-700">
            <span className={`size-2.5 rounded-full ${doctor.isAvailable ? "bg-green-500" : "bg-neutral-400"}`} />
            {doctor.isAvailable ? "Accepting appointments" : "Currently unavailable"}
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-primary-100 pt-6 sm:grid-cols-3">
          <DoctorProfileStat icon={<Star size={18} fill="currentColor" />} label="Patient rating" value={`${doctor.rating.toFixed(1)} / 5`} />
          <DoctorProfileStat icon={<BriefcaseMedical size={18} />} label="Experience" value={`${doctor.yearsOfExperience} years`} />
          <DoctorProfileStat icon={<CircleDollarSign size={18} />} label="Consultation fee" value={`$${doctor.fee}`} />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileHeader;
