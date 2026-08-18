import type { PatientAppointment } from "@/Features/Auth/@types";
import { supabase } from "@/lib/supabaseClient";

export const getPatientAppointments = async (patientId: string): Promise<PatientAppointment[]> => {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, doctor_id, appointment_date, time_slot, type, status, fee_amount")
    .eq("patient_id", patientId)
    .order("appointment_date", { ascending: true });

  if (error) throw error;

  const appointments = (data ?? []) as AppointmentRow[];
  if (appointments.length === 0) return [];

  const doctorIds = appointments.map((appointment) => appointment.doctor_id);
  const [{ data: doctors, error: doctorsError }, { data: profiles, error: profilesError }] = await Promise.all([
    supabase.from("doctors").select("id, degree").in("id", doctorIds),
    supabase.from("profiles").select("id, first_name, last_name, image_url").in("id", doctorIds),
  ]);

  if (doctorsError) throw doctorsError;
  if (profilesError) throw profilesError;

  const doctorMap = new Map((doctors as DoctorRow[]).map((doctor) => [doctor.id, doctor]));
  const profileMap = new Map((profiles as ProfileRow[]).map((profile) => [profile.id, profile]));

  return appointments.map((appointment) => {
    const doctor = doctorMap.get(appointment.doctor_id);
    const profile = profileMap.get(appointment.doctor_id);
    return {
      id: appointment.id,
      doctorId: appointment.doctor_id,
      doctorName: profile ? `Dr. ${profile.first_name} ${profile.last_name}` : "Shefaa doctor",
      doctorDegree: doctor?.degree ?? "Medical specialist",
      doctorImageUrl: profile?.image_url ?? null,
      appointmentDate: appointment.appointment_date,
      timeSlot: appointment.time_slot,
      type: appointment.type,
      status: appointment.status,
      feeAmount: Number(appointment.fee_amount),
    };
  });
};
