import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowLeft, Search } from "lucide-react";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Shared/Loading";
import { useDepartments } from "@/Features/Auth/hooks/useDepartments";
import DoctorCard from "@/Features/Doctors/components/DoctorCard";
import DoctorsFilter from "@/Features/Doctors/components/DoctorsFilter";
import { useDoctors } from "@/Features/Doctors/hooks/useDoctors";

const Doctors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [departmentId, setDepartmentId] = useState(
    searchParams.get("department") ?? "",
  );
  const { data: doctors = [], isLoading, isError } = useDoctors(departmentId);
  const { data: departments = [] } = useDepartments();

  return (
    <main>
      {/* <section className="border-b border-primary-100 bg-primary-50/70 py-12 md:py-16">
        <WrapperComponent>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700 shadow-sm ring-1 ring-primary-100">
              Find your care team
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-neutral-900 md:text-4xl">
              Find the right doctor for you.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500 md:text-base">
              Browse trusted specialists and book care that fits your needs.
            </p>
          </div>
        </WrapperComponent>
      </section> */}

      <WrapperComponent className="py-4 md:py-8">
        <div className="flex flex-col justify-between gap-5 border-b border-primary-100 pb-2 sm:flex-row sm:items-end md:items-start">
          <div>
            <p className="text-sm font-bold text-primary-700">
              {doctors.length} specialists
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-neutral-900">
              Find the right specialist
            </h2>
          </div>
          <DoctorsFilter
            departments={departments}
            value={departmentId}
            onChange={(value) => {
              setDepartmentId(value);
              setSearchParams(value ? { department: value } : {});
            }}
          />
        </div>

        {isLoading && <Loading label="Loading doctors" />}
        {isError && (
          <div className="py-20 text-center text-sm font-semibold text-red-500">
            We could not load doctors right now. Please try again later.
          </div>
        )}
        {!isLoading && !isError && doctors.length === 0 && (
          <div className="mx-auto flex max-w-lg flex-col items-center py-20 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <Search />
            </div>
            <h2 className="mt-5 text-xl font-extrabold text-neutral-900">
              No doctors found
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Try another department or check back soon.
            </p>
            {departmentId && (
              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setDepartmentId("");
                  setSearchParams({});
                }}
              >
                View all doctors
              </Button>
            )}
          </div>
        )}
        {!isLoading && !isError && doctors.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}

        <Link to="/" className="mt-10 inline-flex">
          <Button variant="ghost">
            <ArrowLeft /> Back home
          </Button>
        </Link>
      </WrapperComponent>
    </main>
  );
};

export default Doctors;
