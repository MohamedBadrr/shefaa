import type { DoctorAvailableSlot } from "@/Features/Auth/@types";

export type AppointmentOption = {
  label: string;
  value: string;
  scheduleId?: string;
};

export const getAvailableDateOptions = (slots: DoctorAvailableSlot[]): AppointmentOption[] => {
  const uniqueDates = [...new Set(slots.map((slot) => slot.appointmentDate))];

  return uniqueDates.map((dateValue) => ({
    label: new Date(`${dateValue}T00:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }),
    value: dateValue,
  }));
};

export const getTimeOptionsForDate = (dateValue: string, slots: DoctorAvailableSlot[]): AppointmentOption[] => {
  if (!dateValue) return [];

  return slots
    .filter((slot) => slot.appointmentDate === dateValue)
    .map((slot) => ({ label: formatTime(slot.timeSlot), value: slot.timeSlot, scheduleId: slot.id }));
};

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
};
