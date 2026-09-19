import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useDoctorReviews } from "../hooks/useDoctorReviews";
import DoctorReviewForm from "./DoctorReviewForm";
import DoctorReviewsList from "./DoctorReviewsList";

const DoctorReviews = ({ doctorId }: { doctorId: string }) => {
  const { data: reviews = [], isLoading, isError } = useDoctorReviews(doctorId);

  return (
    <section className="rounded-xl border border-primary-200 bg-white p-6 shadow-[8px_18px_30px_rgba(0,164,244,0.06)] md:p-8">
      <div className="flex flex-col justify-between gap-3 border-b border-primary-100 pb-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-primary-700">
            Patient experiences
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">
            Reviews for this doctor
          </h2>
        </div>
        <span className="text-sm font-bold text-neutral-500">
          {reviews.length} reviews
        </span>
      </div>
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={reviews.length === 0}
        errorMessageProps={{
          message: "Reviews could not be loaded right now.",
        }}
        noDataMessageProps={{
          message: "No reviews yet.",
          description: "Be the first to share your experience.",
        }}
      >
        <DoctorReviewsList reviews={reviews} />
      </WithLoadingAndError>
      <div className="mt-7 border-t border-primary-100 pt-6">
        <h3 className="text-lg font-extrabold text-neutral-900">
          Share your experience
        </h3>
        <DoctorReviewForm doctorId={doctorId} />
      </div>
    </section>
  );
};

export default DoctorReviews;
