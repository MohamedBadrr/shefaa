import type {
  AdminAppointment,
  AppointmentRow,
  ProfileRow,
} from "../@types/adminAppointment";

export function getAppointmentUserIds(appointments: AppointmentRow[]) {
  const userIds = appointments.flatMap((appointment) => [
    appointment.doctor_id,
    appointment.patient_id,
  ]);

  return [...new Set(userIds)];
}

function getFullName(profile?: ProfileRow) {
  return profile ? `${profile.first_name} ${profile.last_name}` : "User";
}

export function mapAppointments(
  appointments: AppointmentRow[],
  profiles: ProfileRow[],
): AdminAppointment[] {
  const profileMap = new Map(profiles.map((profile) => [profile.id, profile]));

  return appointments.map((appointment) => ({
    id: appointment.id,
    doctorId: appointment.doctor_id,
    doctorName: getFullName(profileMap.get(appointment.doctor_id)),
    patientId: appointment.patient_id,
    patientName: getFullName(profileMap.get(appointment.patient_id)),
    appointmentDate: appointment.appointment_date,
    timeSlot: appointment.time_slot,
    type: appointment.type,
    status: appointment.status,
    feeAmount: Number(appointment.fee_amount ?? 0),
  }));
}
