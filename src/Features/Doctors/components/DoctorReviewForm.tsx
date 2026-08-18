import SelectField from "@/components/fields/SelectField";
import TextareaField from "@/components/fields/TextareaField";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { Link } from "react-router";
import { useAuthStore } from "@/store/AuthStore";
import type { ReviewFormValues } from "@/Features/Auth/@types";
import { reviewInitialValues, reviewRatingOptions } from "../constants/reviewOptions";
import { reviewValidationSchema } from "../validations/reviewValidation";
import { useCreateDoctorReview } from "../hooks/useCreateDoctorReview";
import { useReviewableAppointments } from "../hooks/useReviewableAppointments";

const labelClassName = "not-sr-only mb-2 block text-xs font-extrabold text-neutral-700";

const DoctorReviewForm = ({ doctorId }: { doctorId: string }) => {
  const { isAuthenticated, user } = useAuthStore();
  const reviewMutation = useCreateDoctorReview(doctorId);
  const appointmentsQuery = useReviewableAppointments(doctorId);

  if (!isAuthenticated || user?.role !== "patient") {
    return (
      <div className="rounded-xl border border-primary-100 bg-primary-50 p-5">
        <p className="text-sm leading-6 text-neutral-600">Sign in as a patient to share your experience.</p>
        <Link to="/login" className="mt-3 inline-flex"><Button variant="gradient" size="sm">Sign in to review</Button></Link>
      </div>
    );
  }

  if (appointmentsQuery.isLoading) return <p className="mt-4 text-sm text-neutral-500">Checking completed appointments...</p>;
  if (appointmentsQuery.isError) return <p className="mt-4 text-sm text-red-500">We could not check your completed appointments.</p>;
  if (!appointmentsQuery.data?.length) return <p className="mt-4 rounded-lg bg-primary-50 p-4 text-sm leading-6 text-neutral-500">You can add a review after completing an appointment with this doctor.</p>;

  return (
    <Formik<ReviewFormValues>
      initialValues={reviewInitialValues}
      validationSchema={reviewValidationSchema}
      onSubmit={(values, helpers) => reviewMutation.mutate(values, { onSuccess: () => helpers.resetForm() })}
    >
      <Form className="mt-5 space-y-2">
        <SelectField name="appointmentId" label="Completed appointment" placeholder="Choose an appointment" options={appointmentsQuery.data.map((appointment) => ({ label: appointment.label, value: appointment.id }))} labelClassName={labelClassName} />
        <SelectField name="rating" label="Your rating" placeholder="Choose your rating" options={reviewRatingOptions} labelClassName={labelClassName} />
        <TextareaField name="comment" label="Your review" placeholder="Tell other patients about your experience" labelClassName={labelClassName} rows={4} />
        <Button type="submit" variant="gradient" loading={reviewMutation.isPending} disabled={reviewMutation.isPending}>Share review</Button>
      </Form>
    </Formik>
  );
};

export default DoctorReviewForm;
