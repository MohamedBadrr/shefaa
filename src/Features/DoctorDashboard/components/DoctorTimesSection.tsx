import DoctorTimesList from "./DoctorTimesList";
import DoctorTimeForm from "./DoctorTimeForm";
import { useDoctorTimes } from "../hooks/useDoctorTimes";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";

const DoctorTimesSection = () => {
  const { data: times = [], isLoading, isError, refetch } = useDoctorTimes();

  return (
    <section id="times" className="mt-10">
      <div className="rounded-2xl border border-primary-100 bg-white p-5 shadow-[0_16px_36px_rgba(0,132,212,0.06)]">
        <div className="mb-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">Available times</p>
          <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">Manage your weekly booking times</h2>
          <p className="mt-2 text-sm font-medium text-neutral-500">
            Add a day and time that patients can reserve, or remove any time you no longer want to show.
          </p>
        </div>
        <DoctorTimeForm />
        <WithLoadingAndError
          isLoading={isLoading}
          isError={isError}
          hasNoData={times.length === 0}
          errorMessageProps={{
            message: "We could not load your available times right now.",
            onRetry: () => {
              void refetch();
            },
          }}
          noDataMessageProps={{
            message: "No weekly times yet.",
            description: "Add your first available time above.",
          }}
        >
          <DoctorTimesList times={times} />
        </WithLoadingAndError>
      </div>
    </section>
  );
};

export default DoctorTimesSection;
