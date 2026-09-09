import type { DoctorTime } from "../@types/doctorTimes";
import DoctorTimeCard from "./DoctorTimeCard";
import DoctorTimeForm from "./DoctorTimeForm";
import { useDoctorTimes } from "../hooks/useDoctorTimes";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";

const DoctorTimesList = ({ times }: { times: DoctorTime[] }) => {
  if (times.length === 0) {
    return (
      <div className="mt-5 rounded-xl border border-primary-100 bg-primary-50/60 p-8 text-center text-sm font-semibold text-neutral-500">
        No weekly times yet. Add your first available time above.
      </div>
    );
  }

  return (
    <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {times.map((time) => (
        <DoctorTimeCard key={time.id} time={time} />
      ))}
    </div>
  );
};

const DoctorTimesListWithState = WithLoadingAndError(DoctorTimesList);

const DoctorTimesSection = () => {
  const { data: times = [], isLoading, isError } = useDoctorTimes();

  return (
    <section id="times" className="mt-10">
      <div className="rounded-2xl border border-primary-100 bg-white p-5 shadow-[0_16px_36px_rgba(0,132,212,0.06)]">
        <div className="mb-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">
            Available times
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">
            Manage your weekly booking times
          </h2>
          <p className="mt-2 text-sm font-medium text-neutral-500">
            Add a day and time that patients can reserve, or remove any time you
            no longer want to show.
          </p>
        </div>
        <DoctorTimeForm />
        <DoctorTimesListWithState
          times={times}
          isLoading={isLoading}
          isError={isError}
          loadingLabel="Loading times"
          errorMessage="We could not load your available times right now."
        />
      </div>
    </section>
  );
};

export default DoctorTimesSection;
