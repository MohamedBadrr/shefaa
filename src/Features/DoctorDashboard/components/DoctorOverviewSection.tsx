import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useAuthStore } from "@/store/AuthStore";
import { useDoctorAppointments } from "../hooks/useDoctorAppointments";
import { getTotalEarnings } from "../lib/doctorAppointments";
import { getDoctorRating } from "../lib/doctorProfile";
import DoctorOverviewStats from "./DoctorOverviewStats";

const DoctorOverviewSection = () => {
  const { data: appointments = [], isLoading, isError, refetch } = useDoctorAppointments();
  const user = useAuthStore((state) => state.user);
  const profile = user?.role === "doctor" ? user.doctorProfile : null;

  return (
    <WithLoadingAndError
      isLoading={isLoading}
      isError={isError}
      errorMessageProps={{
        message: "Could not load your appointment totals.",
        onRetry: () => {
          void refetch();
        },
      }}
    >
      <DoctorOverviewStats
        totalAppointments={appointments.length}
        totalMoney={getTotalEarnings(appointments)}
        reviewsCount={profile?.reviewsCount ?? 0}
        rating={getDoctorRating(profile)}
      />
    </WithLoadingAndError>
  );
};

export default DoctorOverviewSection;
