import type { ReactNode } from "react";
import {
  ArrowLeft,
  BriefcaseMedical,
  CalendarCheck,
  CircleDollarSign,
  Clock3,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router";
import Loading from "@/components/Shared/Loading";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppointmentForm from "@/Features/Doctors/components/AppointmentForm";
import DoctorReviews from "@/Features/Doctors/components/DoctorReviews";
import { useDoctorReviews } from "@/Features/Doctors/hooks/useDoctorReviews";
import { useDoctors } from "@/Features/Doctors/hooks/useDoctors";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const { data: doctors = [], isLoading, isError } = useDoctors();
  const doctor = doctors.find((item) => item.id === doctorId);
  const reviewsQuery = useDoctorReviews(doctorId ?? "");

  if (isLoading) return <Loading label="Loading doctor profile" />;

  if (isError || !doctor) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="text-2xl font-extrabold text-neutral-900">
          Doctor profile not found
        </h1>
        <Link to="/doctors" className="mt-6 inline-flex">
          <Button variant="gradient">
            <ArrowLeft /> Back to doctors
          </Button>
        </Link>
      </div>
    );
  }

  const initials = `${doctor.firstName[0] ?? ""}${doctor.lastName[0] ?? ""}`;

  return (
    <main className="bg-white ">
      <div className="  bg-white">
        <WrapperComponent className="pt-4">
          <Link to="/doctors" className="inline-flex">
            <Button variant="ghost">
              <ArrowLeft /> All doctors
            </Button>
          </Link>
        </WrapperComponent>
      </div>

      <WrapperComponent className="pt-4 md:pt-4 pb-15">
        <section className="relative overflow-hidden rounded-2xl border border-primary-200 bg-white shadow-[10px_24px_45px_rgba(0,164,244,0.09)]">
          <div className="absolute inset-x-0 top-0 h-30 bg-linear-to-r from-primary-100  to-primary-200" />
          <div className="relative p-5 pt-16 md:p-8 md:pt-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                {doctor.imageUrl ? (
                  <img
                    src={doctor.imageUrl}
                    alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                    className="size-32 rounded-2xl border-4 border-white object-cover shadow-lg md:size-36"
                  />
                ) : (
                  <div className="flex size-32 items-center justify-center rounded-2xl border-4 border-white bg-primary-100 text-3xl font-extrabold text-primary-700 shadow-lg md:size-36">
                    {initials}
                  </div>
                )}
                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">
                      {doctor.departmentName}
                    </p>
                  </div>
                  <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
                    Dr. {doctor.firstName} {doctor.lastName}
                  </h1>
                  <p className="mt-2 font-semibold text-neutral-500">
                    {doctor.degree}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-3 text-sm font-bold text-primary-700">
                <span
                  className={`size-2.5 rounded-full ${doctor.isAvailable ? "bg-green-500" : "bg-neutral-400"}`}
                />
                {doctor.isAvailable
                  ? "Accepting appointments"
                  : "Currently unavailable"}
              </div>
            </div>

            <div className="mt-8 grid gap-3 border-t border-primary-100 pt-6 sm:grid-cols-3">
              <ProfileStat
                icon={<Star size={18} fill="currentColor" />}
                label="Patient rating"
                value={`${doctor.rating.toFixed(1)} / 5`}
              />
              <ProfileStat
                icon={<BriefcaseMedical size={18} />}
                label="Experience"
                value={`${doctor.yearsOfExperience} years`}
              />
              <ProfileStat
                icon={<CircleDollarSign size={18} />}
                label="Consultation fee"
                value={`$${doctor.fee}`}
              />
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
          <section className="rounded-2xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.06)] md:p-7">
            <Tabs defaultValue="overview">
              <TabsList className="grid h-12 w-full max-w-md grid-cols-2 bg-primary-50 p-1">
                <TabsTrigger value="overview" className="font-bold">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="reviews" className="font-bold">
                  Reviews ({reviewsQuery.data?.length ?? 0})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-7">
                <div className="flex items-start gap-4 rounded-xl bg-primary-50/70 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-primary-600">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-neutral-900">
                      Care you can feel confident about
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-neutral-500">
                      Your visit is private, secure, and designed around your
                      needs.
                    </p>
                  </div>
                </div>
                <h2 className="mt-8 text-2xl font-extrabold text-neutral-900">
                  About this specialist
                </h2>
                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {doctor.description ||
                    "This specialist is ready to provide thoughtful, professional care tailored to your needs."}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <InfoRow
                    icon={<CalendarCheck />}
                    title="Flexible booking"
                    text="Choose a day and time that suits your schedule."
                  />
                  <InfoRow
                    icon={<Clock3 />}
                    title="Clear appointment times"
                    text="Available time slots are shown before you book."
                  />
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-7">
                <DoctorReviews
                  doctorId={doctor.id}
                  reviews={reviewsQuery.data ?? []}
                  isLoading={reviewsQuery.isLoading}
                  isError={reviewsQuery.isError}
                />
              </TabsContent>
            </Tabs>
          </section>

          <aside className="rounded-2xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.08)] md:p-7 lg:sticky lg:top-6">
            <div className="mb-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">
                Your next step
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">
                Book a visit
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Select one of this doctor’s available appointment slots.
              </p>
            </div>
            <AppointmentForm doctor={doctor} />
          </aside>
        </div>
      </WrapperComponent>
    </main>
  );
};

const ProfileStat = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 rounded-lg bg-primary-50/70 p-4">
    <span className="text-primary-600">{icon}</span>
    <div>
      <p className="text-xs font-semibold text-neutral-500">{label}</p>
      <p className="mt-0.5 font-extrabold text-neutral-900">{value}</p>
    </div>
  </div>
);

const InfoRow = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex gap-3 rounded-lg border border-primary-100 p-4">
    <span className="text-primary-600">{icon}</span>
    <div>
      <h3 className="text-sm font-extrabold text-neutral-900">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-neutral-500">{text}</p>
    </div>
  </div>
);

export default DoctorDetails;
