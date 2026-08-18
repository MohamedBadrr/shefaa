import WrapperComponent from "@/components/ui/WrapperComponent";
import { useDepartments } from "@/Features/Auth/hooks/useDepartments";
import DepartmentCard from "./DepartmentCard";

const MedicalDepartments = () => {
  const { data: departments = [], isLoading, isError } = useDepartments();

  return (
    <WrapperComponent className="bg-white py-14 md:py-18">
      <div className="mx-auto max-w-253.75">
        <div className="mx-auto max-w-151 text-center">
          <h2 className="mt-3 text-[30px] leading-tight font-bold text-neutral-900 md:text-[40px]">
            Care across{" "}
            <span className="bg-linear-to-r from-primary-700 via-primary-500 to-primary-200 bg-clip-text text-transparent">
              focused specialties
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-132 text-[13px] leading-[1.65] font-medium text-neutral-400 md:text-[15px]">
            Choose the department that matches your needs and connect with the
            right healthcare specialist faster.
          </p>
        </div>

        {isLoading && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-54 animate-pulse rounded-lg border border-primary-100 bg-primary-50"
              />
            ))}
          </div>
        )}

        {isError && (
          <p className="mt-10 text-center text-sm font-semibold text-red-500">
            We could not load the departments right now. Please try again later.
          </p>
        )}

        {!isLoading && !isError && departments.length === 0 && (
          <p className="mt-10 text-center text-sm font-semibold text-neutral-500">
            No active departments are available yet.
          </p>
        )}

        {!isLoading && !isError && departments.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department) => (
              <DepartmentCard key={department.id} {...department} />
            ))}
          </div>
        )}
      </div>
    </WrapperComponent>
  );
};

export default MedicalDepartments;
