import * as Yup from "yup";
import type { AdminAppointmentValues } from "../@types/adminAppointment";

export const adminAppointmentValidationSchema: Yup.ObjectSchema<AdminAppointmentValues> =
  Yup.object({
    patientId: Yup.string().required("Choose patient"),
    doctorId: Yup.string().required("Choose doctor"),
    appointmentDate: Yup.string().required("Choose date"),
    timeSlot: Yup.string().required("Choose time"),
    scheduleId: Yup.string().required("Choose available time"),
    status: Yup.string().required("Choose status"),
  });
