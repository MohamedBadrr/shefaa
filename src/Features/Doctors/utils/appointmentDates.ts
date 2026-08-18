import type { DoctorSchedule } from "@/Features/Auth/@types";

export type AppointmentOption = {
  label: string;
  value: string;
  scheduleId?: string;
};

const formatDateValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getAvailableDateOptions = (schedules: DoctorSchedule[]) => {
  const availableDays = new Set(schedules.map((schedule) => schedule.day.toLowerCase()));
  const options: AppointmentOption[] = [];
  const date = new Date();

  for (let index = 0; index < 35; index += 1) {
    const currentDate = new Date(date);
    currentDate.setDate(date.getDate() + index);
    const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });

    if (availableDays.has(dayName.toLowerCase())) {
      options.push({
        label: currentDate.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        }),
        value: formatDateValue(currentDate),
      });
    }
  }

  return options;
};

export const getTimeOptionsForDate = (
  dateValue: string,
  schedules: DoctorSchedule[],
): AppointmentOption[] => {
  if (!dateValue) return [];

  const date = new Date(`${dateValue}T00:00:00`);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  const isToday = dateValue === formatDateValue(new Date());
  const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes();

  return schedules
    .filter((schedule) => schedule.day.toLowerCase() === dayName.toLowerCase())
    .filter((schedule) => {
      if (!isToday) return true;
      const [hours, minutes] = schedule.timeSlot.split(":").map(Number);
      return hours * 60 + minutes > currentMinutes;
    })
    .map((schedule) => ({
      label: formatTime(schedule.timeSlot),
      value: schedule.timeSlot,
      scheduleId: schedule.id,
    }));
};

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
};
