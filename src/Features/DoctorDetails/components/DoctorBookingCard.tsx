import type { PublicDoctor } from "@/Features/Auth/@types";
import AppointmentForm from "@/Features/Doctors/components/AppointmentForm";

const DoctorBookingCard = ({ doctor }: { doctor: PublicDoctor }) => (
  <aside className="rounded-2xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.08)] md:p-7 lg:sticky lg:top-6">
    <div className="mb-6"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">Your next step</p><h2 className="mt-2 text-2xl font-extrabold text-neutral-900">Book a visit</h2><p className="mt-2 text-sm leading-6 text-neutral-500">Select one of this doctor's available appointment slots.</p></div>
    <AppointmentForm doctor={doctor} />
  </aside>
);

export default DoctorBookingCard;
