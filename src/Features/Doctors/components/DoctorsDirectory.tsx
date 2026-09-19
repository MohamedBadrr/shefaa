import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useDoctors } from "../hooks/useDoctors";
import { useDepartmentFilter } from "../hooks/useDepartmentFilter";
import DoctorsFilter from "./DoctorsFilter";
import DoctorsGrid from "./DoctorsGrid";

const DoctorsDirectory = () => {
  const { departmentId, setDepartmentId } = useDepartmentFilter();
  const { data: doctors = [], isLoading, isError } = useDoctors(departmentId);

  return (
    <>
      <div className="flex flex-col justify-between gap-5 border-b border-primary-100 pb-2 sm:flex-row sm:items-end md:items-start">
        <div>
          <p className="text-sm font-bold text-primary-700">
            {doctors.length} specialists
          </p>
          <h1 className="mt-1 text-2xl font-extrabold text-neutral-900">
            Find the right specialist
          </h1>
        </div>
        <DoctorsFilter />
      </div>
      <WithLoadingAndError
        isLoading={isLoading}
        isError={isError}
        hasNoData={doctors.length === 0}
        errorMessageProps={{
          message: "We could not load doctors right now.",
        }}
        noDataMessageProps={{
          message: "No doctors found",
          description: "Try another department or check back soon.",
          icon: <Search />,
        }}
      >
        <DoctorsGrid doctors={doctors} />
      </WithLoadingAndError>
      {!isLoading && !isError && doctors.length === 0 && departmentId && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={() => setDepartmentId("")}>
            View all doctors
          </Button>
        </div>
      )}
    </>
  );
};

export default DoctorsDirectory;
