import { useParams } from "react-router";
import { useDoctorReviews } from "@/Features/Doctors/hooks/useDoctorReviews";
import { useDoctors } from "@/Features/Doctors/hooks/useDoctors";

export const useDoctorDetails = () => {
  const { doctorId } = useParams();
  const doctorsQuery = useDoctors();
  const reviewsQuery = useDoctorReviews(doctorId ?? "");
  const doctor = doctorsQuery.data?.find((item) => item.id === doctorId);

  return {
    doctor,
    reviews: reviewsQuery.data ?? [],
    isLoadingDoctor: doctorsQuery.isLoading,
    isDoctorError: doctorsQuery.isError,
    isLoadingReviews: reviewsQuery.isLoading,
    isReviewsError: reviewsQuery.isError,
  };
};
