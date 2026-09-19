import type {
  DoctorAppointment,
  DoctorAppointmentRow,
  PatientNameRow,
} from "../@types/doctorAppointment";

export function mapDoctorAppointments(
  appointments: DoctorAppointmentRow[],
  patients: PatientNameRow[],
): DoctorAppointment[] {
  const patientMap = new Map(patients.map((patient) => [patient.id, patient]));

  return appointments.map((appointment) => {
    const patient = patientMap.get(appointment.patient_id);
    return {
      ...appointment,
      fee_amount: Number(appointment.fee_amount ?? 0),
      patient_name: patient ? `${patient.first_name} ${patient.last_name}` : "Patient",
    };
  });
}

export function canCancelAppointment(status: string) {
  return ["pending", "reserved", "paid_cash", "paid_online"].includes(status);
}

export function canCompleteAppointment(status: string) {
  return ["reserved", "paid_cash", "paid_online"].includes(status);
}

export function getTotalEarnings(appointments: DoctorAppointment[]) {
  return appointments
    .filter((appointment) => !["cancelled", "rejected"].includes(appointment.status))
    .reduce((total, appointment) => total + appointment.fee_amount, 0);
}
