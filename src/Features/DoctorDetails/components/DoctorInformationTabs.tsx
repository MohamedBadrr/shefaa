import type { ReactNode } from "react";
import { CalendarCheck, Clock3, ShieldCheck } from "lucide-react";
import type { DoctorReview, PublicDoctor } from "@/Features/Auth/@types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorReviews from "@/Features/Doctors/components/DoctorReviews";

type DoctorInformationTabsProps = {
  doctor: PublicDoctor;
  reviews: DoctorReview[];
  isLoadingReviews: boolean;
  isReviewsError: boolean;
};

const DoctorInformationTabs = ({ doctor, reviews, isLoadingReviews, isReviewsError }: DoctorInformationTabsProps) => (
  <section className="rounded-2xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.06)] md:p-7">
    <Tabs defaultValue="overview">
      <TabsList className="grid h-12 w-full max-w-md grid-cols-2 bg-primary-50 p-1">
        <TabsTrigger value="overview" className="font-bold">Overview</TabsTrigger>
        <TabsTrigger value="reviews" className="font-bold">Reviews ({reviews.length})</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-7">
        <div className="flex items-start gap-4 rounded-xl bg-primary-50/70 p-5">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-primary-600"><ShieldCheck /></div>
          <div><h2 className="font-extrabold text-neutral-900">Care you can feel confident about</h2><p className="mt-1 text-sm leading-6 text-neutral-500">Your visit is private, secure, and designed around your needs.</p></div>
        </div>
        <h2 className="mt-8 text-2xl font-extrabold text-neutral-900">About this specialist</h2>
        <p className="mt-3 text-sm leading-7 text-neutral-500">{doctor.description || "This specialist is ready to provide thoughtful, professional care tailored to your needs."}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <InfoRow icon={<CalendarCheck />} title="Flexible booking" text="Choose a day and time that suits your schedule." />
          <InfoRow icon={<Clock3 />} title="Clear appointment times" text="Available time slots are shown before you book." />
        </div>
      </TabsContent>
      <TabsContent value="reviews" className="mt-7">
        <DoctorReviews doctorId={doctor.id} reviews={reviews} isLoading={isLoadingReviews} isError={isReviewsError} />
      </TabsContent>
    </Tabs>
  </section>
);

const InfoRow = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <div className="flex gap-3 rounded-lg border border-primary-100 p-4"><span className="text-primary-600">{icon}</span><div><h3 className="text-sm font-extrabold text-neutral-900">{title}</h3><p className="mt-1 text-xs leading-5 text-neutral-500">{text}</p></div></div>
);

export default DoctorInformationTabs;
