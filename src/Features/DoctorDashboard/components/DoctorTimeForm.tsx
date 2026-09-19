import { Form, Formik } from "formik";
import { Clock3, Plus } from "lucide-react";
import InputField from "@/components/fields/InputField";
import SelectField from "@/components/fields/SelectField";
import { Button } from "@/components/ui/button";
import { doctorTimeInitialValues, weekDayOptions } from "../constants/doctorTimes";
import { doctorTimeValidationSchema } from "../validations/doctorTimeValidation";
import { useAddDoctorTime } from "../hooks/useAddDoctorTime";
import type { DoctorTimeValues } from "../@types/doctorTimes";

import { doctorLabelClassName } from "../constants/doctorForms";

const DoctorTimeForm = () => {
  const addTimeMutation = useAddDoctorTime();

  return (
    <Formik<DoctorTimeValues>
      initialValues={doctorTimeInitialValues}
      validationSchema={doctorTimeValidationSchema}
      onSubmit={(values, helpers) => {
        addTimeMutation.mutate(values, {
          onSuccess: () => helpers.resetForm(),
          onSettled: () => helpers.setSubmitting(false),
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid gap-3 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
          <SelectField
            name="day"
            label="Day"
            placeholder="Choose day"
            options={weekDayOptions}
            labelClassName={doctorLabelClassName}
          />
          <InputField
            name="timeSlot"
            type="time"
            label="Time"
            icon={<Clock3 size={18} />}
            labelClassName={doctorLabelClassName}
          />
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="mt-5 w-full lg:w-auto"
            loading={addTimeMutation.isPending || isSubmitting}
            disabled={addTimeMutation.isPending || isSubmitting}
          >
            <Plus size={18} />
            Add time
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DoctorTimeForm;
