import type { PublicDoctor } from "@/Features/Auth/@types";
import { Button } from "@/components/ui/button";
import { BriefcaseMedical, Star } from "lucide-react";
import { Link } from "react-router";

type DoctorCardProps = {
  doctor: PublicDoctor;
};

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const initials = `${doctor.firstName[0] ?? ""}${doctor.lastName[0] ?? ""}`;

  return (
    <article className="group flex flex-col rounded-xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.07)] transition duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-[10px_22px_34px_rgba(0,164,244,0.14)]">
      <div className="flex items-start gap-4">
        {doctor.imageUrl ? (
          <img
            src={doctor.imageUrl}
            alt={`${doctor.firstName} ${doctor.lastName}`}
            className="size-20 rounded-xl object-cover"
          />
        ) : (
          <div className="flex size-20 items-center justify-center rounded-xl bg-primary-100 text-xl font-extrabold text-primary-700">
            {initials}
          </div>
        )}

        <div className="min-w-0 pt-1">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-600">
            {doctor.departmentName}
          </p>
          <h2 className="mt-1 truncate text-lg font-extrabold text-neutral-900">
            Dr. {doctor.firstName} {doctor.lastName}
          </h2>
          <p className="mt-1 text-sm font-semibold text-neutral-500">
            {doctor.degree}
          </p>
        </div>
      </div>

      <p className="mt-5 line-clamp-3 min-h-18 text-sm leading-6 text-neutral-500">
        {doctor.description ||
          "Experienced specialist ready to support your healthcare journey."}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-primary-100 pt-4 text-xs font-bold text-neutral-500">
        <span className="inline-flex items-center gap-1.5">
          <BriefcaseMedical size={15} className="text-primary-600" />
          {doctor.yearsOfExperience} years experience
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Star size={15} fill="currentColor" className="text-primary-500" />
          {doctor.rating.toFixed(1)} ({doctor.reviewsCount})
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span
          className={
            doctor.isAvailable
              ? "text-xs font-bold text-primary-700"
              : "text-xs font-bold text-neutral-400"
          }
        >
          {doctor.isAvailable
            ? "Available for appointments"
            : "Currently unavailable"}
        </span>
        <Link to={`/doctors/${doctor.id}`}>
          <Button variant="gradient" size="sm">
            View profile
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default DoctorCard;
