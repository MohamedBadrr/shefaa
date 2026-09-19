import type { PublicDoctor } from "@/Features/Auth/@types";
import { Button } from "@/components/ui/button";
import { BriefcaseMedical, Star } from "lucide-react";
import { Link } from "react-router";
import DoctorCardHeader from "./DoctorCardHeader";
import DoctorAvailabilityBadge from "./DoctorAvailabilityBadge";

const DoctorCard = ({ doctor }: { doctor: PublicDoctor }) => (
  <article className="group flex flex-col rounded-xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.07)] transition duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-[10px_22px_34px_rgba(0,164,244,0.14)]">
    <DoctorCardHeader doctor={doctor} />
    <p className="mt-5 line-clamp-3 min-h-18 text-sm leading-6 text-neutral-500">
      {doctor.description || "Experienced specialist ready to support your healthcare journey."}
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
    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
      <DoctorAvailabilityBadge isAvailable={doctor.isAvailable} />
      <Button
        nativeButton={false}
        variant="gradient"
        size="sm"
        render={<Link to={`/doctors/${doctor.id}`} />}
      >
        View profile
      </Button>
    </div>
  </article>
);

export default DoctorCard;
