import { Form, Formik } from "formik";
import { Clock3 } from "lucide-react";
import InputField from "@/components/fields/InputField";
import SelectField from "@/components/fields/SelectField";
import { Button } from "@/components/ui/button";
import {
  doctorTimeInitialValues,
  weekDayOptions,
} from "@/Features/DoctorDashboard/constants/doctorTimes";
import { doctorTimeValidationSchema } from "@/Features/DoctorDashboard/validations/doctorTimeValidation";
import { doctorLabelClassName } from "../../constants/adminDoctorForms";
import { useAddAdminDoctorTime } from "../hooks/useAdminDoctorTimeMutations";

const DoctorTimeCreateForm = ({ doctorId }: { doctorId: string }) => {
  const addTime = useAddAdminDoctorTime(doctorId);

  return (
    <Formik
      initialValues={doctorTimeInitialValues}
      validationSchema={doctorTimeValidationSchema}
      onSubmit={(values, helpers) =>
        addTime.mutate(values, {
          onSuccess: () => helpers.resetForm(),
          onSettled: () => helpers.setSubmitting(false),
        })
      }
    >
      <Form className="mt-4 grid gap-2 md:grid-cols-[1fr_1fr_auto] md:items-center">
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
          icon={<Clock3 size={17} />}
          labelClassName={doctorLabelClassName}
        />
        <Button
          type="submit"
          variant="gradient"
          className="w-full md:mt-3 md:self-center"
          loading={addTime.isPending}
          disabled={addTime.isPending}
        >
          Add time
        </Button>
      </Form>
    </Formik>
  );
};

export default DoctorTimeCreateForm;
