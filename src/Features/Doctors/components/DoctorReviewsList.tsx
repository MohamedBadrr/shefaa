import type { DoctorReview } from "@/Features/Auth/@types";
import { ReviewItem } from "./ReviewItem";

const DoctorReviewsList = ({ reviews }: { reviews: DoctorReview[] }) => (
  <div className="divide-y divide-primary-100">
    {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
  </div>
);

export default DoctorReviewsList;
