import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { useAuthStore } from "@/store/AuthStore";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { reviewInitialValues } from "../constants/reviewOptions";
import { reviewValidationSchema } from "../validations/reviewValidation";
import { useCreateDoctorReview } from "../hooks/useCreateDoctorReview";
import { useReviewableAppointments } from "../hooks/useReviewableAppointments";
import DoctorReviewFields from "./DoctorReviewFields";
import ReviewSignInPrompt from "./ReviewSignInPrompt";

const DoctorReviewForm = ({ doctorId }: { doctorId: string }) => {
  const { isAuthenticated, user } = useAuthStore();
  const reviewMutation = useCreateDoctorReview(doctorId);
  const {
    data: appointments = [],
    isLoading,
    isError,
  } = useReviewableAppointments(doctorId);

  if (!isAuthenticated || user?.role !== "patient")
    return <ReviewSignInPrompt />;

  return (
    <WithLoadingAndError
      isLoading={isLoading}
      isError={isError}
      hasNoData={appointments.length === 0}
      errorMessageProps={{
        message: "We could not check your completed appointments.",
      }}
      noDataMessageProps={{
        message: "No appointments to review yet.",
        description:
          "You can add a review after completing an appointment with this doctor.",
      }}
    >
      <Formik
        initialValues={reviewInitialValues}
        validationSchema={reviewValidationSchema}
        onSubmit={(values, helpers) =>
          reviewMutation.mutate(values, {
            onSuccess: () => helpers.resetForm(),
          })
        }
      >
        <Form className="mt-5 space-y-2">
          <DoctorReviewFields appointments={appointments} />
          <Button
            type="submit"
            variant="gradient"
            loading={reviewMutation.isPending}
            disabled={reviewMutation.isPending}
          >
            Share review
          </Button>
        </Form>
      </Formik>
    </WithLoadingAndError>
  );
};

export default DoctorReviewForm;
