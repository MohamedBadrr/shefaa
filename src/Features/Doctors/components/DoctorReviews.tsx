import type { DoctorReview } from "@/Features/Auth/@types";
import Loading from "@/components/Shared/Loading";
import DoctorReviewForm from "./DoctorReviewForm";
import { ReviewItem } from "./ReviewItem";

type DoctorReviewsProps = {
  doctorId: string;
  reviews: DoctorReview[];
  isLoading: boolean;
  isError: boolean;
};

const DoctorReviews = ({
  doctorId,
  reviews,
  isLoading,
  isError,
}: DoctorReviewsProps) => (
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

    {isLoading && <Loading label="Loading reviews" />}
    {isError && (
      <p className="py-10 text-center text-sm font-semibold text-red-500">
        Reviews could not be loaded right now.
      </p>
    )}
    {!isLoading && !isError && reviews.length === 0 && (
      <p className="py-10 text-center text-sm text-neutral-500">
        No reviews yet. Be the first to share your experience.
      </p>
    )}
    {!isLoading && !isError && reviews.length > 0 && (
      <div className="divide-y divide-primary-100">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    )}

    <div className="mt-7 border-t border-primary-100 pt-6">
      <h3 className="text-lg font-extrabold text-neutral-900">
        Share your experience
      </h3>
      <DoctorReviewForm doctorId={doctorId} />
    </div>
  </section>
);

export default DoctorReviews;
