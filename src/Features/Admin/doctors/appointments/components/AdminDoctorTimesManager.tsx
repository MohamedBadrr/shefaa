import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useAdminDoctorTimes } from "../hooks/useAdminDoctorTimeMutations";
import DoctorTimeCreateForm from "./DoctorTimeCreateForm";
import DoctorTimeItem from "./DoctorTimeItem";

const AdminDoctorTimesManager = ({ doctorId }: { doctorId: string }) => {
  const { data: times = [], isLoading, isError, refetch } = useAdminDoctorTimes(doctorId);

  return (
    <div className="mt-5 rounded-xl border border-primary-100 bg-white p-4">
      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary-600">
        Doctor times
      </p>
      <DoctorTimeCreateForm doctorId={doctorId} />
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={times.length === 0}
        errorMessageProps={{
          message: "Could not load doctor times.",
          onRetry: () => {
            void refetch();
          },
        }}
        noDataMessageProps={{ message: "No times yet." }}
      >
        <div className="mt-4 flex flex-wrap gap-2">
          {times.map((time) => (
            <DoctorTimeItem key={time.id} doctorId={doctorId} time={time} />
          ))}
        </div>
      </WithLoadingAndError>
    </div>
  );
};

export default AdminDoctorTimesManager;
