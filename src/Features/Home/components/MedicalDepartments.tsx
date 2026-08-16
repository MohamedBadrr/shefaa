import { departmentsData } from "@/Constants/data";
import WrapperComponent from "@/components/ui/WrapperComponent";
import DepartmentCard from "./DepartmentCard";

const MedicalDepartments = () => {
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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departmentsData.map((department) => (
            <DepartmentCard key={department.name} {...department} />
          ))}
        </div>
      </div>
    </WrapperComponent>
  );
};

export default MedicalDepartments;
