import type { DoctorReview } from "@/Features/Auth/@types";
import { formatDate } from "@/lib/date";
import { Star } from "lucide-react";

export const ReviewItem = ({ review }: { review: DoctorReview }) => {
  const initials = review.patientName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="flex gap-4 py-5">
      {review.patientImageUrl ? (
        <img
          src={review.patientImageUrl}
          alt={review.patientName}
          className="size-11 rounded-full object-cover"
        />
      ) : (
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-extrabold text-primary-700">
          {initials}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-extrabold text-neutral-900">
            {review.patientName}
          </h4>
          <time
            className="text-xs font-semibold text-neutral-400"
            dateTime={review.createdAt}
          >
            {formatDate(review.createdAt.slice(0, 10))}
          </time>
        </div>
        <div className="mt-1 flex items-center gap-1 text-primary-500">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={14}
              fill={index < review.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
        <p className="mt-2 text-sm leading-6 text-neutral-500">
          {review.comment}
        </p>
      </div>
    </article>
  );
};
