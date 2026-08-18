import DoctorAppointmentCard from "@/Features/DoctorDashboard/components/DoctorAppointmentCard";
import DoctorOverviewStats from "@/Features/DoctorDashboard/components/DoctorOverviewStats";
import DoctorSidebar from "@/Features/DoctorDashboard/components/DoctorSidebar";
import { useDoctorAppointments } from "@/Features/DoctorDashboard/hooks/useDoctorAppointments";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Loading from "@/components/Shared/Loading";
import { useAuthStore } from "@/store/AuthStore";

const DoctorDashboard = () => {
  const {
    data: appointments = [],
    isLoading,
    isError,
  } = useDoctorAppointments();
  const user = useAuthStore((state) => state.user);
  const doctorProfile = user?.role === "doctor" ? user.doctorProfile : null;
  const totalMoney = appointments
    .filter(
      (appointment) => !["cancelled", "rejected"].includes(appointment.status),
    )
    .reduce((total, appointment) => total + appointment.fee_amount, 0);
  const rating =
    doctorProfile?.manualRating ??
    doctorProfile?.ratingAvg ??
    doctorProfile?.startingRating ??
    0;

  return (
    <SidebarProvider className="flex-col lg:flex-row">
      <DoctorSidebar />
      <SidebarInset className="min-w-0">
        <main className="min-w-0 flex-1 px-5 py-5 md:px-8 lg:px-10">
          <div className="mb-5 flex items-center">
            <SidebarTrigger />
          </div>
          <header>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">
              Doctor dashboard
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
              Good to see you, doctor.
            </h1>
            <p className="mt-2 text-sm font-medium text-neutral-500">
              A clear view of your appointments, earnings, and patient feedback.
            </p>
          </header>
          <DoctorOverviewStats
            totalAppointments={appointments.length}
            totalMoney={totalMoney}
            reviewsCount={doctorProfile?.reviewsCount ?? 0}
            rating={Number(rating)}
          />
          <section id="appointments" className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">
                  Schedule
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">
                  All appointments
                </h2>
              </div>
              <span className="text-sm font-bold text-neutral-500">
                {appointments.length} total
              </span>
            </div>
            {isLoading && <Loading label="Loading appointments" />}
            {isError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-white p-6 text-sm font-semibold text-red-500">
                We could not load your appointments right now.
              </div>
            )}
            {!isLoading && !isError && appointments.length === 0 && (
              <div className="mt-5 rounded-xl border border-primary-200 bg-white p-10 text-center text-sm text-neutral-500">
                No appointments yet.
              </div>
            )}
            {!isLoading && !isError && appointments.length > 0 && (
              <div className="mt-5 space-y-3">
                {appointments.map((appointment) => (
                  <DoctorAppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))}
              </div>
            )}
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DoctorDashboard;
