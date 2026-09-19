import SelectField from "@/components/fields/SelectField";
import TextareaField from "@/components/fields/TextareaField";
import type { ReviewableAppointment } from "@/Features/Auth/@types";
import { reviewRatingOptions } from "../constants/reviewOptions";
import { getReviewAppointmentOptions } from "../lib/reviews";

const DoctorReviewFields = ({
  appointments,
}: {
  appointments: ReviewableAppointment[];
}) => (
  <>
    <SelectField
      name="appointmentId"
      label="Completed appointment"
      placeholder="Choose an appointment"
      options={getReviewAppointmentOptions(appointments)}
      labelClassName="not-sr-only mb-2 block text-xs font-extrabold text-neutral-700"
    />
    <SelectField
      name="rating"
      label="Your rating"
      placeholder="Choose your rating"
      options={reviewRatingOptions}
      labelClassName="not-sr-only mb-2 block text-xs font-extrabold text-neutral-700"
    />
    <TextareaField
      name="comment"
      label="Your review"
      placeholder="Tell other patients about your experience"
      labelClassName="not-sr-only mb-2 block text-xs font-extrabold text-neutral-700"
      rows={4}
    />
  </>
);

export default DoctorReviewFields;
