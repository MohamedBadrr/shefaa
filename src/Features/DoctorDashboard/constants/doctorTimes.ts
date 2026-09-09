import type { DoctorTimeValues } from "../@types/doctorTimes";

export const doctorTimeInitialValues: DoctorTimeValues = {
  day: "",
  timeSlot: "",
};

export const weekDayOptions = [
  { label: "Sunday", value: "Sunday" },
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
];

export const weekDayOrder = weekDayOptions.map((day) => day.value);
