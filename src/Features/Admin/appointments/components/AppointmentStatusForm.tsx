import { Form, Formik } from "formik";
import SelectField from "@/components/fields/SelectField";
import { Button } from "@/components/ui/button";
import type { AdminAppointment } from "../@types/adminAppointment";
import {
  appointmentLabelClassName,
  appointmentStatusOptions,
} from "../constants/adminAppointmentForms";
import { useUpdateAdminAppointmentStatus } from "../hooks/useAdminAppointmentMutations";

const AppointmentStatusForm = ({
  appointment,
}: {
  appointment: AdminAppointment;
}) => {
  const updateStatus = useUpdateAdminAppointmentStatus();

  return (
    <Formik
      initialValues={{ status: appointment.status }}
      enableReinitialize
      onSubmit={(values) =>
        updateStatus.mutate({
          appointmentId: appointment.id,
          status: values.status,
        })
      }
    >
      <Form className="grid gap-2">
        <SelectField
          name="status"
          label="Status"
          options={appointmentStatusOptions}
          labelClassName={appointmentLabelClassName}
        />
        <Button
          type="submit"
          variant="gradient"
          loading={updateStatus.isPending}
          disabled={updateStatus.isPending}
        >
          Save status
        </Button>
      </Form>
    </Formik>
  );
};

export default AppointmentStatusForm;
