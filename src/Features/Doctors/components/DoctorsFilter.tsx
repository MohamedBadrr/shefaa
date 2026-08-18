import SelectField from "@/components/fields/SelectField";
import { Formik } from "formik";
import type { DepartmentType } from "@/Features/Auth/@types";

type DoctorsFilterProps = {
  departments: DepartmentType[];
  value: string;
  onChange: (value: string) => void;
};

const FilterField = ({
  departments,
  onChange,
}: Omit<DoctorsFilterProps, "value">) => {
  return (
    <SelectField
      name="departmentId"
      labelClassName="not-sr-only mb-2 block text-sm font-bold text-neutral-700"
      placeholder="All departments"
      options={[
        { label: "All departments", value: "all" },
        ...departments.map((department) => ({
          label: department.name,
          value: department.id,
        })),
      ]}
      triggerClassName="min-w-56"
      containerClassName="w-full sm:w-auto"
      onChange={(selectedValue) =>
        onChange(selectedValue === "all" ? "" : selectedValue)
      }
    />
  );
};

const DoctorsFilter = ({
  departments,
  value,
  onChange,
}: DoctorsFilterProps) => (
  <Formik
    initialValues={{ departmentId: value || "all" }}
    enableReinitialize
    onSubmit={() => undefined}
  >
    <FilterField departments={departments} onChange={onChange} />
  </Formik>
);

export default DoctorsFilter;
