import { Link } from "react-router";
import Loading from "@/components/Shared/Loading";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { Button } from "@/components/ui/button";
import DoctorBookingCard from "@/Features/DoctorDetails/components/DoctorBookingCard";
import DoctorInformationTabs from "@/Features/DoctorDetails/components/DoctorInformationTabs";
import DoctorProfileHeader from "@/Features/DoctorDetails/components/DoctorProfileHeader";
import { useDoctorDetails } from "@/Features/DoctorDetails/hooks/useDoctorDetails";
import { ArrowLeft } from "lucide-react";

const DoctorDetails = () => {
  const {
    doctor,
    reviews,
    isLoadingDoctor,
    isDoctorError,
    isLoadingReviews,
    isReviewsError,
  } = useDoctorDetails();

  if (isLoadingDoctor) return <Loading label="Loading doctor profile" />;

  if (isDoctorError || !doctor) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="text-2xl font-extrabold text-neutral-900">
          Doctor profile not found
        </h1>
        <Link to="/doctors" className="mt-6 inline-flex">
          <Button variant="gradient">Back to doctors</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white pb-15">
      <div className="bg-white">
        <WrapperComponent className="pt-4">
          <Link to="/doctors" className="inline-flex">
            <Button variant="ghost">
              <ArrowLeft />
              All doctors
            </Button>
          </Link>
        </WrapperComponent>
      </div>
      <WrapperComponent className="pt-4 md:pt-4">
        <DoctorProfileHeader doctor={doctor} />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
          <DoctorInformationTabs
            doctor={doctor}
            reviews={reviews}
            isLoadingReviews={isLoadingReviews}
            isReviewsError={isReviewsError}
          />
          <DoctorBookingCard doctor={doctor} />
        </div>
      </WrapperComponent>
    </main>
  );
};

export default DoctorDetails;
